$(document).ready(function(){
    "use strict"
	
	/*slideshow script code start here*/
	$('.slideshow').owlCarousel({
				loop: true,
				margin: 0,
				autoplay: true,
				smartSpeed: 1500,
				dots: false,
				nav:true,
				navText:['<i class="fa fa-long-arrow-left fa1"></i>', '<i class="fa fa-long-arrow-right fa2"></i>'],
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					991: {
						items: 1
					},
					1180: {
						items: 1
					}
				}
			});
	$('.slideshow1').owlCarousel({
				loop: true,
				margin: 0,
				autoplay: true,
				smartSpeed: 1500,
				dots: true,
				nav:true,
				navText:['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					991: {
						items: 1
					},
					1180: {
						items: 1
					}
				}
			});
			$('.slideshow2').owlCarousel({
				loop: true,
				margin: 0,
				autoplay: true,
				smartSpeed: 1500,
				dots: false,
				nav:false,
				navText:['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					991: {
						items: 1
					},
					1180: {
						items: 1
					}
				}
			});
	/*slideshow script code end here*/
	
	/*deal script code start here*/
			$('.deal').owlCarousel({
				loop: true,
				margin: 30,
				items: 2,
				autoplay: false,
				smartSpeed: 2500,
				dots: false,
				nav:true,
				navText:['<i class="fa fa-long-arrow-left fa1"></i>', '<i class="fa fa-long-arrow-right fa2"></i>'],
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					991: {
						items: 2
					},
					1180: {
						items: 2
					}
				}
			});
	/*deal script code end here*/
	
	/*vegetables script code start here*/
			$('.vegetables').owlCarousel({
				loop: true,
				margin: 25,
				items: 2,
				autoplay: false,
				smartSpeed: 2500,
				dots: false,
				nav:true,
				navText:['<i class="fa fa-long-arrow-left fa1"></i>', '<i class="fa fa-long-arrow-right fa2"></i>'],
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					991: {
						items: 2
					},
					1180: {
						items: 2
					}
				}
			});
	/*vegetables script code end here*/
	
	/*fruits script code start here*/
			$('.fruits').owlCarousel({
				loop: true,
				margin: 25,
				items: 2,
				autoplay: false,
				smartSpeed: 2500,
				dots: false,
				nav:true,
				navText:['<i class="fa fa-long-arrow-left fa1"></i>', '<i class="fa fa-long-arrow-right fa2"></i>'],
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					991: {
						items: 2
					},
					1180: {
						items: 2
					}
				}
			});
	/*fruits script code end here*/
	
	/*testimonail script code start here*/
		$('.testimonail').owlCarousel({
				loop: true,
				margin: 30,
				items: 1,
				autoplay: true,
				smartSpeed: 2500,
				dots: false,
				nav:true,
				navText:['<i class="fa fa-long-arrow-left fa1"></i>', '<i class="fa fa-long-arrow-right fa2"></i>'],
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					991: {
						items: 1
					},
					1180: {
						items: 1
					}
				}
			});
			
			$('.testimonail1').owlCarousel({
				loop: true,
				margin: 30,
				items: 2,
				autoplay: true,
				smartSpeed: 2500,
				dots: false,
				nav:true,
				navText:['<i class="fa fa-long-arrow-left fa1"></i>', '<i class="fa fa-long-arrow-right fa2"></i>'],
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					991: {
						items: 1
					},
					1180: {
						items: 1
					}
				}
			});
			
			$('.testimonail3').owlCarousel({
				loop: true,
				margin: 30,
				items: 1,
				autoplay: true,
				smartSpeed: 2500,
				dots: false,
				nav:true,
				navText:['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					991: {
						items: 1
					},
					1180: {
						items: 1
					}
				}
			});
		
			$('.testimonail4').owlCarousel({
				loop: true,
				margin: 30,
				items: 2,
				autoplay: true,
				smartSpeed: 2500,
				dots: false,
				nav:false,
				navText:['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					991: {
						items: 2
					},
					1180: {
						items: 2
					}
				}
			});
	
			$('.abtestimonail').owlCarousel({
				loop: true,
				margin: 30,
				items: 2,
				autoplay: true,
				smartSpeed: 2500,
				dots: false,
				nav:false,
				navText:['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					991: {
						items: 2
					},
					1180: {
						items: 2
					}
				}
			});
	/*testimonail script code end here*/
	
	/*carousel10 script code start here*/
	$('#carousel10').owlCarousel({
				loop: true,
				margin: 0,
				items: 5,
				autoplay: true,
				smartSpeed: 1500,
				dots: true,
				nav:false,
				navText:['<i class="fa fa-angle-left fa1"></i>', '<i class="fa fa-angle-right fa2"></i>'],
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					479: {
						items: 1
					},
					768: {
						items: 2
					},
					991: {
						items: 4
					},
					1180: {
						items: 4
					}
				}
			});
	/*carousel10 script code end here*/
	
	/*season script code start here*/
	$('#season').owlCarousel({
				loop: true,
				margin: 0,
				items: 1,
				autoplay: true,
				smartSpeed: 1500,
				dots: false,
				nav:true,
				navText:['<i class="fa fa-long-arrow-left fa1"></i>', '<i class="fa fa-long-arrow-right fa2"></i>'],
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					479: {
						items: 1
					},
					768: {
						items: 1
					},
					991: {
						items: 1
					},
					1180: {
						items: 1
					}
				}
			});
	/*season script code end here*/
	
});