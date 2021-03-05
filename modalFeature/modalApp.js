function ourSelectors() {
  var btnElement = document.querySelector(".modal-btn");
  var formElement = document.querySelector("[role='form']");
  var modalContainer = document.querySelector(".modal-container");
  var wrapperElement = document.querySelector(".wrapper");

  return {
    btnElement,
    formElement,
    modalContainer,
    wrapperElement,
  };
}

showModal();

function showModal(
  { btnElement, formElement, modalContainer, wrapperElement } = ourSelectors()
) {
  var arrOfStringsTabbableElement = [
    "A",
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
  ];

  var formElementChildren = Array.from(formElement.children).filter(
    function onlyTabbableElement(eachElement) {
      return arrOfStringsTabbableElement.includes(eachElement.tagName);
    }
  );

  var lengthOfFormChildren = formElementChildren.length;
  var firstChildOfForm = formElementChildren[0];
  var lastChildOfForm = formElementChildren[lengthOfFormChildren - 1];
  //   var focusElementWhenExitModal;

  //   var exitModalFocusOnClickedElement;
  wrapperElement.addEventListener("click", function applyOpen(event) {
    // focusElementWhenExitModal = document.activeElement;
    // console.log(focusElementWhenExitModal);
    // exitModalFocusOnClickedElement = event.target;
    if (event.target.className.includes("modal-btn")) {
      formElement.classList.remove("visually-hidden");
      wrapperElement.classList.add("modal-effect");
      firstChildOfForm.focus();
      /***** without event.preventDefault(), when we activate the button or use space bar or enter key to click the button, focus was not on the first element of the form element *****/
      event.preventDefault();
      /***** without event.preventDefault(), when we activate the button or use space bar or enter key to click the button, focus was not on the first element of the form element *****/
    }
    if (
      !wrapperElement.className.includes("visually-hidden") &&
      event.target.className.includes("modal-effect")
    ) {
      formElement.classList.add("visually-hidden");
      wrapperElement.classList.remove("modal-effect");

      /***** anchor tag below our form *****/
      //   exitModalFocusOnClickedElement.focus();
      document.querySelector("a[href='#modal']").focus();
      /***** anchor tag below our form *****/
      //   focusElementWhenExitModal.focus();
      event.preventDefault();
    }
    console.log(event);
    // console.log(focusElementWhenExitModal);
    // console.log(firstChildOfForm);
    // console.log(lastChildOfForm);
  });

  var focusElementWhenExitModal;
  btnElement.addEventListener("keydown", function spaceKeyFuntionality(event) {
    if (event.code == "Space") {
      /***** without event.preventDefault() when we hit the space bar to activate the modal and focus on first input
       * there will be a space at the beginning of the first input
       *  *****/
      event.preventDefault();
      focusElementWhenExitModal = document.activeElement;
      formElement.classList.remove("visually-hidden");
      wrapperElement.classList.add("modal-effect");
      firstChildOfForm.focus();
      console.log(document.activeElement);
      console.log(focusElementWhenExitModal);
    }
  });

  modalContainer.addEventListener("keydown", function usingSpaceKey(event) {
    /***** code: "Space", keyCode: 32, key: " " *****/
    /***** using switch statement for cleaner code *****/
    switch (event.code) {
      case "Escape":
        formElement.classList.add("visually-hidden");
        wrapperElement.classList.remove("modal-effect");
        focusElementWhenExitModal.focus();
        // console.log(focusElementWhenExitModal);
        // console.log(event);
        // console.log(focusElementWhenExitModal);
        break;
      case "Tab":
        if (event.shiftKey == true) {
          if (document.activeElement == firstChildOfForm) {
            lastChildOfForm.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement == lastChildOfForm) {
            firstChildOfForm.focus();
            event.preventDefault();
          }
        }
        break;
    }

    /***** using switch statement for cleaner code *****/

    /*
    if (event.code == "Space" || event.keyCode == 32 || event.key === " ") {
      focusElementWhenExitModal = document.activeElement;
      console.log(focusElementWhenExitModal);
      formElement.classList.toggle("visually-hidden");
      modalContainer.classList.toggle("modal-effect");
      firstChildOfForm.focus();

      //   console.log(focusElementWhenExitModal);
      //   console.dir(formElementChildren);
    }*/
    /*
    console.log(focusElementWhenExitModal);
    if (
      (event.key == "Escape" ||
        event.code == "Escape" ||
        event.keyCode == 27) &&
      !formElement.className.includes("visually-hidden")
    ) {
      console.log(focusElementWhenExitModal);
      // formElement.classList.add("visually-hidden");
      // modalContainer.classList.remove("modal-effect");
    }*/
    /* key: Shift, event.code = "ShiftLeft, event.keyC0de == 16*/
    /* key: Tab, event.code = "Tab", event.keyC0de == 9*/

    /* if (event.key == "Tab" || event.code == "Tab" || event.keyCode == 9) {*/
    //   console.dir(event);
    //   console.log(focusElementWhenExitModal);
    /***** shift key is pressed *****/
    /***** have to listen to tab and check if the event.shiftKey is true or false *****/
    console.dir(document.activeElement);
    /*if (event.shiftKey == true) {
        if (document.activeElement == firstChildOfForm) {
          lastChildOfForm.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement == lastChildOfForm) {
          firstChildOfForm.focus();
          event.preventDefault();
        }
      }
    }
      /***** have to listen to tab and check if the event.shiftKey is true or false *****/
    /***** shift key is pressed *****/
    /***** making keyboard user loop through the tabbable element of our modal *****/
    // if (!formElement.className.includes("hidden")) {
    //   alert("Hello world");
    // }
    /***** making keyboard user loop through the tabbable element of our modal *****/
    /***** let user escape modal when they hit the esc key *****/
    /***** event.key: "Escape" event.code: "Escape" event.keyCode: 27 *****/

    /***** let user escape modal when they hit the esc key *****/
  });
  //   formElement.addEventListener("submit", function focusOnBtn(event) {
  //     focusElementWhenExitModal.focus();
  //   });
}
