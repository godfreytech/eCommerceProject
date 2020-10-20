from django.contrib.auth.models import AbstractUser
from django.db import models


	class User(AbstractUser):
	    """
	        This Model checks user input character for unique values.
	    """
	    username = models.CharField(
	        'username',
	        max_length=50,
	        unique=True,
	        help_text='Required. 50 characters or fewer. Letters, digits and @/./+/-/_ only.',
	        error_messages={
	            'unique': "A user with that username already exists.",
	        },
	    )
	    email = models.EmailField(unique=True, blank=False,
	                              error_messages={
	                                  'unique': "A user with that email already exists.",
	                              })
	    about = models.TextField(blank=True)
	    phone = models.CharField(max_length=20, blank=True, verbose_name="Contact number")

	    USERNAME_FIELD = "email"
	    REQUIRED_FIELDS = ["username"]

	    def __unicode__(self):
	        return self.email


# Create your models here.
