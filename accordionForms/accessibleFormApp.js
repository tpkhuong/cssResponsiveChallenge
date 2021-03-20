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

expandContentPanel();
addFocus();

function expandContentPanel(
  { arrOfBtnElement, wrapperElement, arrOfHeadingElements } = ourSelectors()
) {
  var convertToArrBtn = Array.from(arrOfBtnElement);
  var convertToArrHeadings = Array.from(arrOfHeadingElements);

  //   wrapperElement.addEventListener("focusin", function attachClass(event) {
  //     if (event.target.className.includes("toggle-btn")) {
  //       this.classList.add("focus-ring");
  //     } else {
  //       this.classList.remove("focus-ring");
  //     }
  //   });

  wrapperElement.addEventListener("click", function showPanel(event) {
    if (event.target.className.includes("toggle-btn")) {
      let grandParentClass = event.target.parentElement.parentElement.className;
      convertToArrHeadings.forEach(function printClass(eachHeading) {
        var headingParentClass = eachHeading.parentElement.className;
        if (headingParentClass != grandParentClass) {
          eachHeading.attributes["aria-expanded"].value = "false";
        } else {
          eachHeading.attributes["aria-expanded"].value = "true";
        }
      });
    } else if (event.target.className.includes("toggle-heading")) {
      let clickHeadingElementParent = event.target.parentElement.className;
      let focusClickedHeadingBtn = event.target.firstElementChild;
      focusClickedHeadingBtn.focus();
      convertToArrHeadings.forEach(function printClass(eachHeading) {
        var headingParentClass = eachHeading.parentElement.className;
        console.log(headingParentClass);
        if (headingParentClass != clickHeadingElementParent) {
          eachHeading.attributes["aria-expanded"].value = "false";
        } else {
          eachHeading.attributes["aria-expanded"].value = "true";
        }
      });
    }
  });
}

function addFocus({ wrapperElement } = ourSelectors()) {
  wrapperElement.addEventListener("focusin", function attachClass(event) {
    if (event.target.className.includes("toggle-btn")) {
      this.classList.add("focus-ring");
    } else {
      this.classList.remove("focus-ring");
    }
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
