function ourSelectors() {
  var btnElement = document.querySelector(".modal-btn");
  var formElement = document.querySelector("[role='form']");

  return {
    btnElement,
    formElement,
  };
}

showModal();

function showModal({ btnElement, formElement } = ourSelectors()) {
  btnElement.addEventListener("click", function applyOpen(event) {
    formElement.style.backgroundColor = "red";
  });
}
