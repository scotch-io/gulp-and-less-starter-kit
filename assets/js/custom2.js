console.log('script from cutsom2');
   $(document).ready(function(){
       $(window).bind('scroll', function() {
       var navHeight = $( window ).height() - 70;
             if ($(window).scrollTop() > navHeight) {
                 $('nav').addClass('fixed');
             }
             else {
                 $('nav').removeClass('fixed');
             }
        });
    });

$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'easeInCubic',      // the easing function for animation
  scrollTime: 1000,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: 0           // offste (in px) for fixed top navigation
});