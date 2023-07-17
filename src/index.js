/* eslint-disable no-restricted-syntax */
// const minimizeIcon = document.querySelector(".minimizeIcon"); //111111111111111111111111FIXXXXXXXXXXX

import "./sass/style.scss";

const addBookBtn = document.querySelector(".addBookBtn");
const submitBtn = document.querySelector(".submitBtn");
const modal = document.querySelector(".modal");
const readBtn = document.querySelector(".readBtn");

const nameInput = document.querySelector(".nameInput");
const authorInput = document.querySelector(".authorInput");
const pageInput = document.querySelector(".pageInput");
const ratingInput = document.querySelector(".ratingInput");
const readStatusInput = document.querySelector(".readStatusInput");

const inputAll = document.querySelectorAll("input");

class Book {
  constructor(name, author, page, rating, readStatus) {
    this.name = name;
    this.author = author;
    this.page = page;
    this.rating = rating;
    this.readStatus = readStatus;
  }
  // addBook() {
  //     return `Name : ${this.name} Author : ${this.author} Year : ${this.page} Rating : ${this.rating} ReadStats : ${this.readStatus}`
  // }
}

// Pre-Defined Book
// const myLibrary = JSON.parse(localStorage.getItem("sike")) || [];
const myLibrary = [];
console.log(myLibrary);
const bookOne = new Book("The Witcher", "Andrzej Sapkowski", 235, 10, "Read");
myLibrary.push(bookOne);
displayBookToLibrary();
myLibrary.pop(bookOne);

// Loop through every item in the array myLibrary
function displayBookToLibrary() {
  for (const library of myLibrary) {
    addBook(library);
  }
}

function addBook(library) {
  // ---Created DOM Element---//
  const minimizeIcon = document.createElement("button"); // 111111111111111111111111FIXXXXXXXXXXX

  const display = document.querySelector(".display");
  const eachBookStyle = document.createElement("div");

  // EachBookStyle Section One
  const iconSection = document.createElement("div");
  const deleteBtn = document.createElement("button");

  // EachBookStyle Section Two
  const nameDiv = document.createElement("div");
  const nameSpan = document.createElement("span");

  // EachBookStyle Section Three
  const hideSection = document.createElement("div");
  const authorDiv = document.createElement("div");
  const pageDiv = document.createElement("div");
  const ratingDiv = document.createElement("div");
  const authorSpan = document.createElement("span");
  const pageSpan = document.createElement("span");
  const ratingSpan = document.createElement("span");
  const readBtnDivDisplay = document.createElement("div");
  const readBtnDisplay = document.createElement("button");

  const showMoreDiv = document.createElement("div");
  const showMoreIcon = document.createElement("div");

  // ---Classlist---//
  // EachBookStyle Section One
  iconSection.classList.add("iconSection");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("deleteBtn");
  minimizeIcon.textContent = "";
  minimizeIcon.classList.add("minimizeIcon");

  // EachBookStyle Section Two
  nameDiv.textContent = "Book";
  nameSpan.textContent = ` ${library.name}`;

  // EachBookStyle Section Three
  authorDiv.textContent = "Author";
  authorSpan.textContent = ` ${library.author}`;
  pageDiv.textContent = "Pages";
  pageSpan.textContent = ` ${library.page}`;
  ratingDiv.textContent = "Rating";

  ratingSpan.textContent = ` ${library.rating}`;
  readBtnDisplay.textContent = `${library.readStatus}`;

  // ---DOM ClassList---//
  // Main Section
  eachBookStyle.classList.add("eachBookStyle");

  // EachBookStyle Section Two
  nameDiv.classList.add("nameDiv");
  nameSpan.classList.add("nameSpan");

  // EachBookStyle Section Three
  hideSection.classList.add("hideSection");
  authorDiv.classList.add("authorDiv");
  authorSpan.classList.add("authorSpan");
  pageDiv.classList.add("yearDiv");
  pageSpan.classList.add("yearSpan");
  ratingDiv.classList.add("ratingDiv");
  ratingSpan.classList.add("ratingSpan");

  readBtnDivDisplay.classList.add("readBtnDivDisplay");
  readBtnDisplay.classList.add("readBtnDisplay");

  showMoreDiv.classList.add("showMoreDiv");
  showMoreDiv.classList.add("showMoreDivHide");
  showMoreIcon.classList.add("showMoreIcon");

  // ---Appended DOM Element---//
  // Section One
  eachBookStyle.append(iconSection);
  iconSection.append(deleteBtn);
  iconSection.append(minimizeIcon);

  // Section Two
  eachBookStyle.append(nameDiv);
  eachBookStyle.append(nameSpan);

  // Section Three
  readBtnDivDisplay.append(readBtnDisplay);
  hideSection.append(authorDiv);
  hideSection.append(authorSpan);
  hideSection.append(pageDiv);
  hideSection.append(pageSpan);
  hideSection.append(ratingDiv);
  hideSection.append(ratingSpan);
  hideSection.append(readBtnDivDisplay);
  showMoreDiv.append(showMoreIcon);

  // Main Section
  eachBookStyle.append(hideSection);
  eachBookStyle.append(showMoreDiv);
  display.append(eachBookStyle);

  // Main Element

  // ---Event Listener and Function---//
  if (readBtnDisplay.textContent === "Read") {
    readBtnDisplay.classList.remove("notReadColor");
    eachBookStyle.style.border = "3px solid rgb(77, 189, 62)";
  } else {
    readBtnDisplay.classList.add("notReadColor");
    eachBookStyle.style.border = "3px solid red";
  }

  // Toggle readBtnOnOff on EachBookStyle
  readBtnDisplay.addEventListener("click", readBtnDisplayStatus);
  minimizeIcon.addEventListener("click", minimizeIconStatus);
  showMoreIcon.addEventListener("mousedown", showMoreIconAnimation);
  removeBook(deleteBtn, eachBookStyle);

  function readBtnDisplayStatus() {
    console.log("CLICKED");
    if (readBtnDisplay.textContent === "Read") {
      readBtnDisplay.textContent = "Not Read";
      readBtnDisplay.classList.toggle("notReadColor");
      eachBookStyle.style.border = "3px solid red";
    } else {
      readBtnDisplay.textContent = "Read";
      readBtnDisplay.classList.toggle("notReadColor");
      eachBookStyle.style.border = "3px solid rgb(77, 189, 62)";
    }
    event.preventDefault();
  }
  function minimizeIconStatus() {
    // alert('damn');
    eachBookStyle.classList.toggle("eachBookStyleHeight");
    minimizeIcon.classList.toggle("minimizeIconOn");
    hideSection.classList.toggle("showMoreDivHide");
    showMoreDiv.classList.toggle("showMoreDivHide");
  }
  function showMoreIconAnimation() {
    // console.log("added");
    minimizeIcon.classList.add("shakeAnimation");
    setTimeout(toggleAnimation, 500);
    function toggleAnimation() {
      minimizeIcon.classList.remove("shakeAnimation");
      // console.log("removed");
    }
  }
}

function buttonFnc() {
  submitBtn.addEventListener("click", submitPressFnc);
  readBtn.addEventListener("click", readBtnStatusFnc);
  addBookBtn.addEventListener("click", ShowModalFnc);
}
buttonFnc();

function ShowModalFnc() {
  modal.showModal();
}

function checkValidation(elementName, elementIndex, inputAll) {
  inputAll[elementIndex].classList.add("errorMessage");
  elementName.addEventListener("click", (e) => {
    inputAll[elementIndex].classList.remove("errorMessage");
  });
}

function submitPressFnc(e) {
  const addNewBook = new Book(
    `${nameInput.value}`,
    `${authorInput.value}`,
    `${pageInput.value}`,
    `${ratingInput.value}`,
    `${readStatusInput.textContent}`
  );
  if (
    nameInput.value === "" ||
    authorInput.value === "" ||
    pageInput.value === "" ||
    ratingInput.value === "" ||
    nameInput.value == null ||
    authorInput.value == null ||
    pageInput.value == null ||
    ratingInput.value == null
  ) {
    // e.preventDefault();
    inputAll.forEach(() => {
      checkValidation(nameInput, 0, inputAll);
      checkValidation(authorInput, 1, inputAll);
      checkValidation(pageInput, 2, inputAll);
      checkValidation(ratingInput, 3, inputAll);
    });
  } else {
    e.preventDefault();
    console.log(addNewBook);
    myLibrary.push(addNewBook);
    // localStorage.setItem("sike", JSON.stringify(myLibrary));
    modal.close();
  }
  displayBookToLibrary();
  myLibrary.pop(addNewBook); // So it won't be Re-added again
  clearValueAfterSubmit();
}

function clearValueAfterSubmit() {
  nameInput.value = "";
  authorInput.value = "";
  pageInput.value = "";
  ratingInput.value = "";
  readStatusInput.textContent = "Read";
  readBtn.classList.remove("notReadColor");
  readBtn.classList.add("defaultColor");
}

function readBtnStatusFnc() {
  readBtn.classList.remove("defaultColor");

  if (readBtn.textContent === "Read") {
    readBtn.textContent = "Not Read";
    readBtn.classList.add("notReadColor");
    console.log("Red");
  } else {
    readBtn.textContent = "Read";
    readBtn.classList.remove("notReadColor");
    console.log("Green");
  }
  event.preventDefault();
}

function removeBook(deleteBtn, eachBookStyle) {
  deleteBtn.addEventListener("click", (e) => {
    eachBookStyle.remove();
  });
}
