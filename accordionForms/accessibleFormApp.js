function ourSelectors() {
  var wrapperElement = document.querySelector(".wrapper");
  var arrOfBtnElement = document.querySelectorAll(".toggle-btn");
  var arrOfHeadingElements = document.querySelectorAll(".toggle-heading");

  return {
    wrapperElement,
    arrOfBtnElement,
    arrOfHeadingElements,
  };
}

addFocusAndExpand();

function addFocusAndExpand(
  { arrOfBtnElement, wrapperElement, arrOfHeadingElements } = ourSelectors()
) {
  var convertToArrBtn = Array.from(arrOfBtnElement);
  var convertToArrHeadings = Array.from(arrOfHeadingElements);

  convertToArrHeadings.forEach(function initialState(eachHeading) {
    alert("check if heading has aria-expanded = false");
    console.log(eachHeading.attributes["aria-expanded"].value);
    // if(eachHeading.attributes[])
  });

  wrapperElement.addEventListener("focusin", function attachClass(event) {
    if (event.target.className.includes("toggle-btn")) {
      this.classList.add("focus-ring");
    } else {
      this.classList.remove("focus-ring");
    }
  });

  wrapperElement.addEventListener("click", function showPanel(event) {
    console.log(event);
  });
}

/*

wrapperElement.addEventListener("focus", function checkFocus(event) {
    console.log(event);

    // if () {
    //   this.classList.add("focus-ring");
    // } else {
    //   this.classList.remove("focus-ring");
    // }
  });
*/
