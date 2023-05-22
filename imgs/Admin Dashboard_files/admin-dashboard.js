const body = document.querySelector("body");
const sidebarDiv = document.getElementById("sidebarDiv");
const sidebarChild = document.querySelectorAll(".sidebarChild");
const minimiseBtn = document.getElementById("minimiseBtn");
const mainDiv = document.getElementById("mainContentDiv");
const testDiv = document.getElementById("testDiv");
const newBtn = document.getElementById("newBtn");

function closeSideBar() {
  let id = null;
  let pos = 17;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 4) {
      clearInterval(id);
      img.src = "./imgs/Menu_icon_icon-icons.com_71858.png";
      minimisedBtn.appendChild(img);
      minimisedBtn.classList.add("minimisedBtn");
      sidebarDiv.appendChild(minimisedBtn);
      sidebarChild.forEach((element) => {
        element.style.display = "none";
      });
    } else {
      pos--;
      console.log(pos);
      body.style.gridTemplate = `0.5fr 5fr/${pos + "vw"} 4fr 17vw`;
    }
  }
}

let minimisedBtn = document.createElement("button");
let img = document.createElement("img");

function openSideBar() {
  let id = null;
  let pos = 4;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 17) {
      clearInterval(id);
    } else {
      pos++;
      console.log(pos);
      body.style.gridTemplate = `0.5fr 5fr/${pos + "vw"} 4fr 17vw`;
      sidebarChild.forEach((element) => {
        element.style.display = "";
        minimisedBtn.remove();
      });
    }
  }
}

minimisedBtn.addEventListener("click", () => {
  openSideBar();
});

minimiseBtn.addEventListener("click", () => {
  closeSideBar();
});

function createCard() {
  let newCard = document.createElement("div");
  mainDiv.appendChild(newCard);
  let cardTile = document.createElement("input");
  cardTile.classList.add("cardTitle");
  newCard.appendChild(cardTile);
  let cardText = document.createElement("input");
  cardText.classList.add("cardText");
  newCard.appendChild(cardText);
  let btnDiv = document.createElement("div");
  newCard.appendChild(btnDiv);
}

newBtn.addEventListener("click", () => {
  createCard();
});
