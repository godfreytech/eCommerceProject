from django.db.models import Count
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import UpdateView, ListView
from django.utils.decorators import method_decorator
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.utils import timezone
from django.utils.html import mark_safe

from .models import Board, Topic, Post
from .forms import NewTopicForm, PostForm


class BoardListView(ListView):
    model = Board
    context_object_name = 'boards'
    template_name = 'forum/home.html'


class TopicListView(ListView):
    model = Topic
    context_object_name = 'topics'
    template_name = 'forum/topics.html'
    paginate_by = 20

    def get_context_data(self, **kwargs):
        """
        @param kwargs:
        @return:
        """
        kwargs['board'] = self.board
        return super().get_context_data(**kwargs)

    def get_queryset(self):
        self.board = get_object_or_404(Board, pk=self.kwargs.get('pk'))
        queryset = self.board.topics.order_by('-last_updated').annotate(replies=Count('posts') - 1)
        return queryset


class PostListView(ListView):
    model = Post
    context_object_name = 'posts'
    template_name = 'forum/topic_posts.html'
    paginate_by = 20

    def get_context_data(self, **kwargs):
        """
        @param kwargs:
        @return:
        """
        session_key = 'viewed_topic_{}'.format(self.topic.pk)

        if not self.request.session.get(session_key, False):
            self.topic.views += 1
            self.topic.save()
            self.request.session[session_key] = True

        kwargs['topic'] = self.topic
        return super().get_context_data(**kwargs)

    def get_queryset(self):
        """
        @return:
        """
        self.topic = get_object_or_404(Topic, board__pk=self.kwargs.get('pk'), pk=self.kwargs.get('topic_pk'))
        queryset = self.topic.posts.order_by('created_at')
        return queryset


@login_required
def new_topic(request, pk):
    """
    @param request:
    @param pk:
    @return:
    """
    board = get_object_or_404(Board, pk=pk)

    if request.method == 'POST':
        form = NewTopicForm(request.POST)

        if form.is_valid():
            topic = form.save(commit=False)
            topic.board = board
            topic.starter = request.user
            topic.save()

            post = Post.objects.create(
                message=form.cleaned_data.get('message'),
                topic=topic,
                created_by=request.user
            )

            return redirect('topic_posts', pk=pk, topic_pk=topic.pk)

    else:
        form = NewTopicForm()

    return render(request, 'forum/new_topic.html', {'board': board, 'form': form})


def topic_posts(request, pk, topic_pk):
    """
    @param request:
    @param pk:
    @param topic_pk:
    @return:
    """
    topic = get_object_or_404(Topic, board__pk=pk, pk=topic_pk)
    topic.views += 1
    topic.save()
    return render(request, 'forum/topic_posts.html', {'topic': topic})


@login_required
def reply_topic(request, pk, topic_pk):
    """
    @param request:
    @param pk:
    @param topic_pk:
    @return:
    """
    topic = get_object_or_404(Topic, board__pk=pk, pk=topic_pk)

    if (request.method == 'POST'):
        form = PostForm(request.POST)

        if (form.is_valid()):
            post = form.save(commit=False)
            post.topic = topic
            post.created_by = request.user
            post.save()

            topic.last_updated = timezone.now()
            topic.save()

            return redirect('topic_posts', pk=pk, topic_pk=topic_pk)

    else:
        form = PostForm()

    return render(request, 'forum/reply_topic.html', {'topic': topic, 'form': form})


@method_decorator(login_required, name='dispatch')
class PostUpdateView(UpdateView):
    model = Post
    fields = ('message',)
    template_name = 'forum/edit_post.html'
    pk_url_kwarg = 'post_pk'
    context_object_name = 'post'

    def get_queryset(self):
        """
        @return:
        """
        queryset = super().get_queryset()
        return queryset.filter(created_by=self.request.user)

    def form_valid(self, form):
        """
        @param form:
        @return:
        """
        post = form.save(commit=False)
        post.updated_by = self.request.user
        post.updated_at = timezone.now()
        post.save()

        return redirect('topic_posts',
                        pk=post.topic.board.pk,
                        topic_pk=post.topic.pk)

# Create your views here.
