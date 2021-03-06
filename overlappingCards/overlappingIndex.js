document
  .querySelector(".embed-responsive")
  .addEventListener("keydown", function whatKeyWasPressed(event) {
    console.log(event);
    /* key: "Escape" keyCode: 27 or code: "Escape"*/
    /*key: "Tab" code: "Tab" keyCode: 9 */
    console.dir(event.target);
    var videoElement = document.querySelector(".embed-responsive-item");

    var elementThatActivatedVideo;
    if (document.activeElement.textContent.includes("Manifesto")) {
      //   console.dir(event);
      //   console.dir(elementThatActivatedVideo);
      elementThatActivatedVideo = document.activeElement;
      //   console.dir(elementThatActivatedVideo);
    }
    if (
      event.keyCode == 27 ||
      event.key == "Escape" ||
      event.code == "Escape"
    ) {
      //   console.log("we are hitting the Escape key");
      //   var closeBtn = document.querySelector("div.close");
      //   let closeBtn = document.querySelector(".fa.fa-times");
      //   console.dir(videoElement);
      //   console.dir(closeBtn);
      //   closeBtn.setAttribute("tabindex", "0");
      //   closeBtn.focus();
      videoElement.pause();
      document
        .querySelector(".title-text.pp-primary-title")
        .setAttribute("tabindex", "0");
      document.querySelector(".title-text.pp-primary-title").focus();
      //   document.querySelector(".uabb-button.uabb-creative-button").focus();
      //   console.log(document.querySelector(":focus"));
    }
    if (event.key == "Tab" || event.code == "Tab" || event.keyCode == 9) {
      /***** we have to use event.preventDefault() so when we hit tab key it does select the next tabable element *****/
      // event.preventDefault();
      /***** we have to use event.preventDefault() so when we hit tab key it does select the next tabable element *****/
      videoElement.pause();
      document
        .querySelector(".title-text.pp-primary-title")
        .setAttribute("tabindex", "0");
      document.querySelector(".title-text.pp-primary-title").focus();
      /*hitting tab key will pause video and select next focusable element*/
      console.log(event);
      console.log("we hit the tab key");
    }
  });

/*
If you need to remove the activeElement you can use blur; document.activeElement.blur(). It will change the activeElement to body.

*/
