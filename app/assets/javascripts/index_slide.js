EDC = document.EDC || {}

EDC.slider = {
  bannerSelector: "#index header#banner",

  index: 1,

  totalSlides: function() {
    return $(EDC.slider.bannerSelector + " div.text").length;
  },

  nextIndex: function() {
    var index;
    if (EDC.slider.totalSlides() === EDC.slider.index) {
      index = 1;
    } else {
      index = EDC.slider.index + 1;
    }

    return index;
  },

  startAnimation: function() {
    EDC.slider.animate = setInterval(EDC.slider.change, 5000);
  },

  stopAnimation: function() {
    clearInterval(EDC.slider.animate);
  },

  change: function(newIndex) {
    EDC.slider.stopAnimation();

    EDC.slider.index = newIndex || EDC.slider.nextIndex();
    var slideClass = "slide" + EDC.slider.index;
    var slideSelector = ".slide." + slideClass;

    $(".slide").fadeOut(2000);
    $(slideSelector).fadeIn(2000);
    $(EDC.slider.bannerSelector + " nav li a").removeClass("selected");
    $(EDC.slider.bannerSelector + " nav li a[data-slide=" + EDC.slider.index + "]").addClass("selected");

    EDC.slider.startAnimation();
  }
}

$(document).ready(function() {
  EDC.slider.startAnimation();

  $(EDC.slider.bannerSelector).find("nav a").click(function(e) {
    e.preventDefault();
    var index = $(this).data("slide");
  
    EDC.slider.change(index);
  });
})