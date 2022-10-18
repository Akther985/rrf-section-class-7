$(document).ready(function(){

$(".video-play-btn").magnificpopup({
  type:'video',
})
  
  });

  $('.single-team').owlCarousel({
    loop:true,
    nav:true,    
       navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
   responsive:{
       0:{
           items:1
       },
       600:{
           items:1
       },
       1000:{
           items:4
       }
   }
 })

























      