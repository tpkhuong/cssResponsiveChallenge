function ourSelectors() {
  var btnElement = document.querySelector(".modal-btn");
  var formElement = document.querySelector(".modal-form");
  var modalContainer = document.querySelector(".modal-container");
  var wrapperElement = document.querySelector(".wrapper");
  var outsideBtn = document.querySelector(".outside-btn");
  var closeBtn = document.querySelector(".close-btn");

  return {
    btnElement,
    formElement,
    modalContainer,
    wrapperElement,
    outsideBtn,
    closeBtn,
  };
}

showModal();

function showModal(
  {
    btnElement,
    formElement,
    modalContainer,
    wrapperElement,
    closeBtn,
    outsideBtn,
  } = ourSelectors()
) {
  var arrOfStringsTabbableElement = [
    // "A", don't want to include <a> in our array of tabble elements for this situation because <a> tags are our button.
    "A",
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
  ];

  /***** this code block if we want to exclude the <a> tags *****/
  /* var formElementChildren = Array.from(formElement.children).filter(
    function onlyTabbableElement(eachElement) {
        return arrOfStringsTabbableElement.includes(eachElement.tagName);
    }
    );*/
  /***** this code block if we want to exclude the <a> tags *****/
  /***** reduce method*****/
  var formElementChildren = Array.from(formElement.children).reduce(
    function arrayOfElementForTab(buildingUp, currentValue) {
      if (arrOfStringsTabbableElement.includes(currentValue.tagName)) {
        return [...buildingUp, currentValue];
      } else {
        return buildingUp;
      }
    },
    []
  );
  /***** reduce method*****/
  var lengthOfFormChildren = formElementChildren.length;

  var firstChildOfForm = formElementChildren[0];
  var focusThisElementWhenModalOpens = formElementChildren[1];
  var lastChildOfForm = formElementChildren[lengthOfFormChildren - 1];
  //   var focusElementWhenExitModal;

  //   var exitModalFocusOnClickedElement;
  /*
  wrapperElement.addEventListener("click", function applyOpen(event) {
    // focusElementWhenExitModal = document.activeElement;
    // console.log(focusElementWhenExitModal);
    // exitModalFocusOnClickedElement = event.target;
    if (event.target.baseURI.includes("#modal")) {
      modalContainer.classList.add("hide-modal");
      modalContainer.baseURI =
        "http://127.0.0.1:5500/modalFeature/modalIndex.html#!";
    }
  });*/

  var focusElementWhenExitModal;
  btnElement.addEventListener("keydown", function spaceKeyFuntionality(event) {
    if (event.code == "Space") {
      //   console.log(Object.is(this, btnElement));
      /***** without event.preventDefault() when we hit the space bar to activate the modal and focus on first input
       * there will be a space at the beginning of the first input
       *  *****/
      /*
      focusElementWhenExitModal = document.activeElement;
      formElement.classList.remove("visually-hidden");
      wrapperElement.classList.add("modal-effect");
      firstChildOfForm.focus();*/
      event.preventDefault();
      if (!modalContainer.matches(":target")) {
        modalContainer.classList.add("modal-show");
        focusThisElementWhenModalOpens.focus();
      }
      console.log(document.activeElement);
      console.log(formElementChildren);
    } else if (event.code == "Enter") {
      document.querySelector("input[id='name']").focus();
      console.log(document.activeElement);
    }
  });

  /*btnElement.addEventListener("click", function spaceKeyFuntionality(event) {
    console.log(modalContainer.matches(":target"));*/
  /*if (event.code == "Space") {
      /***** without event.preventDefault() when we hit the space bar to activate the modal and focus on first input
       * there will be a space at the beginning of the first input
       *  *****/
  /*
      event.preventDefault();
      focusElementWhenExitModal = document.activeElement;
      formElement.classList.remove("visually-hidden");
      wrapperElement.classList.add("modal-effect");
      firstChildOfForm.focus();*/
  /*console.log(event.target.matches(":target"));
      if (!modalContainer.matches(":target")) {
        console.log("modal is opened");
      }
      console.log(document.activeElement);
      console.log(formElementChildren);
    }*/
  /*})*/

  outsideBtn.addEventListener("click", function hideModal(event) {
    // console.log(event.target.attributes.href);
    console.log(event.target);
    /***** this code also works when we have our modal open and our focus is on the closeBtn which has an href="!#"
     * so when we hit enter it will run this code and close the modal.
     *  *****/
    if (
      event.target.tagName == "A" &&
      event.target.attributes.href.value == "#!"
    ) {
      if (modalContainer.className.includes("modal-show")) {
        modalContainer.classList.remove("modal-show");
        btnElement.focus();
        event.preventDefault();
      }
    }
  });

  modalContainer.addEventListener("keydown", function usingSpaceKey(event) {
    /***** code: "Space", keyCode: 32, key: " " *****/
    /***** using switch statement for cleaner code *****/

    switch (event.code) {
      //   case "Space":
      //     console.log(modalContainer.matches(":target"));
      //     break;
      case "Escape":
        if (modalContainer.className.includes("modal-show")) {
          modalContainer.classList.remove("modal-show");
          btnElement.focus();
          event.preventDefault();
        }
        // closeBtn.focus();
        // formElement.classList.add("visually-hidden");
        // wrapperElement.classList.remove("modal-effect");
        // focusElementWhenExitModal.focus();
        // console.log(focusElementWhenExitModal);
        // console.log(event);
        // console.log(focusElementWhenExitModal);
        break;
      case "Tab":
        // console.log(document.activeElement);
        // console.log(firstChildOfForm);
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
      case "Space":
        if (
          document.activeElement == closeBtn &&
          modalContainer.className.includes("modal-show")
        ) {
          modalContainer.classList.remove("modal-show");
          btnElement.focus();
          event.preventDefault();
        }
        break;
      case "Enter":
        console.log(document.activeElement);
        if (
          document.activeElement == closeBtn &&
          modalContainer.className.includes("modal-show")
        ) {
          modalContainer.classList.remove("modal-show");
          btnElement.focus();
          event.preventDefault();
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
    // console.dir(document.activeElement);
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

function save() {
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
}
