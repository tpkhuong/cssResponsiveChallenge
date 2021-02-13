// document
//   .querySelector("body")
//   .addEventListener("click", function getInfo(event) {
//     console.dir(event.target);
//   });

/*
get height and width of target.element
*/
function ourSelectors() {
  var selectTheArticle = document.querySelector(".testimonial__profiles");
  /* might not have to use the selector below */
  var selectTheProfiles = document.querySelectorAll(".testimonial__profile");
  /* target element is the article/container containing all the div with the class: __displays*/
  var displayElements = document.querySelectorAll(".testimonials__display");
  var arrowForDisplay = document.querySelector(".arrow-container");
  var selectRadioButtons = document.querySelectorAll("[name='displays']");
  return {
    selectTheArticle,
    selectTheProfiles,
    displayElements,
    arrowForDisplay,
    selectRadioButtons,
  };
}

var selectTheArticle = document.querySelector(".testimonial__profiles");
/* might not have to use the selector below */
var selectTheProfiles = document.querySelectorAll(".testimonial__profile");
/* target element is the article/container containing all the div with the class: __displays*/
var displayElements = document.querySelector(".testimonials__displays");

function showDisplayOnProfileClicked(
  { selectTheArticle, displayElements } = ourSelectors()
) {
  selectTheArticle.addEventListener("click", function getInfo(event) {
    /*element in the convert array we want to change the z-index*/
    var arrOfDisplays = Array.from(displayElements);
    // var arrOfDisplays = convertCollectionToArr.slice(1);
    /*elements in the makeToArray we want to */
    // var makeToArray = Array.from(selectTheProfiles);

    var [checkThisStr, secondStr] = event.target.parentElement.id.split("-");
    var [checkParentElementStr, secondPartOfParentStr] = event.target.id.split(
      "-"
    );
    // var parentElementWithTestimonialsProfileClass = event.target.className;
    // console.dir(event.target);
    // console.log(checkThisStr);
    if (
      event.target.id.includes("-profile") &&
      event.target.className.includes("testimonial__profile")
    ) {
      arrOfDisplays.forEach(function moveElementToTheFront(eachElement) {
        if (eachElement.id.includes(checkParentElementStr)) {
          /* toggle show and hidden class which will change the z-index*/

          eachElement.classList.add("show");
        } else {
          eachElement.classList.remove("show");
          /*hidden in our css file is below the show declartion.*/
          // eachElement.classList.add("hidden");
        }
        /*if we clicked on parent/div element containing the div element(profiles)*/
      });
    } else {
      // console.log(parentElementWithTestimonialsProfileClass);
      arrOfDisplays.forEach(function moveElementToTheFront(eachElement) {
        if (eachElement.id.includes(checkThisStr)) {
          /* toggle show and hidden class which will change the z-index*/
          eachElement.classList.add("show");
        } else {
          eachElement.classList.remove("show");
          /*hidden in our css file is below the show declartion.*/
          // eachElement.classList.add("hidden");
        }
        /*if we clicked on parent/div element containing the div element(profiles)*/
      });
    }
  });
}

// showDisplayOnProfileClicked();
// arrowDisplayProfileFunctionality();
arrowDisplayProfileFunctionalityWithRadioButton();

/* using radio button and using js for arrow funtionality with radio buttons */

function arrowDisplayProfileFunctionalityWithRadioButton(
  { arrowForDisplay, selectRadioButtons } = ourSelectors()
) {
  arrowForDisplay.addEventListener(
    "click",
    function switchDisplayClickingArrow(event) {
      // console.log(displayElements.scrollHeight);
      // console.log(displayElements.scrollWidth);
      var arrOfInputRadioButtons = Array.from(selectRadioButtons);
      // console.dir(inputRadioButtons);
      var arrowDirectionClicked = event.target.className.split("-");
      var indexOfRadioButtonThatIsChecked;

      arrOfInputRadioButtons.forEach(function printChecked(eachElement, index) {
        if (eachElement.checked) {
          indexOfRadioButtonThatIsChecked = index;
        }
      });

      if (arrowDirectionClicked.includes("right")) {
        rightArrowClickedRadioButton(
          indexOfRadioButtonThatIsChecked,
          arrOfInputRadioButtons
        );
      } else {
        leftArrowClickedRadioButton(
          indexOfRadioButtonThatIsChecked,
          arrOfInputRadioButtons
        );
      }
    }
  );
}

function leftArrowClickedRadioButton(indexInput, arrInput) {
  var [firstRadioBtn, secondRadioBtn, thirdRadioBtn] = arrInput;
  switch (indexInput) {
    case 0:
      thirdRadioBtn.checked = true;
      firstRadioBtn.checked = false;
      secondRadioBtn.checked = false;
      break;
    case 1:
      firstRadioBtn.checked = true;
      secondRadioBtn.checked = false;
      thirdRadioBtn.checked = false;
      break;
    case 2:
      secondRadioBtn.checked = true;
      firstRadioBtn.checked = false;
      thirdRadioBtn.checked = false;
      break;
  }
}
function rightArrowClickedRadioButton(indexInput, arrInput) {
  var [firstRadioBtn, secondRadioBtn, thirdRadioBtn] = arrInput;
  switch (indexInput) {
    case 0:
      secondRadioBtn.checked = true;
      firstRadioBtn.checked = false;
      thirdRadioBtn.checked = false;
      break;
    case 1:
      thirdRadioBtn.checked = true;
      firstRadioBtn.checked = false;
      secondRadioBtn.checked = false;
      break;
    case 2:
      firstRadioBtn.checked = true;
      secondRadioBtn.checked = false;
      thirdRadioBtn.checked = false;
      break;
  }
}

/* using js for both profile clicked and arrow clicked*/

function arrowDisplayProfileFunctionality(
  { arrowForDisplay, displayElements, selectRadioButtons } = ourSelectors()
) {
  /* prettier-ignore*/
  arrowForDisplay.addEventListener("click", function switchDisplayClickingArrow(event) {
      // console.log(displayElements.scrollHeight);
      // console.log(displayElements.scrollWidth);
    console.dir(selectRadioButtons);
    var inputRadioButtons = Array.from(selectRadioButtons);
    console.log(inputRadioButtons[0].check);
      var arrOfDisplays = Array.from(displayElements);
      // var arrOfDisplays = convertToArrOfDisplays.slice(1);
      /* array of referenced elements */
      var [firstDisplay,middleDisplay,lastDisplay] = arrOfDisplays;
      /* variable below will let us know which arrow is clicked left or right */
      var arrowDirectionClicked = event.target.className.split("-")
      /* get element with the show class */
  /* use a loop */
  /*check what element is showing first then work on logic of which arrows is clicked? */
      var indexOfDisplayElementWithClassOfShow;   
      arrOfDisplays.forEach(function changeWhichDisplayShows(eachElement,index,listOfELements) {
       if (eachElement.className.includes("show")) {
           indexOfDisplayElementWithClassOfShow = index;
       }
      });
    
      if (arrowDirectionClicked.includes("right")) {
          rightArrowClicked(indexOfDisplayElementWithClassOfShow,arrOfDisplays);
      } else {
          console.log(indexOfDisplayElementWithClassOfShow);
          leftArrowClicked(indexOfDisplayElementWithClassOfShow, arrOfDisplays);
      }
    }
  );
}

function leftArrowClicked(indexInput, arrInput) {
  /* array of referenced elements */
  var [firstDisplay, middleDisplay, lastDisplay] = arrInput;
  switch (indexInput) {
    case 0:
      lastDisplay.classList.add("show");
      middleDisplay.classList.remove("show");
      firstDisplay.classList.remove("show");
      break;
    case 1:
      firstDisplay.classList.add("show");
      middleDisplay.classList.remove("show");
      lastDisplay.classList.remove("show");
      break;
    case 2:
      middleDisplay.classList.add("show");
      firstDisplay.classList.remove("show");
      lastDisplay.classList.remove("show");
      break;
  }
}

function rightArrowClicked(indexInput, arrInput) {
  /* array of referenced elements */
  var [firstDisplay, middleDisplay, lastDisplay] = arrInput;
  switch (indexInput) {
    case 0:
      middleDisplay.classList.add("show");
      firstDisplay.classList.remove("show");
      lastDisplay.classList.remove("show");
      break;
    case 1:
      lastDisplay.classList.add("show");
      firstDisplay.classList.remove("show");
      middleDisplay.classList.remove("show");
      break;
    case 2:
      firstDisplay.classList.add("show");
      middleDisplay.classList.remove("show");
      lastDisplay.classList.remove("show");
      break;
  }
}

function changingDisplayElementZindex() {
  selectTheArticle.addEventListener("click", function getInfo(event) {
    /*element in the convert array we want to change the z-index*/
    var convertCollectionToArr = Array.from(targetElement.children);
    var arrOfDisplays = convertCollectionToArr.slice(1);
    /*elements in the makeToArray we want to */
    var makeToArray = Array.from(selectTheProfiles);

    var [checkThisStr, secondStr] = event.target.parentElement.id.split("-");

    console.log(checkThisStr);
    arrOfDisplays.forEach(function moveElementToTheFront(eachElement) {
      if (eachElement.id.includes(checkThisStr)) {
        eachElement.style["z-index"] = 1000;
      } else {
        eachElement.style["z-index"] = -1;
      }
    });
    //   code if we want match the clicked profile with the display element.
    //   var getTargetElement = convertCollectionToArr.filter(
    //     function getUniqueIdElement(eachValue) {
    //       return eachValue.id.includes(checkThisStr);
    //     }
    //   );

    //   console.log(convertCollectionToArr);
    // works
    //   convertCollectionToArr[0].style["z-index"] = 1000;
    //   console.log(makeToArray);

    //   console.dir(event.target.parentElement.id);

    //   var [firstElement, secondElement, thirdElement] = convertCollectionToArr;
    //   console.dir(typeof firstElement.id);
    //   console.dir(secondElement);
    //   console.dir(thirdElement);
  });
}

/*when we click on the profile we want to select the corresponding large element and give it a higher z-index*/
/*check index of both arrays?*/

function commentsAndStuff() {
  // var arrOfDisplays = convertToArrOfDisplays.slice(1);
  /* array of referenced elements */
  /* get element with the show class */
  /* use a loop */
  /*check what element is showing first then work on logic of which arrows is clicked? */
  // var indexOfDisplayElementWithClassOfShow;
  // arrOfDisplays.forEach(function changeWhichDisplayShows(
  //   eachElement,
  //   index,
  //   listOfELements
  // ) {
  //   if (eachElement.className.includes("show")) {
  //     indexOfDisplayElementWithClassOfShow = index;
  //   }
  // });
}