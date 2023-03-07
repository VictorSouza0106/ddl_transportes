// Adding cellphone class

let cardList = document.getElementById("cardListPlaces");

cardList.addEventListener("click", appersAnimation(cardList));

function appersAnimation(cardList) {
  cardList.children[1].style.marginBottom = "100px";

  let cardQtd = cardList.children.length;

  for (let i = 0; i < cardQtd; i++) {
    setTimeout(() => {
      cardList.children[i].style.opacity = 1;
    }, 1000 * i);
  }

  console.log("click me", cardQtd);
}
