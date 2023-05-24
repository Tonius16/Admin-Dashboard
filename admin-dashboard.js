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
  let cardTitle = document.createElement("input");
  let cardText = document.createElement("textarea");
  if (cardTitle.value === "" || cardText.value === "") {
    newBtn.disabled = true;
  }
  let btnDiv = document.createElement("div");
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
  cardTitle.maxLength = "45";
  cardTitle.style.width = "99%";
  cardText.classList.add("cardText");
  cardText.style.width = "99%";
  cardText.style.height = "70%";
  cardText.style.resize = "none";
  newCard.appendChild(cardText);
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

  let inputTitle = document.createElement("h1");
  let inputText = document.createElement("h4");

  cardTitle.addEventListener("keydown", (arg) => {
    console.log(arg.key);
    if (arg.key === "Enter") {
      inputTitle.textContent = cardTitle.value;
      newCard.insertBefore(inputTitle, newCard.firstChild);
      cardTitle.style.display = "none";
      inputTitle.style.display = "";
      if (inputTitle.textContent === "" || inputText.textContent === "") {
        newBtn.disabled = true;
      }
      if (inputTitle.textContent != "" && inputText.textContent != "") {
        newBtn.disabled = false;
      }
    }
  });
  cardText.addEventListener("keydown", (arg) => {
    console.log(arg.key);
    if (arg.key === "Enter") {
      inputText.textContent = cardText.value;
      console.log(cardText.value);
      newCard.insertBefore(inputText, newCard.childNodes[2]);
      cardText.style.display = "none";
      inputText.style.display = "";
      if (inputTitle.textContent === "" || inputText.textContent === "") {
        newBtn.disabled = true;
      }
      if (inputTitle.textContent != "" && inputText.textContent != "") {
        newBtn.disabled = false;
      }
    }
  });
  editBtn.addEventListener("click", () => {
    inputTitle.style.display = "none";
    cardTitle.style.display = "";
    inputText.style.display = "none";
    cardText.style.display = "";
    cardTitle.focus();
  });
  removeBtn.addEventListener("click", () => {
    newCard.remove();
  });
  shareBtn.addEventListener("click", () => {
    alert("A share window");
  });
  cardTitle.focus();
}

newBtn.addEventListener("click", () => {
  createCard();
});
