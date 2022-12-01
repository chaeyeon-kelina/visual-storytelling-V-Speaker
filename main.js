window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

var mHtml = $("html");
var page = 1;

mHtml.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
  if (mHtml.is(":animated")) return;
  if (e.originalEvent.deltaY > 0) {
    if (page == 3) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  if (page == 1) {
    var posTop = (page - 1) * ($(window).height() + 50);
  } else if (page == 2) {
    var posTop = (page - 1) * ($(window).height() + 50);
  } else {
    var posTop = (page - 1) * ($(window).height() + 170);
  }
  mHtml.animate({ scrollTop: posTop });
});
