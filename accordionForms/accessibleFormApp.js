function ourSelectors() {
  var wrapperElement = document.querySelector(".wrapper");
  var arrOfBtnElement = document.querySelectorAll(".toggle-btn");

  return {
    wrapperElement,
    arrOfBtnElement,
  };
}

function addFocusAndExpand({ wrapperElement } = ourSelectors()) {
  wrapperElement.addEventListener("keydown", function checkFocus(event) {});
}
