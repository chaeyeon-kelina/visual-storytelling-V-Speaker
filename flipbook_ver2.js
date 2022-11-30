var flipbookEL = document.getElementById("flipbook");

window.addEventListener("resize", function (e) {
  flipbookEL.style.width = "";
  flipbookEL.style.height = "";
  $(flipbookEL).turn(
    "size",
    flipbookEL.clientWidth,
    // 576.6,
    flipbookEL.clientHeight
    // 648
  );
});

$(flipbookEL).turn({
  autoCenter: true,
  width: 1153.2,
  height: 648,
  // width: 100%,
  // height: 100%
});

function addPage(page, book) {
  // 	First check if the page is already in the book
  if (!book.turn("hasPage", page)) {
    // Create an element for this page
    var element = $("<div />", {
      class: "page " + (page % 2 == 0 ? "odd" : "even"),
      id: "page-" + page,
    }).html('<i class="loader"></i>');
    // If not then add the page
    book.turn("addPage", element, page);
    // Let's assum that the data is comming from the server and the request takes 1s.
    setTimeout(function () {
      element.html('<div class="data">Data for page ' + page + "</div>");
    }, 1000);
  }
}
