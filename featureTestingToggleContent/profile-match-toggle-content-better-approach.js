// document
//   .querySelector("body")
//   .addEventListener("click", function getInfo(event) {
//     console.dir(event.target);
//   });

/*
get height and width of target.element
*/
alert(
  "we have the index of the radio btn selected(profile display). next we will work on left arrow and right arrow functionality"
);
function ourSelectors() {
  // var selectTheArticle = document.querySelector(".testimonial__profiles");
  /* might not have to use the selector below */
  // var selectTheProfiles = document.querySelectorAll(".testimonial__profile");
  /* target element is the article/container containing all the div with the class: __displays*/
  // var displayElements = document.querySelectorAll(".testimonials__display");
  /* when we were selecting our arrow container using document.querySelector, our function arrowDisplayProfileFunctionalityWithRadioButton
  did not work because we were selecting ONLY one of the arrow-container. Since we have THREE div element container holding our displays(article elements)
  we have to select all of the arrow container in each of our article element with the class testimonials__displays
  */
  /***** selecting our article/display panels *****/
  var articleDisplayPanels = document.querySelectorAll(
    ".testimonials__displays"
  );
  var arrowForDisplay = document.querySelectorAll(".arrow-container");
  /* we didnt have to change the radio selector because we were already using document.querySelectorAll to select those radio buttons. */
  /****** select radio btns inside id=display-one *******/
  var nonprofitRadioBtnInsideDisplayPanel = document.querySelectorAll(
    "[name='non-profit-profile-display']"
  );
  /****** select radio btns inside id=display-two *******/
  /****** select radio btns inside id=display-three *******/
  // var selectRadioButtons = document.querySelectorAll("[name='displays']");

  /*select the radio button that switched between the display container*/
  var radioBtnThatControlsDisplayPanel = document.querySelectorAll(
    "[name='toggle-between-containers']"
  );
  return {
    arrowForDisplay,
    articleDisplayPanels,
    radioBtnThatControlsDisplayPanel,
  };
}

radioBtnFuntionalityBasedOnPanelSelected();

function radioBtnFuntionalityBasedOnPanelSelected(
  { articleDisplayPanels, radioBtnThatControlsDisplayPanel } = ourSelectors()
) {
  var radioBtnChecked;
  var wordToMatchThePanel;
  var listOfRadioBtnsConvertToArr = Array.from(
    radioBtnThatControlsDisplayPanel
  );
  // var listOfNonprofitRadioBtn = Array.from(nonprofitRadioBtnInsideDisplayPanel);

  listOfRadioBtnsConvertToArr.forEach(function findRadioBtnWithChecked(
    radioBtn
  ) {
    if (radioBtn.checked === true) {
      radioBtnChecked = radioBtn;
      wordToMatchThePanel = radioBtn.id;
    }
  });
  console.log(radioBtnChecked);
  console.log(wordToMatchThePanel);
  /***** apply class display none based on radio btn clicked on load *****/
  applyDisplayNoneBasedOnRadioBtnChecked(
    wordToMatchThePanel,
    articleDisplayPanels
  );
  /***** apply class display none based on radio btn clicked on load *****/

  /***** apply attributes to input of article/displayPanel on load *****/
  addAttributesToInputElement(wordToMatchThePanel, articleDisplayPanels);
  /***** apply attributes to input of article/displayPanel on load *****/

  /***** remove attributes to input of article/displayPanel on load *****/
  removeAttributesFromInputElement(wordToMatchThePanel, articleDisplayPanels);

  /***** remove attributes to input of article/displayPanel on load *****/

  /***** select the arrow container of article/displayPanel on load  *****/
  arrowDisplayProfileBasedOnPanelSelected(wordToMatchThePanel);
  /***** select the arrow container of article/displayPanel on load  *****/

  /***** getting the id of the radio button that is checked. it is the three toggle top of page.(volunteer, non-profit, sponsors) *****/
  listOfRadioBtnsConvertToArr.forEach(function findTheCheckedRadioBtn(
    eachRadioBtn
  ) {
    eachRadioBtn.addEventListener(
      "change",
      function watchForChangingRadiobtn(event) {
        // console.log(event.target);
        // console.dir(eachRadioBtn.attributes);
        if (eachRadioBtn.checked === true) {
          radioBtnChecked = eachRadioBtn;
          wordToMatchThePanel = eachRadioBtn.id;
        }
        /***** apply class display none based on radio btn clicked/change *****/
        applyDisplayNoneBasedOnRadioBtnChecked(
          wordToMatchThePanel,
          articleDisplayPanels
        );
        /***** apply class display none based on radio btn clicked/change *****/

        /***** apply attributes to input of article/displayPanel based on radio btn clicked/change *****/
        addAttributesToInputElement(wordToMatchThePanel, articleDisplayPanels);
        /***** apply attributes to input of article/displayPanel based on radio btn clicked/change *****/

        /***** remove attributes to input of article/displayPanel based on radio btn clicked/change *****/
        removeAttributesFromInputElement(
          wordToMatchThePanel,
          articleDisplayPanels
        );
        /***** remove attributes to input of article/displayPanel based on radio btn clicked/change *****/

        /***** select the arrow container of article/displayPanel on radio btn clicked/change  *****/
        arrowDisplayProfileBasedOnPanelSelected(wordToMatchThePanel);
        /***** select the arrow container of article/displayPanel on radio btn clicked/change  *****/
        console.log(radioBtnChecked);
        console.log(wordToMatchThePanel);
      }
    );
  });
  /***** getting the id of the radio button that is checked. it is the three toggle top of page.(volunteer, non-profit, sponsors) *****/

  /**** come back to this
  var [firstRadionBtn, secondRadioBtn, thirdRadion] = listOfNonprofitRadioBtn;

  switch (wordToMatchThePanel) {
    case "non-profit":
      /* we also will add these attibutes according to the panel selected by the radio btns
      aria-labelledby="first-profile-display"
      aria-labelledby="second-profile-display"
      aria-labelledby="third-profile-display"
      
      firstRadionBtn.setAttribute("id", "one-display");
      secondRadioBtn.setAttribute("id", "two-display");
      thirdRadioBtn.setAttribute("id", "three-display");
  }*/
}

/***** helper function *****/

function applyDisplayNoneBasedOnRadioBtnChecked(
  matchThisStr,
  arrOfDisplayPanels
) {
  var convertToArrayDisplayPanels = Array.from(arrOfDisplayPanels);
  var [
    volunteerPanel,
    nonprofitPanel,
    sponsorsPanel,
  ] = convertToArrayDisplayPanels;

  switch (matchThisStr) {
    case "volunteer":
      volunteerPanel.classList.remove("display-none");
      nonprofitPanel.classList.add("display-none");
      sponsorsPanel.classList.add("display-none");
      break;
    case "non-profit":
      nonprofitPanel.classList.remove("display-none");
      volunteerPanel.classList.add("display-none");
      sponsorsPanel.classList.add("display-none");
      break;
    case "sponsors":
      sponsorsPanel.classList.remove("display-none");
      volunteerPanel.classList.add("display-none");
      nonprofitPanel.classList.add("display-none");
  }
}

function addAttributesToInputElement(matchThisWordStr, arrOfArticlePanels) {
  // var objOfArticle = {
  //   "aria-labelledby":
  // };
  var idOfArticleDisplayPanelParentOfInputBtn;
  // console.dir(Array.from(arrOfArticlePanels));
  Array.from(arrOfArticlePanels).forEach(function findTheMatchingId(eachPanel) {
    if (eachPanel.id.includes(matchThisWordStr)) {
      idOfArticleDisplayPanelParentOfInputBtn = eachPanel.id;
    }
  });
  /***** select radio btn based on id of article display panel *****/
  var radioInputOfArticlePanelToAddAttributes = Array.from(
    document.querySelectorAll(
      `#${idOfArticleDisplayPanelParentOfInputBtn} [name='${matchThisWordStr}-profile-display']`
    )
  );
  /***** select radio btn based on id of article display panel *****/
  var [
    firstRadioInput,
    secondRadioInput,
    thirdRadioInput,
  ] = radioInputOfArticlePanelToAddAttributes;

  firstRadioInput.setAttribute("id", "one-display");
  secondRadioInput.setAttribute("id", "two-display");
  thirdRadioInput.setAttribute("id", "three-display");

  firstRadioInput.setAttribute("aria-labelledby", "first-profile-display");
  secondRadioInput.setAttribute("aria-labelledby", "second-profile-display");
  thirdRadioInput.setAttribute("aria-labelledby", "third-profile-display");
  // console.log(radioInputOfArticlePanelToAddAttributes);
  // console.log(idOfArticleDisplayPanelParentOfInputBtn);
}

function removeAttributesFromInputElement(
  wordWeWantToMatch,
  arrOfDisplayPanelsArticleElements
) {
  /***** we want to select the two article/display panels or just the id attribute of the two elements that does not match the radio btn with the checked attribute set to true that changes based on which toggle user select *****/
  var arrOfIdOfTheTwoElementWeWantToUseToSelectInput = Array.from(
    arrOfDisplayPanelsArticleElements
  ).reduce(function getArrThatDoesNotMatchStr(buildingUp, currentValue) {
    if (currentValue.id.includes(wordWeWantToMatch)) {
      return buildingUp;
    } else {
      var strWithoutDisplayToUseInDocumentSelectorAll = currentValue.id.split(
        "-displays"
      )[0];
      return [...buildingUp, strWithoutDisplayToUseInDocumentSelectorAll];
    }
  }, []);
  console.log(arrOfIdOfTheTwoElementWeWantToUseToSelectInput);
  /***** we want to select the two article/display panels that does not match the radio btn with the checked attribute set to true that changes based on which toggle user select *****/

  /***** select radio btn based on id of article display panel *****/
  // should we put all six input radio btn that does not match the word str of the selected toggle radio btn in array then we can loop through all six and remove the attributes
  var arrSixInputRadioBtnToRemoveAttribute = arrOfIdOfTheTwoElementWeWantToUseToSelectInput.reduce(
    function getTheSixRadioBtnInput(buildingUp, currentValue) {
      var radioBtnInputOfDisplayPanel = document.querySelectorAll(
        `#${currentValue}-displays [name='${currentValue}-profile-display']`
      );
      /***** does using spread on nodeList(array like object) convert it into an array, since we are spreading it into an array. *****/
      return [...buildingUp, ...radioBtnInputOfDisplayPanel];
    },
    []
  );
  // console.log(arrSixInputRadioBtnToRemoveAttribute);
  /***** select radio btn based on id of article display panel *****/
  /***** we want to loop through the array of six input radio btn and remove attributes *****/
  arrSixInputRadioBtnToRemoveAttribute.forEach(
    function removeAttributeFromSixRadioInputs(eachRadioInput) {
      eachRadioInput.removeAttribute("id");
      eachRadioInput.removeAttribute("aria-labelledby");
    }
  );
  /***** we want to loop through the array of six input radio btn and remove attributes *****/
}

function arrowDisplayProfileBasedOnPanelSelected(
  strToUseToFindArticlePanelSelected
) {
  var inputRadioBtnOfDisplayPanelSelected = Array.from(
    document.querySelectorAll(
      `#${strToUseToFindArticlePanelSelected}-displays [name=${strToUseToFindArticlePanelSelected}-profile-display]`
    )
  );

  var arrowContainerOfDisplayPanelSelected = document.querySelector(
    `#${strToUseToFindArticlePanelSelected}-displays .arrow-container`
  );
  var indexOfRadioBtnChecked;
  inputRadioBtnOfDisplayPanelSelected.forEach(function findIndexOfCheckedTrue(
    eachRadioBtn,
    index
  ) {
    if (eachRadioBtn.checked) {
      indexOfRadioBtnChecked = index;
    }
  });
  console.log(indexOfRadioBtnChecked);
  arrowContainerOfDisplayPanelSelected.addEventListener(
    "click",
    function listenToWhichArrowIsClicked(event) {
      console.log(event.target);
    }
  );
  console.dir(inputRadioBtnOfDisplayPanelSelected);
}

/* using radio button and using js for arrow funtionality with radio buttons */
/* make our algorithm work dynamic. we have to select the radio buttons and the arrow depending on the display container: either volunteer, non-profit or sponsors */
function arrowDisplayProfileFunctionalityWithRadioButton(
  {
    arrowForDisplay,
    selectRadioButtons,
    radioBtnThatControlsDisplayPanel,
  } = ourSelectors()
) {
  var arrOfArrowForDisplay = Array.from(arrowForDisplay);

  arrOfArrowForDisplay.forEach(function addEventToEachArrowContainer(
    eachContainer
  ) {
    eachContainer.addEventListener(
      "click",
      function switchDisplayClickingArrow(event) {
        // console.log(displayElements.scrollHeight);
        // console.log(displayElements.scrollWidth);
        var arrOfInputRadioButtons = Array.from(selectRadioButtons);
        // console.dir(inputRadioButtons);
        var arrowDirectionClicked = event.target.className.split("-");
        var indexOfRadioButtonThatIsChecked;

        console.dir(event.target.parentElement);
        arrOfInputRadioButtons.forEach(function printChecked(
          eachElement,
          index
        ) {
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
  });
}

// function leftArrowClickedRadioButton(indexInput, arrInput) {
//   var [firstRadioBtn, secondRadioBtn, thirdRadioBtn] = arrInput;
//   switch (indexInput) {
//     case 0:
//       thirdRadioBtn.checked = true;
//       firstRadioBtn.checked = false;
//       secondRadioBtn.checked = false;
//       break;
//     case 1:
//       firstRadioBtn.checked = true;
//       secondRadioBtn.checked = false;
//       thirdRadioBtn.checked = false;
//       break;
//     case 2:
//       secondRadioBtn.checked = true;
//       firstRadioBtn.checked = false;
//       thirdRadioBtn.checked = false;
//       break;
//   }
// }
// function rightArrowClickedRadioButton(indexInput, arrInput) {
//   var [firstRadioBtn, secondRadioBtn, thirdRadioBtn] = arrInput;
//   switch (indexInput) {
//     case 0:
//       secondRadioBtn.checked = true;
//       firstRadioBtn.checked = false;
//       thirdRadioBtn.checked = false;
//       break;
//     case 1:
//       thirdRadioBtn.checked = true;
//       firstRadioBtn.checked = false;
//       secondRadioBtn.checked = false;
//       break;
//     case 2:
//       firstRadioBtn.checked = true;
//       secondRadioBtn.checked = false;
//       thirdRadioBtn.checked = false;
//       break;
//   }
// }

// var selectTheArticle = document.querySelector(".testimonial__profiles");
/* might not have to use the selector below */
// var selectTheProfiles = document.querySelectorAll(".testimonial__profile");
/* target element is the article/container containing all the div with the class: __displays*/
// var displayElements = document.querySelector(".testimonials__displays");

// function showDisplayOnProfileClicked(
//   { selectTheArticle, displayElements } = ourSelectors()
// ) {
//   selectTheArticle.addEventListener("click", function getInfo(event) {
//     /*element in the convert array we want to change the z-index*/
//     var arrOfDisplays = Array.from(displayElements);
//     // var arrOfDisplays = convertCollectionToArr.slice(1);
//     /*elements in the makeToArray we want to */
//     // var makeToArray = Array.from(selectTheProfiles);

//     var [checkThisStr, secondStr] = event.target.parentElement.id.split("-");
//     var [checkParentElementStr, secondPartOfParentStr] = event.target.id.split(
//       "-"
//     );
//     // var parentElementWithTestimonialsProfileClass = event.target.className;
//     // console.dir(event.target);
//     // console.log(checkThisStr);
//     if (
//       event.target.id.includes("-profile") &&
//       event.target.className.includes("testimonial__profile")
//     ) {
//       arrOfDisplays.forEach(function moveElementToTheFront(eachElement) {
//         if (eachElement.id.includes(checkParentElementStr)) {
//           /* toggle show and hidden class which will change the z-index*/

//           eachElement.classList.add("show");
//         } else {
//           eachElement.classList.remove("show");
//           /*hidden in our css file is below the show declartion.*/
//           // eachElement.classList.add("hidden");
//         }
//         /*if we clicked on parent/div element containing the div element(profiles)*/
//       });
//     } else {
//       // console.log(parentElementWithTestimonialsProfileClass);
//       arrOfDisplays.forEach(function moveElementToTheFront(eachElement) {
//         if (eachElement.id.includes(checkThisStr)) {
//           /* toggle show and hidden class which will change the z-index*/
//           eachElement.classList.add("show");
//         } else {
//           eachElement.classList.remove("show");
//           /*hidden in our css file is below the show declartion.*/
//           // eachElement.classList.add("hidden");
//         }
//         /*if we clicked on parent/div element containing the div element(profiles)*/
//       });
//     }
//   });
// }

// showDisplayOnProfileClicked();
// arrowDisplayProfileFunctionality();

// arrowDisplayProfileFunctionalityWithRadioButton();

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

/* using js for both profile clicked and arrow clicked*/
