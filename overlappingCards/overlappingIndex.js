document
  .querySelector(".embed-responsive")
  .addEventListener("keydown", function whatKeyWasPressed(event) {
    /* key: "Escape" keyCode: 27 or code: "Escape"*/
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
      // document.querySelector("div.close")
      //   let closeBtn = document.querySelector(".fa.fa-times");
      //   closeBtn.setAttribute("tabindex", "0");
      //   console.dir(videoElement);
      videoElement.pause();
      document.querySelector(".uabb-button.uabb-creative-button").focus();
      //   console.log(document.querySelector(":focus"));
    }
  });

/*
If you need to remove the activeElement you can use blur; document.activeElement.blur(). It will change the activeElement to body.

*/
