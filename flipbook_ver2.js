var flipbookEL = document.getElementById("flipbook");

window.addEventListener("resize", function (e) {
  flipbookEL.style.width = "";
  flipbookEL.style.height = "";
  $(flipbookEL).turn("size", flipbookEL.clientWidth, flipbookEL.clientHeight);
});

$(flipbookEL).turn({
  autoCenter: true,
  width: 175 * 6,
  height: 91 * 6,
});

$(function () {
  //Keep track of last scroll
  var lastScroll = 0;
  $(window).scroll(function (event) {
    //Sets the current scroll position
    var st = $(this).scrollTop();
    //Determines up-or-down scrolling
    if (st > lastScroll) {
      //downward-scrolling
    } else {
      //upward-scrolling
    }
    //Updates scroll position
    lastScroll = st;
  });
});
