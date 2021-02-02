function ourSelectors() {
  var clickedOnElement = document.querySelector(".nav-toggle");
  var navElement = document.querySelector(".nav");

  return {
    navElement,
    clickedOnElement,
  };
}

// var { navElement, clickedOnElement } = ourSelectors();

function showNavBar({ navElement, clickedOnElement } = ourSelectors()) {
  clickedOnElement.addEventListener("click", function actionClick(event) {
    navElement.classList.toggle("show");
  });
}
alert("remove padding from section elements");
showNavBar();
