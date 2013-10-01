EDC = document.EDC || {}

EDC.slider = {
  bannerSelector: "#index header#banner",

  index: 1,

  totalSlides: function() {
    return $(EDC.slider.bannerSelector + " div.text").length;
  },

  nextIndex: function() {
    if (EDC.slider.totalSlides() === EDC.slider.index) {
      EDC.slider.index = 1;
    } else {
      EDC.slider.index += 1;
    }

    return EDC.slider.index;
  },

  change: function(newIndex) {
    EDC.slider.index = newIndex || EDC.slider.nextIndex();
    var slideClass = "slide" + EDC.slider.index;
    var slideSelector = ".slide." + slideClass;

    $(".slide").fadeOut(2000);
    $(slideSelector).fadeIn(2000);
  }
}

$(document).ready(function() {
  setInterval(EDC.slider.change, 5000);
})