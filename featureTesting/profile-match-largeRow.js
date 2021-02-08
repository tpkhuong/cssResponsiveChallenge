// document
//   .querySelector("body")
//   .addEventListener("click", function getInfo(event) {
//     console.dir(event.target);
//   });

function ourSelectors() {
  return {};
}

var selectTheArticle = document.querySelector(".testimonial__profiles");
/* might not have to use the selector below */
var selectTheProfiles = document.querySelectorAll(".testimonial__profile");
/* target element is the article/container containing all the div with the class: __displays*/
var targetElement = document.querySelector(".testimonials__displays");

function showDisplayOnProfileClicked({} = ourSelectors()) {}

selectTheArticle.addEventListener("click", function getInfo(event) {
  /*element in the convert array we want to change the z-index*/
  var convertCollectionToArr = Array.from(targetElement.children);
  /*elements in the makeToArray we want to */
  var makeToArray = Array.from(selectTheProfiles);

  var [checkThisStr, secondStr] = event.target.parentElement.id.split("-");

  console.log(checkThisStr);
  convertCollectionToArr.forEach(function moveElementToTheFront(eachElement) {
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

/*when we click on the profile we want to select the corresponding large element and give it a higher z-index*/
/*check index of both arrays?*/
