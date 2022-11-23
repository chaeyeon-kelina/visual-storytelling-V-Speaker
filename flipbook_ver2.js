var flipbookEL = document.getElementById("flipbook");

window.addEventListener("resize", function (e) {
  flipbookEL.style.width = "";
  flipbookEL.style.height = "";
  $(flipbookEL).turn("size", flipbookEL.clientWidth, flipbookEL.clientHeight);
});

$(flipbookEL).turn({
  autoCenter: true,
  width: 192 * 6,
  height: 108 * 6,
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

// 기존 scroll 제거
// window.addEventListener(
//   "wheel",
//   function (e) {
//     e.preventDefault();
//   },
//   { passive: false }
// );

// requestAnimationFrame(() => {
//   const boxes = document.querySelectorAll(".box");

//   function getIntersectionRatio(i) {
//     const a = [window.scrollY, window.scrollY + window.innerHeight];
//     const b = [boxes[i].offsetTop, boxes[i].offsetTop + boxes[i].clientHeight];

//     const max = Math.max(a[0], b[0]);
//     const min = Math.min(a[1], b[1]);

//     return Math.max(0, (min - max) / (b[1] - b[0]));
//   }

//   function onScroll() {
//     const boxes = document.querySelectorAll(".section");
//     for (let i = 0; i < boxes.length; i += 1) {
//       const intersection = getIntersectionRatio(i);
//       const top = boxes[i].offsetTop - window.pageYOffset < 0;
//       boxes[i].firstChild.style.cssText = `
//         transform-origin: ${top ? "center center" : "top center"};
//         position: ${top ? "fixed" : "absolute"};
//         transform: scale(${intersection});
//         opacity: ${intersection};
//       `;
//     }
//     requestAnimationFrame(onScroll);
//   }

//   onScroll();
// });
