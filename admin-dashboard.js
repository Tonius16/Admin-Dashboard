const body = document.querySelector("body");
const sidebarDiv = document.getElementById("sidebarDiv");
const sidebarChild = document.querySelectorAll(".sidebarChild");
const minimiseBtn = document.getElementById("minimiseBtn");
const mainDiv = document.getElementById("mainContentDiv");
const testDiv = document.getElementById("testDiv");
const newBtn = document.getElementById("newBtn");
const uploadBtn = document.getElementById("uploadBtn");
const headShareBtn = document.getElementById("shareBtn");
const sidebarLinks = document.querySelectorAll("a");

function closeSideBar() {
  let id = null;
  let pos = 13;
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
      body.style.gridTemplate = `4fr/${pos + "vw"} 4fr 1fr`;
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
    if (pos == 13) {
      clearInterval(id);
    } else {
      pos++;
      console.log(pos);
      body.style.gridTemplate = `4fr/${pos + "vw"} 4fr 1fr`;
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

const cardsArray = [
  {
    headerText: "Pulsating Rock",
    bodyText: `Found it in The Den of Junipers,
  it's beating just like a heart. Still dont't know what it does.`,
    editBtn: "./imgs/edit.png",
    removeBtn: "./imgs/remove.png",
    shareBtn: "./imgs/share.png",
    editBtnClassName: "editBtn",
    removeBtnClassName: "removeBtn",
    shareBtnClassName: "shareBtn",
  },
  {
    headerText: "Animal Claws",
    bodyText: `Found them in The Hellish Desert, 
    just a bunch of regular animal claws. I can use them 
    for crafting items or potions, not worth much.`,
    editBtn: "./imgs/edit.png",
    removeBtn: "./imgs/remove.png",
    shareBtn: "./imgs/share.png",
    editBtnClassName: "editBtn",
    removeBtnClassName: "removeBtn",
    shareBtnClassName: "shareBtn",
  },
  {
    headerText: "Red Jar",
    bodyText: `Found it in The Great City, 
    the glass is red but I can still see through it. 
    Looks like it contains some strange yellow powder, 
    should ask around if someone knows what it is.`,
    editBtn: "./imgs/edit.png",
    removeBtn: "./imgs/remove.png",
    shareBtn: "./imgs/share.png",
    editBtnClassName: "editBtn",
    removeBtnClassName: "removeBtn",
    shareBtnClassName: "shareBtn",
  },
];

function generateCards() {
  for (i = 0; i < cardsArray.length; i++) {
    createCard(cardsArray[i]);
  }
}

generateCards();

function createCard(cardDefinition = null) {
  let newCard = document.createElement("div");
  let inputTitle = document.createElement("h1");
  let inputText = document.createElement("h3");
  let cardTitle;
  let cardText;
  if (cardDefinition) {
    cardTitle = document.createElement("h1");
    cardTitle.textContent = cardDefinition.headerText;
    cardTitle.setAttribute("id", "defaultTitle");
    cardText = document.createElement("h3");
    cardText.textContent = cardDefinition.bodyText;
  } else {
    cardTitle = document.createElement("input");
    cardText = document.createElement("textarea");
    cardTitle.placeholder = "Item Name";
    cardText.placeholder = "Location & Description";
  }

  let btnDiv = document.createElement("div");
  let cardBar = document.createElement("div");
  let removeBtn = document.createElement("button");
  let removeImg = document.createElement("img");
  let editBtn = document.createElement("button");
  let editImg = document.createElement("img");
  let shareBtn = document.createElement("button");
  let shareImg = document.createElement("img");
  mainDiv.appendChild(newCard);
  cardTitle.classList.add("cardTitle");
  newCard.appendChild(cardTitle);
  cardTitle.type = "text";
  cardTitle.maxLength = "35";
  cardTitle.style.width = "50%";
  cardTitle.style.height = "70%";
  cardTitle.style.alignSelf = "center";
  newCard.insertBefore(cardBar, newCard.firstChild);
  cardText.classList.add("cardText");
  newCard.appendChild(cardText);
  cardText.style.width = "90%";
  cardText.style.height = "70%";
  cardText.style.resize = "none";
  cardText.style.alignSelf = "center";
  newCard.appendChild(btnDiv);
  btnDiv.appendChild(editBtn);
  editBtn.appendChild(editImg);
  btnDiv.appendChild(removeBtn);
  removeBtn.appendChild(removeImg);
  btnDiv.appendChild(shareBtn);
  shareBtn.appendChild(shareImg);
  removeImg.src = "./imgs/remove.png";
  editImg.src = "./imgs/edit.png";
  shareImg.src = "./imgs/share.png";

  function editTitle() {
    inputTitle.textContent = cardTitle.value;
    newCard.insertBefore(inputTitle, newCard.childNodes[2]);
    cardTitle.style.display = "none";
    inputTitle.style.display = "";
    cardText.focus();
    if (inputTitle.textContent === "") {
      inputTitle.textContent = "TITLE";
    }
  }

  function editText() {
    inputText.textContent = cardText.value;
    newCard.insertBefore(inputText, newCard.childNodes[3]);
    cardText.style.display = "none";
    inputText.style.display = "";
    if (inputText.textContent === "") {
      inputText.textContent = "DESCRIPTION";
    }
  }

  editBtn.addEventListener("click", () => {
    if (
      cardTitle.textContent === "Pulsating Rock" ||
      cardTitle.textContent === "Animal Claws" ||
      cardTitle.textContent === "Red Jar"
    ) {
      cardTitle.style.display = "none";
      cardTitle = document.createElement("input");
      newCard.insertBefore(cardTitle, newCard.childNodes[2]);
      cardTitle.type = "text";
      cardTitle.maxLength = "25";
      cardTitle.style.width = "50%";
      cardTitle.style.height = "70%";
      cardTitle.style.alignSelf = "center";
      cardTitle.focus();
      cardTitle.placeholder = "Item Name";
      cardTitle.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          editTitle();
        }
      });
      cardTitle.addEventListener("blur", () => {
        editTitle();
      });
      cardText.style.display = "none";
      cardText = document.createElement("textArea");
      newCard.insertBefore(cardText, newCard.childNodes[3]);
      cardText.style.width = "90%";
      cardText.style.height = "70%";
      cardText.style.resize = "none";
      cardText.style.alignSelf = "center";
      cardText.placeholder = "Location & Description";
      cardText.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          editText();
        }
      });
      cardText.addEventListener("blur", () => {
        editText();
      });
    } else {
      inputTitle.style.display = "none";
      cardTitle.style.display = "";
      inputText.style.display = "none";
      cardText.style.display = "";
      cardTitle.focus();
    }
  });

  cardTitle.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      editTitle();
    }
  });

  cardText.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      editText();
    }
  });

  cardTitle.addEventListener("blur", () => {
    editTitle();
  });

  cardText.addEventListener("blur", () => {
    editText();
  });

  removeBtn.addEventListener("click", () => {
    newCard.remove();
  });

  shareBtn.addEventListener("click", () => {
    alert("¯\\_(ツ)_/¯");
  });
  cardTitle.focus();
}

newBtn.addEventListener("click", () => {
  createCard();
});

uploadBtn.addEventListener("click", () => {
  alert("¯\\_(ツ)_/¯");
});

headShareBtn.addEventListener("click", () => {
  alert("¯\\_(ツ)_/¯");
});

sidebarLinks.forEach((element) => {
  element.href = "javascript:;";
  element.addEventListener("click", () => {
    alert("¯\\_(ツ)_/¯");
  });
});

console.log(sidebarLinks);
