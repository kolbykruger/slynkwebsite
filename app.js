var main = function() {
     
  $('.arrow-next').click(nextSlide);


  $('.arrow-prev').click(prevSlide);
    
  var timeoutID;
  function slideAutoTransit(){
    timeoutID = setTimeout(nextSlide, 10000);  
  }
  
  
  function prevSlide() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(750).removeClass('active-slide');
    prevSlide.fadeIn(1500).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
    clearTimeout(timeoutID);
    slideAutoTransit();
  }
  
  function nextSlide() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(750).removeClass('active-slide');
    nextSlide.fadeIn(1500).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
    clearTimeout(timeoutID);
    slideAutoTransit();
  }
  
  slideAutoTransit()

}



$(document).ready(main);