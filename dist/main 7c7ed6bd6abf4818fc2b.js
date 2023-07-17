"use strict";
(self["webpackChunklibrary"] = self["webpackChunklibrary"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* eslint-disable no-restricted-syntax */
// const minimizeIcon = document.querySelector(".minimizeIcon"); //111111111111111111111111FIXXXXXXXXXXX


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
  elementName.addEventListener("click", e => {
    inputAll[elementIndex].classList.remove("errorMessage");
  });
}
function submitPressFnc(e) {
  const addNewBook = new Book(`${nameInput.value}`, `${authorInput.value}`, `${pageInput.value}`, `${ratingInput.value}`, `${readStatusInput.textContent}`);
  if (nameInput.value === "" || authorInput.value === "" || pageInput.value === "" || ratingInput.value === "" || nameInput.value == null || authorInput.value == null || pageInput.value == null || ratingInput.value == null) {
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
  deleteBtn.addEventListener("click", e => {
    eachBookStyle.remove();
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/checkbox.png */ "./src/assets/checkbox.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/eye.png */ "./src/assets/eye.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/down.png */ "./src/assets/down.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Jost&family=Noto+Serif+JP&family=Sono&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.addBookDiv {
  display: flex;
  justify-content: center;
}
.addBookBtn {
  background-color: rgb(0, 0, 0);
  padding-left: 20px;
  padding-right: 20px;
  border: 3px solid rgb(29, 100, 231);
  outline: none !important;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif !important;
  font-weight: bold;
}
.addBookBtn:hover {
  background-color: var(--darkColor);
  border: 3px solid var(--greenColor);
  transition: 0.3s;
  transform: scale(1.05);
}

.display {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: row;
  border-radius: 50px;
  margin: 10px;
  padding: 10px;
  padding-left: 30px;
  transition: 1s;
}
@media (max-width: 43.75em) {
  .display {
    margin: 0;
    padding: 0;
  }
}

.eachBookStyle {
  margin: 10px;
  padding-top: 0;
  border-radius: 10px;
  transition: 1s;
  background-color: gainsboro;
  color: var(--darkColor);
  font-size: 1.1rem;
}
.eachBookStyleHeight {
  max-height: 155px;
}

.eachBookStyle > span,
.hideSection > span {
  font-weight: bold;
  padding: 5px;
  display: block;
  overflow-wrap: break-word;
  word-wrap: break-word;
  text-align: center;
}

.iconSection {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between !important;
  margin: 0;
}

.deleteBtn,
.minimizeIcon {
  all: unset;
  padding: 0px !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
  font-size: 2rem;
  transition: 0.5s;
  border-radius: 5px;
  color: var(--darkColor);
  text-align: center;
  margin: 2px;
  transform: scale(0.8);
  background-color: aliceblue;
}

.minimizeIcon {
  background: center/contain url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;
  background-color: var(--greenColor);
  width: 10%;
  border-radius: 10px;
  color: white;
  cursor: pointer;
}
.minimizeIconOn {
  background: center/contain url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat;
  background-color: red;
  transition: 0.5s;
}

.hideSection > div,
.hideSection > span,
.nameSpan,
.nameDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.readBtnDiv,
.readBtnDivDisplay {
  margin: 0px;
  margin-top: 5px;
  display: flex;
  flex-grow: 1;
  align-items: stretch !important;
}

.readBtn,
.readBtnDisplay {
  background-color: var(--greenColor);
  flex-grow: 1;
  margin: 15px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  border: 3px solid rgb(17, 0, 0);
  outline: 2px solid rgb(255, 255, 255);
  color: var(--darkColor);
  font-weight: bold;
}
.readBtn:hover,
.readBtnDisplay:hover {
  transform: scale(1.05);
  cursor: pointer;
}

form > .readBtnDivDisplay > .readBtnDisplay {
  transform: scale(1.05);
}

form > .readBtnDivDisplay > .readBtnDisplay:hover {
  transform: scaleY(1.1);
}

.showMoreDivHide {
  display: none;
}

.showMoreIcon {
  background: center/contain url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
  transition: 1s;
}
.showMoreIcon:hover {
  transform: scale(1.1);
}

.notReadColor {
  background-color: red;
  border: 3px solid rgb(17, 0, 0);
  outline: 2px solid rgb(255, 255, 255);
  transition: 0.5s;
}

.minimizeIcon:hover {
  transform: scale(1.05);
  border-radius: 50%;
}

.deleteBtn:hover {
  cursor: pointer;
  color: rgb(255, 0, 0);
  transform: scale(1.05);
  border-radius: 50%;
  background-color: var(--darkColor);
}

.mainDivModal {
  display: flex;
  flex-direction: column;
}
.mainDivModal div > input {
  display: flex;
  flex-grow: 1;
}

.submitBtn {
  flex-grow: 0 !important;
  width: 55% !important;
  font-size: 2.5rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 5px;
  border: 2px solid rgb(0, 0, 0);
  outline: 2px solid rgb(29, 100, 231) !important;
  transition: 0.3s;
}
@media (max-width: 43.75em) {
  .submitBtn {
    font-size: 2rem;
  }
}
.submitBtn:hover {
  background-color: aliceblue !important;
  color: var(--darkColor) !important;
  width: 100% !important;
}
.submitBtnDiv {
  display: flex;
  justify-content: center;
}

.modal::backdrop {
  background-color: rgb(160, 153, 153);
  opacity: 0.5;
  transition: 1s;
}

.styleHead {
  text-align: center;
}

.defaultColor {
  background-color: var(--greenColor);
  border: 3px solid rgb(17, 0, 0);
  outline: 2px solid rgb(255, 255, 255);
}

.errorMessage {
  outline: 2px solid red;
}

:root {
  --darkColor: rgb(12, 11, 14);
  --greenColor: rgb(77, 189, 62);
}

* {
  box-sizing: border-box;
}

h1 {
  text-align: center;
  font-size: 4.5rem;
  margin-top: 0px;
  margin-bottom: 10px;
}

h2 {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin: 0;
  margin-bottom: 20px;
}
@media (max-width: 43.75em) {
  h2 {
    font-size: 2rem;
  }
}

body {
  background-color: rgb(236, 228, 217);
  font-family: "Jost", sans-serif;
  font-family: "Noto Serif JP", serif;
  font-family: "Sono", sans-serif;
  padding-top: 0px;
  background-color: var(--darkColor);
  color: white;
}

button {
  background-color: var(--darkColor);
  color: whitesmoke;
  font-size: 3rem;
  border-radius: 10px;
  border: 1px solid rgb(94, 92, 92);
  transition: 0.3s;
  padding: 10px;
}
@media (max-width: 43.75em) {
  button {
    font-size: 2rem;
  }
}
button:hover {
  cursor: pointer;
}

label {
  font-size: 1.5rem;
}

dialog {
  border-radius: 10px;
  border: 3px solid rgb(230, 221, 221) !important;
  transition: 1s;
  background-color: var(--darkColor);
  color: aliceblue;
}

input {
  font-size: 2rem;
  border-radius: 10px;
  outline: none;
  border: 3px solid var(--darkColor);
  text-align: center;
  margin: 5px;
  padding: 10px;
  background-color: gainsboro;
  color: var(--darkColor);
  width: 100%;
}
@media (max-width: 43.75em) {
  input {
    font-size: 1.5rem;
  }
}
input:focus {
  background-color: aliceblue;
  outline: 2px solid rgb(29, 100, 231);
  /* box-shadow: 1px 5px 8px rgb(29, 100, 231); */
}

/* to remove arrow from [Input[type="number"]] */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:not(:focus):not(:placeholder-shown):invalid {
  outline: 2px solid red;
}

input:not(:focus):not(:placeholder-shown):valid {
  outline: 2px solid rgba(30, 255, 0, 0.644);
}

.shakeAnimation {
  animation: shake 0.6s;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}`, "",{"version":3,"sources":["webpack://./src/sass/components/sectionOne.scss","webpack://./src/sass/style.scss","webpack://./src/sass/components/sectionTwo.scss","webpack://./src/sass/utilities/breakPoints.scss","webpack://./src/sass/components/sectionThree.scss"],"names":[],"mappings":"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","sourcesContent":[".addBook {\r\n  &Div {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  &Btn {\r\n    background-color: rgb(0, 0, 0);\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    border: 3px solid rgb(29, 100, 231);\r\n    outline: none !important;\r\n    font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\r\n      \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif !important;\r\n    font-weight: bold;\r\n    &:hover {\r\n      background-color: var(--darkColor);\r\n      border: 3px solid var(--greenColor);\r\n      transition: 0.3s;\r\n      transform: scale(1.05);\r\n    }\r\n  }\r\n}\r\n","@forward \"utilities\";\r\n@forward \"components\";\r\n@use \"utilities\" as ut;\r\n@import url(\"https://fonts.googleapis.com/css2?family=Jost&family=Noto+Serif+JP&family=Sono&display=swap\");\r\n\r\n:root {\r\n  --darkColor: rgb(12, 11, 14);\r\n  --greenColor: rgb(77, 189, 62);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-size: 4.5rem;\r\n  margin-top: 0px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nh2 {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 2rem;\r\n  margin: 0;\r\n  margin-bottom: 20px;\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 2rem;\r\n  }\r\n}\r\n\r\nbody {\r\n  background-color: rgb(236, 228, 217);\r\n  font-family: \"Jost\", sans-serif;\r\n  font-family: \"Noto Serif JP\", serif;\r\n  font-family: \"Sono\", sans-serif;\r\n  padding-top: 0px;\r\n  background-color: var(--darkColor);\r\n  color: white;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--darkColor);\r\n  color: whitesmoke;\r\n  font-size: 3rem;\r\n  border-radius: 10px;\r\n  border: 1px solid rgb(94, 92, 92);\r\n  transition: 0.3s;\r\n  padding: 10px;\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 2rem;\r\n  }\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\nlabel {\r\n  font-size: 1.5rem;\r\n}\r\n\r\ndialog {\r\n  border-radius: 10px;\r\n  border: 3px solid rgb(230, 221, 221) !important;\r\n  transition: 1s;\r\n  background-color: var(--darkColor);\r\n  color: aliceblue;\r\n}\r\n\r\ninput {\r\n  font-size: 2rem;\r\n  border-radius: 10px;\r\n  outline: none;\r\n  border: 3px solid var(--darkColor);\r\n  text-align: center;\r\n  margin: 5px;\r\n  padding: 10px;\r\n  background-color: gainsboro;\r\n  color: var(--darkColor);\r\n  width: 100%;\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 1.5rem;\r\n  }\r\n  &:focus {\r\n    background-color: aliceblue;\r\n    outline: 2px solid rgb(29, 100, 231);\r\n    /* box-shadow: 1px 5px 8px rgb(29, 100, 231); */\r\n  }\r\n}\r\n\r\n/* to remove arrow from [Input[type=\"number\"]] */\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput:not(:focus):not(:placeholder-shown):invalid {\r\n  outline: 2px solid red;\r\n}\r\n\r\ninput:not(:focus):not(:placeholder-shown):valid {\r\n  outline: 2px solid rgba(30, 255, 0, 0.644);\r\n}\r\n\r\n.shakeAnimation {\r\n  animation: shake 0.6s;\r\n}\r\n\r\n@keyframes shake {\r\n  0% {\r\n    transform: translate(1px, 1px) rotate(0deg);\r\n  }\r\n\r\n  10% {\r\n    transform: translate(-1px, -2px) rotate(-1deg);\r\n  }\r\n\r\n  20% {\r\n    transform: translate(-3px, 0px) rotate(1deg);\r\n  }\r\n\r\n  30% {\r\n    transform: translate(3px, 2px) rotate(0deg);\r\n  }\r\n\r\n  40% {\r\n    transform: translate(1px, -1px) rotate(1deg);\r\n  }\r\n\r\n  50% {\r\n    transform: translate(-1px, 2px) rotate(-1deg);\r\n  }\r\n\r\n  60% {\r\n    transform: translate(-3px, 1px) rotate(0deg);\r\n  }\r\n\r\n  70% {\r\n    transform: translate(3px, 1px) rotate(-1deg);\r\n  }\r\n\r\n  80% {\r\n    transform: translate(-1px, -1px) rotate(1deg);\r\n  }\r\n\r\n  90% {\r\n    transform: translate(1px, 2px) rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: translate(1px, -2px) rotate(-1deg);\r\n  }\r\n}\r\n","@use \"../utilities/\" as ut;\r\n.display {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n  grid-auto-flow: row;\r\n  border-radius: 50px;\r\n  margin: 10px;\r\n  padding: 10px;\r\n  padding-left: 30px;\r\n  transition: 1s;\r\n  @include ut.breakpoint(medium) {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n}\r\n.eachBookStyle {\r\n  margin: 10px;\r\n  padding-top: 0;\r\n  border-radius: 10px;\r\n  transition: 1s;\r\n  background-color: gainsboro;\r\n  color: var(--darkColor);\r\n  font-size: 1.1rem;\r\n  &Height {\r\n    max-height: 155px;\r\n  }\r\n}\r\n\r\n.eachBookStyle > span,\r\n.hideSection > span {\r\n  font-weight: bold;\r\n  padding: 5px;\r\n  display: block;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  text-align: center;\r\n}\r\n\r\n.iconSection {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  justify-content: space-between !important;\r\n  margin: 0;\r\n}\r\n\r\n.deleteBtn,\r\n.minimizeIcon {\r\n  all: unset;\r\n  padding: 0px !important;\r\n  padding-left: 10px !important;\r\n  padding-right: 10px !important;\r\n  font-size: 2rem;\r\n  transition: 0.5s;\r\n  border-radius: 5px;\r\n  color: var(--darkColor);\r\n  text-align: center;\r\n  margin: 2px;\r\n  transform: scale(0.8);\r\n  background-color: aliceblue;\r\n}\r\n\r\n.minimizeIcon {\r\n  background: center/contain url(../assets/checkbox.png) no-repeat;\r\n  background-color: var(--greenColor);\r\n  width: 10%;\r\n  border-radius: 10px;\r\n  color: white;\r\n  cursor: pointer;\r\n  &On {\r\n    background: center/contain url(../assets/eye.png) no-repeat;\r\n    background-color: red;\r\n    transition: 0.5s;\r\n  }\r\n}\r\n\r\n.hideSection > div,\r\n.hideSection > span,\r\n.nameSpan,\r\n.nameDiv {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.readBtnDiv,\r\n.readBtnDivDisplay {\r\n  margin: 0px;\r\n  margin-top: 5px;\r\n  display: flex;\r\n  flex-grow: 1;\r\n  align-items: stretch !important;\r\n}\r\n\r\n.readBtn,\r\n.readBtnDisplay {\r\n  background-color: var(--greenColor);\r\n  flex-grow: 1;\r\n  margin: 15px;\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  font-size: 1.5rem;\r\n  border: 3px solid rgb(17, 0, 0);\r\n  outline: 2px solid rgb(255, 255, 255);\r\n  color: var(--darkColor);\r\n  font-weight: bold;\r\n  &:hover {\r\n    transform: scale(1.05);\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\nform > .readBtnDivDisplay > .readBtnDisplay {\r\n  transform: scale(1.05);\r\n}\r\n\r\nform > .readBtnDivDisplay > .readBtnDisplay:hover {\r\n  transform: scaleY(1.1);\r\n}\r\n\r\n.showMoreDivHide {\r\n  display: none;\r\n}\r\n\r\n.showMoreIcon {\r\n  background: center/contain url(../assets/down.png) no-repeat;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  height: 30px;\r\n  transition: 1s;\r\n  &:hover {\r\n    transform: scale(1.1);\r\n  }\r\n}\r\n\r\n.notReadColor {\r\n  background-color: red;\r\n  border: 3px solid rgb(17, 0, 0);\r\n  outline: 2px solid rgb(255, 255, 255);\r\n  transition: 0.5s;\r\n}\r\n\r\n.minimizeIcon:hover {\r\n  transform: scale(1.05);\r\n  border-radius: 50%;\r\n}\r\n\r\n.deleteBtn:hover {\r\n  cursor: pointer;\r\n  color: rgb(255, 0, 0);\r\n  transform: scale(1.05);\r\n  border-radius: 50%;\r\n  background-color: var(--darkColor);\r\n}\r\n","$breakpoints: (\r\n  \"medium\": 43.75em,\r\n  \"large\": 56.25em,\r\n  \"xLarge\": 90em,\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n  @media (max-width: map-get($breakpoints,$size)) {\r\n    @content;\r\n  }\r\n}\r\n","@use \"../utilities/\" as ut;\r\n\r\n.mainDivModal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  & div > input {\r\n    display: flex;\r\n    flex-grow: 1;\r\n  }\r\n}\r\n\r\n// .mainDivModal > div {\r\n//   display: flex;\r\n// }\r\n\r\n.submitBtn {\r\n  flex-grow: 0 !important;\r\n  width: 55% !important;\r\n  font-size: 2.5rem;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n  padding: 5px;\r\n  border: 2px solid rgb(0, 0, 0);\r\n  outline: 2px solid rgb(29, 100, 231) !important;\r\n  transition: 0.3s;\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 2rem;\r\n  }\r\n  &:hover {\r\n    background-color: aliceblue !important;\r\n    color: var(--darkColor) !important;\r\n    width: 100% !important;\r\n  }\r\n  &Div {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n}\r\n\r\n.modal::backdrop {\r\n  background-color: rgb(160, 153, 153);\r\n  opacity: 0.5;\r\n  transition: 1s;\r\n}\r\n\r\n.styleHead {\r\n  text-align: center;\r\n}\r\n\r\n.defaultColor {\r\n  background-color: var(--greenColor);\r\n  border: 3px solid rgb(17, 0, 0);\r\n  outline: 2px solid rgb(255, 255, 255);\r\n}\r\n\r\n.errorMessage {\r\n  outline: 2px solid red;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/checkbox.png":
/*!*********************************!*\
  !*** ./src/assets/checkbox.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "checkbox .png";

/***/ }),

/***/ "./src/assets/down.png":
/*!*****************************!*\
  !*** ./src/assets/down.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "down .png";

/***/ }),

/***/ "./src/assets/eye.png":
/*!****************************!*\
  !*** ./src/assets/eye.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eye .png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsbUNBQW1DO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1DQUFtQztBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxtQ0FBbUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdTQUFnUyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLFNBQVMsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFN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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvc2Fzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz80ZDM3Iiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cclxuLy8gY29uc3QgbWluaW1pemVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW5pbWl6ZUljb25cIik7IC8vMTExMTExMTExMTExMTExMTExMTExMTExRklYWFhYWFhYWFhYWFxyXG5cclxuaW1wb3J0IFwiLi9zYXNzL3N0eWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGFkZEJvb2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZEJvb2tCdG5cIik7XHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0QnRuXCIpO1xyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbmNvbnN0IHJlYWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWRCdG5cIik7XHJcblxyXG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWVJbnB1dFwiKTtcclxuY29uc3QgYXV0aG9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhvcklucHV0XCIpO1xyXG5jb25zdCBwYWdlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VJbnB1dFwiKTtcclxuY29uc3QgcmF0aW5nSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhdGluZ0lucHV0XCIpO1xyXG5jb25zdCByZWFkU3RhdHVzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWRTdGF0dXNJbnB1dFwiKTtcclxuXHJcbmNvbnN0IGlucHV0QWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xyXG5cclxuY2xhc3MgQm9vayB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgYXV0aG9yLCBwYWdlLCByYXRpbmcsIHJlYWRTdGF0dXMpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcclxuICAgIHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICB0aGlzLnJhdGluZyA9IHJhdGluZztcclxuICAgIHRoaXMucmVhZFN0YXR1cyA9IHJlYWRTdGF0dXM7XHJcbiAgfVxyXG4gIC8vIGFkZEJvb2soKSB7XHJcbiAgLy8gICAgIHJldHVybiBgTmFtZSA6ICR7dGhpcy5uYW1lfSBBdXRob3IgOiAke3RoaXMuYXV0aG9yfSBZZWFyIDogJHt0aGlzLnBhZ2V9IFJhdGluZyA6ICR7dGhpcy5yYXRpbmd9IFJlYWRTdGF0cyA6ICR7dGhpcy5yZWFkU3RhdHVzfWBcclxuICAvLyB9XHJcbn1cclxuXHJcbi8vIFByZS1EZWZpbmVkIEJvb2tcclxuLy8gY29uc3QgbXlMaWJyYXJ5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpa2VcIikpIHx8IFtdO1xyXG5jb25zdCBteUxpYnJhcnkgPSBbXTtcclxuY29uc29sZS5sb2cobXlMaWJyYXJ5KTtcclxuY29uc3QgYm9va09uZSA9IG5ldyBCb29rKFwiVGhlIFdpdGNoZXJcIiwgXCJBbmRyemVqIFNhcGtvd3NraVwiLCAyMzUsIDEwLCBcIlJlYWRcIik7XHJcbm15TGlicmFyeS5wdXNoKGJvb2tPbmUpO1xyXG5kaXNwbGF5Qm9va1RvTGlicmFyeSgpO1xyXG5teUxpYnJhcnkucG9wKGJvb2tPbmUpO1xyXG5cclxuLy8gTG9vcCB0aHJvdWdoIGV2ZXJ5IGl0ZW0gaW4gdGhlIGFycmF5IG15TGlicmFyeVxyXG5mdW5jdGlvbiBkaXNwbGF5Qm9va1RvTGlicmFyeSgpIHtcclxuICBmb3IgKGNvbnN0IGxpYnJhcnkgb2YgbXlMaWJyYXJ5KSB7XHJcbiAgICBhZGRCb29rKGxpYnJhcnkpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQm9vayhsaWJyYXJ5KSB7XHJcbiAgLy8gLS0tQ3JlYXRlZCBET00gRWxlbWVudC0tLS8vXHJcbiAgY29uc3QgbWluaW1pemVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgLy8gMTExMTExMTExMTExMTExMTExMTExMTExRklYWFhYWFhYWFhYWFxyXG5cclxuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5XCIpO1xyXG4gIGNvbnN0IGVhY2hCb29rU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAvLyBFYWNoQm9va1N0eWxlIFNlY3Rpb24gT25lXHJcbiAgY29uc3QgaWNvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gIC8vIEVhY2hCb29rU3R5bGUgU2VjdGlvbiBUd29cclxuICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuYW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cclxuICAvLyBFYWNoQm9va1N0eWxlIFNlY3Rpb24gVGhyZWVcclxuICBjb25zdCBoaWRlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYXV0aG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBwYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCByYXRpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGF1dGhvclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjb25zdCBwYWdlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGNvbnN0IHJhdGluZ1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjb25zdCByZWFkQnRuRGl2RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgcmVhZEJ0bkRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICBjb25zdCBzaG93TW9yZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3Qgc2hvd01vcmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgLy8gLS0tQ2xhc3NsaXN0LS0tLy9cclxuICAvLyBFYWNoQm9va1N0eWxlIFNlY3Rpb24gT25lXHJcbiAgaWNvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImljb25TZWN0aW9uXCIpO1xyXG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlQnRuXCIpO1xyXG4gIG1pbmltaXplSWNvbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgbWluaW1pemVJY29uLmNsYXNzTGlzdC5hZGQoXCJtaW5pbWl6ZUljb25cIik7XHJcblxyXG4gIC8vIEVhY2hCb29rU3R5bGUgU2VjdGlvbiBUd29cclxuICBuYW1lRGl2LnRleHRDb250ZW50ID0gXCJCb29rXCI7XHJcbiAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBgICR7bGlicmFyeS5uYW1lfWA7XHJcblxyXG4gIC8vIEVhY2hCb29rU3R5bGUgU2VjdGlvbiBUaHJlZVxyXG4gIGF1dGhvckRpdi50ZXh0Q29udGVudCA9IFwiQXV0aG9yXCI7XHJcbiAgYXV0aG9yU3Bhbi50ZXh0Q29udGVudCA9IGAgJHtsaWJyYXJ5LmF1dGhvcn1gO1xyXG4gIHBhZ2VEaXYudGV4dENvbnRlbnQgPSBcIlBhZ2VzXCI7XHJcbiAgcGFnZVNwYW4udGV4dENvbnRlbnQgPSBgICR7bGlicmFyeS5wYWdlfWA7XHJcbiAgcmF0aW5nRGl2LnRleHRDb250ZW50ID0gXCJSYXRpbmdcIjtcclxuXHJcbiAgcmF0aW5nU3Bhbi50ZXh0Q29udGVudCA9IGAgJHtsaWJyYXJ5LnJhdGluZ31gO1xyXG4gIHJlYWRCdG5EaXNwbGF5LnRleHRDb250ZW50ID0gYCR7bGlicmFyeS5yZWFkU3RhdHVzfWA7XHJcblxyXG4gIC8vIC0tLURPTSBDbGFzc0xpc3QtLS0vL1xyXG4gIC8vIE1haW4gU2VjdGlvblxyXG4gIGVhY2hCb29rU3R5bGUuY2xhc3NMaXN0LmFkZChcImVhY2hCb29rU3R5bGVcIik7XHJcblxyXG4gIC8vIEVhY2hCb29rU3R5bGUgU2VjdGlvbiBUd29cclxuICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJuYW1lRGl2XCIpO1xyXG4gIG5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoXCJuYW1lU3BhblwiKTtcclxuXHJcbiAgLy8gRWFjaEJvb2tTdHlsZSBTZWN0aW9uIFRocmVlXHJcbiAgaGlkZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGVTZWN0aW9uXCIpO1xyXG4gIGF1dGhvckRpdi5jbGFzc0xpc3QuYWRkKFwiYXV0aG9yRGl2XCIpO1xyXG4gIGF1dGhvclNwYW4uY2xhc3NMaXN0LmFkZChcImF1dGhvclNwYW5cIik7XHJcbiAgcGFnZURpdi5jbGFzc0xpc3QuYWRkKFwieWVhckRpdlwiKTtcclxuICBwYWdlU3Bhbi5jbGFzc0xpc3QuYWRkKFwieWVhclNwYW5cIik7XHJcbiAgcmF0aW5nRGl2LmNsYXNzTGlzdC5hZGQoXCJyYXRpbmdEaXZcIik7XHJcbiAgcmF0aW5nU3Bhbi5jbGFzc0xpc3QuYWRkKFwicmF0aW5nU3BhblwiKTtcclxuXHJcbiAgcmVhZEJ0bkRpdkRpc3BsYXkuY2xhc3NMaXN0LmFkZChcInJlYWRCdG5EaXZEaXNwbGF5XCIpO1xyXG4gIHJlYWRCdG5EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJyZWFkQnRuRGlzcGxheVwiKTtcclxuXHJcbiAgc2hvd01vcmVEaXYuY2xhc3NMaXN0LmFkZChcInNob3dNb3JlRGl2XCIpO1xyXG4gIHNob3dNb3JlRGl2LmNsYXNzTGlzdC5hZGQoXCJzaG93TW9yZURpdkhpZGVcIik7XHJcbiAgc2hvd01vcmVJY29uLmNsYXNzTGlzdC5hZGQoXCJzaG93TW9yZUljb25cIik7XHJcblxyXG4gIC8vIC0tLUFwcGVuZGVkIERPTSBFbGVtZW50LS0tLy9cclxuICAvLyBTZWN0aW9uIE9uZVxyXG4gIGVhY2hCb29rU3R5bGUuYXBwZW5kKGljb25TZWN0aW9uKTtcclxuICBpY29uU2VjdGlvbi5hcHBlbmQoZGVsZXRlQnRuKTtcclxuICBpY29uU2VjdGlvbi5hcHBlbmQobWluaW1pemVJY29uKTtcclxuXHJcbiAgLy8gU2VjdGlvbiBUd29cclxuICBlYWNoQm9va1N0eWxlLmFwcGVuZChuYW1lRGl2KTtcclxuICBlYWNoQm9va1N0eWxlLmFwcGVuZChuYW1lU3Bhbik7XHJcblxyXG4gIC8vIFNlY3Rpb24gVGhyZWVcclxuICByZWFkQnRuRGl2RGlzcGxheS5hcHBlbmQocmVhZEJ0bkRpc3BsYXkpO1xyXG4gIGhpZGVTZWN0aW9uLmFwcGVuZChhdXRob3JEaXYpO1xyXG4gIGhpZGVTZWN0aW9uLmFwcGVuZChhdXRob3JTcGFuKTtcclxuICBoaWRlU2VjdGlvbi5hcHBlbmQocGFnZURpdik7XHJcbiAgaGlkZVNlY3Rpb24uYXBwZW5kKHBhZ2VTcGFuKTtcclxuICBoaWRlU2VjdGlvbi5hcHBlbmQocmF0aW5nRGl2KTtcclxuICBoaWRlU2VjdGlvbi5hcHBlbmQocmF0aW5nU3Bhbik7XHJcbiAgaGlkZVNlY3Rpb24uYXBwZW5kKHJlYWRCdG5EaXZEaXNwbGF5KTtcclxuICBzaG93TW9yZURpdi5hcHBlbmQoc2hvd01vcmVJY29uKTtcclxuXHJcbiAgLy8gTWFpbiBTZWN0aW9uXHJcbiAgZWFjaEJvb2tTdHlsZS5hcHBlbmQoaGlkZVNlY3Rpb24pO1xyXG4gIGVhY2hCb29rU3R5bGUuYXBwZW5kKHNob3dNb3JlRGl2KTtcclxuICBkaXNwbGF5LmFwcGVuZChlYWNoQm9va1N0eWxlKTtcclxuXHJcbiAgLy8gTWFpbiBFbGVtZW50XHJcblxyXG4gIC8vIC0tLUV2ZW50IExpc3RlbmVyIGFuZCBGdW5jdGlvbi0tLS8vXHJcbiAgaWYgKHJlYWRCdG5EaXNwbGF5LnRleHRDb250ZW50ID09PSBcIlJlYWRcIikge1xyXG4gICAgcmVhZEJ0bkRpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcIm5vdFJlYWRDb2xvclwiKTtcclxuICAgIGVhY2hCb29rU3R5bGUuc3R5bGUuYm9yZGVyID0gXCIzcHggc29saWQgcmdiKDc3LCAxODksIDYyKVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZWFkQnRuRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwibm90UmVhZENvbG9yXCIpO1xyXG4gICAgZWFjaEJvb2tTdHlsZS5zdHlsZS5ib3JkZXIgPSBcIjNweCBzb2xpZCByZWRcIjtcclxuICB9XHJcblxyXG4gIC8vIFRvZ2dsZSByZWFkQnRuT25PZmYgb24gRWFjaEJvb2tTdHlsZVxyXG4gIHJlYWRCdG5EaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZWFkQnRuRGlzcGxheVN0YXR1cyk7XHJcbiAgbWluaW1pemVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtaW5pbWl6ZUljb25TdGF0dXMpO1xyXG4gIHNob3dNb3JlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHNob3dNb3JlSWNvbkFuaW1hdGlvbik7XHJcbiAgcmVtb3ZlQm9vayhkZWxldGVCdG4sIGVhY2hCb29rU3R5bGUpO1xyXG5cclxuICBmdW5jdGlvbiByZWFkQnRuRGlzcGxheVN0YXR1cygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ0xJQ0tFRFwiKTtcclxuICAgIGlmIChyZWFkQnRuRGlzcGxheS50ZXh0Q29udGVudCA9PT0gXCJSZWFkXCIpIHtcclxuICAgICAgcmVhZEJ0bkRpc3BsYXkudGV4dENvbnRlbnQgPSBcIk5vdCBSZWFkXCI7XHJcbiAgICAgIHJlYWRCdG5EaXNwbGF5LmNsYXNzTGlzdC50b2dnbGUoXCJub3RSZWFkQ29sb3JcIik7XHJcbiAgICAgIGVhY2hCb29rU3R5bGUuc3R5bGUuYm9yZGVyID0gXCIzcHggc29saWQgcmVkXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWFkQnRuRGlzcGxheS50ZXh0Q29udGVudCA9IFwiUmVhZFwiO1xyXG4gICAgICByZWFkQnRuRGlzcGxheS5jbGFzc0xpc3QudG9nZ2xlKFwibm90UmVhZENvbG9yXCIpO1xyXG4gICAgICBlYWNoQm9va1N0eWxlLnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIHJnYig3NywgMTg5LCA2MilcIjtcclxuICAgIH1cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG1pbmltaXplSWNvblN0YXR1cygpIHtcclxuICAgIC8vIGFsZXJ0KCdkYW1uJyk7XHJcbiAgICBlYWNoQm9va1N0eWxlLmNsYXNzTGlzdC50b2dnbGUoXCJlYWNoQm9va1N0eWxlSGVpZ2h0XCIpO1xyXG4gICAgbWluaW1pemVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJtaW5pbWl6ZUljb25PblwiKTtcclxuICAgIGhpZGVTZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93TW9yZURpdkhpZGVcIik7XHJcbiAgICBzaG93TW9yZURpdi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd01vcmVEaXZIaWRlXCIpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzaG93TW9yZUljb25BbmltYXRpb24oKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImFkZGVkXCIpO1xyXG4gICAgbWluaW1pemVJY29uLmNsYXNzTGlzdC5hZGQoXCJzaGFrZUFuaW1hdGlvblwiKTtcclxuICAgIHNldFRpbWVvdXQodG9nZ2xlQW5pbWF0aW9uLCA1MDApO1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlQW5pbWF0aW9uKCkge1xyXG4gICAgICBtaW5pbWl6ZUljb24uY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlQW5pbWF0aW9uXCIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJlbW92ZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBidXR0b25GbmMoKSB7XHJcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRQcmVzc0ZuYyk7XHJcbiAgcmVhZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVhZEJ0blN0YXR1c0ZuYyk7XHJcbiAgYWRkQm9va0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgU2hvd01vZGFsRm5jKTtcclxufVxyXG5idXR0b25GbmMoKTtcclxuXHJcbmZ1bmN0aW9uIFNob3dNb2RhbEZuYygpIHtcclxuICBtb2RhbC5zaG93TW9kYWwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWxpZGF0aW9uKGVsZW1lbnROYW1lLCBlbGVtZW50SW5kZXgsIGlucHV0QWxsKSB7XHJcbiAgaW5wdXRBbGxbZWxlbWVudEluZGV4XS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JNZXNzYWdlXCIpO1xyXG4gIGVsZW1lbnROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaW5wdXRBbGxbZWxlbWVudEluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JNZXNzYWdlXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRQcmVzc0ZuYyhlKSB7XHJcbiAgY29uc3QgYWRkTmV3Qm9vayA9IG5ldyBCb29rKFxyXG4gICAgYCR7bmFtZUlucHV0LnZhbHVlfWAsXHJcbiAgICBgJHthdXRob3JJbnB1dC52YWx1ZX1gLFxyXG4gICAgYCR7cGFnZUlucHV0LnZhbHVlfWAsXHJcbiAgICBgJHtyYXRpbmdJbnB1dC52YWx1ZX1gLFxyXG4gICAgYCR7cmVhZFN0YXR1c0lucHV0LnRleHRDb250ZW50fWBcclxuICApO1xyXG4gIGlmIChcclxuICAgIG5hbWVJbnB1dC52YWx1ZSA9PT0gXCJcIiB8fFxyXG4gICAgYXV0aG9ySW5wdXQudmFsdWUgPT09IFwiXCIgfHxcclxuICAgIHBhZ2VJbnB1dC52YWx1ZSA9PT0gXCJcIiB8fFxyXG4gICAgcmF0aW5nSW5wdXQudmFsdWUgPT09IFwiXCIgfHxcclxuICAgIG5hbWVJbnB1dC52YWx1ZSA9PSBudWxsIHx8XHJcbiAgICBhdXRob3JJbnB1dC52YWx1ZSA9PSBudWxsIHx8XHJcbiAgICBwYWdlSW5wdXQudmFsdWUgPT0gbnVsbCB8fFxyXG4gICAgcmF0aW5nSW5wdXQudmFsdWUgPT0gbnVsbFxyXG4gICkge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaW5wdXRBbGwuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICAgIGNoZWNrVmFsaWRhdGlvbihuYW1lSW5wdXQsIDAsIGlucHV0QWxsKTtcclxuICAgICAgY2hlY2tWYWxpZGF0aW9uKGF1dGhvcklucHV0LCAxLCBpbnB1dEFsbCk7XHJcbiAgICAgIGNoZWNrVmFsaWRhdGlvbihwYWdlSW5wdXQsIDIsIGlucHV0QWxsKTtcclxuICAgICAgY2hlY2tWYWxpZGF0aW9uKHJhdGluZ0lucHV0LCAzLCBpbnB1dEFsbCk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coYWRkTmV3Qm9vayk7XHJcbiAgICBteUxpYnJhcnkucHVzaChhZGROZXdCb29rKTtcclxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2lrZVwiLCBKU09OLnN0cmluZ2lmeShteUxpYnJhcnkpKTtcclxuICAgIG1vZGFsLmNsb3NlKCk7XHJcbiAgfVxyXG4gIGRpc3BsYXlCb29rVG9MaWJyYXJ5KCk7XHJcbiAgbXlMaWJyYXJ5LnBvcChhZGROZXdCb29rKTsgLy8gU28gaXQgd29uJ3QgYmUgUmUtYWRkZWQgYWdhaW5cclxuICBjbGVhclZhbHVlQWZ0ZXJTdWJtaXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJWYWx1ZUFmdGVyU3VibWl0KCkge1xyXG4gIG5hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgYXV0aG9ySW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIHBhZ2VJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgcmF0aW5nSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIHJlYWRTdGF0dXNJbnB1dC50ZXh0Q29udGVudCA9IFwiUmVhZFwiO1xyXG4gIHJlYWRCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm5vdFJlYWRDb2xvclwiKTtcclxuICByZWFkQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWZhdWx0Q29sb3JcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRCdG5TdGF0dXNGbmMoKSB7XHJcbiAgcmVhZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZGVmYXVsdENvbG9yXCIpO1xyXG5cclxuICBpZiAocmVhZEJ0bi50ZXh0Q29udGVudCA9PT0gXCJSZWFkXCIpIHtcclxuICAgIHJlYWRCdG4udGV4dENvbnRlbnQgPSBcIk5vdCBSZWFkXCI7XHJcbiAgICByZWFkQnRuLmNsYXNzTGlzdC5hZGQoXCJub3RSZWFkQ29sb3JcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJlZFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVhZEJ0bi50ZXh0Q29udGVudCA9IFwiUmVhZFwiO1xyXG4gICAgcmVhZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwibm90UmVhZENvbG9yXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJHcmVlblwiKTtcclxuICB9XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQm9vayhkZWxldGVCdG4sIGVhY2hCb29rU3R5bGUpIHtcclxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlYWNoQm9va1N0eWxlLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvY2hlY2tib3gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2V5ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZG93bi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc3QmZmFtaWx5PU5vdG8rU2VyaWYrSlAmZmFtaWx5PVNvbm8mZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYWRkQm9va0RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFkZEJvb2tCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDI5LCAxMDAsIDIzMSk7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgXCJMdWNpZGEgU2FucyBSZWd1bGFyXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmFkZEJvb2tCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ncmVlbkNvbG9yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmRpc3BsYXkge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBncmlkLWF1dG8tZmxvdzogcm93O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgdHJhbnNpdGlvbjogMXM7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZGlzcGxheSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLmVhY2hCb29rU3R5bGUge1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiAxcztcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuICBjb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4uZWFjaEJvb2tTdHlsZUhlaWdodCB7XG4gIG1heC1oZWlnaHQ6IDE1NXB4O1xufVxuXG4uZWFjaEJvb2tTdHlsZSA+IHNwYW4sXG4uaGlkZVNlY3Rpb24gPiBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvblNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG59XG5cbi5kZWxldGVCdG4sXG4ubWluaW1pemVJY29uIHtcbiAgYWxsOiB1bnNldDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG59XG5cbi5taW5pbWl6ZUljb24ge1xuICBiYWNrZ3JvdW5kOiBjZW50ZXIvY29udGFpbiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbkNvbG9yKTtcbiAgd2lkdGg6IDEwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWluaW1pemVJY29uT24ge1xuICBiYWNrZ3JvdW5kOiBjZW50ZXIvY29udGFpbiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5oaWRlU2VjdGlvbiA+IGRpdixcbi5oaWRlU2VjdGlvbiA+IHNwYW4sXG4ubmFtZVNwYW4sXG4ubmFtZURpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZWFkQnRuRGl2LFxuLnJlYWRCdG5EaXZEaXNwbGF5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4ucmVhZEJ0bixcbi5yZWFkQnRuRGlzcGxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuQ29sb3IpO1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbjogMTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDE3LCAwLCAwKTtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJlYWRCdG46aG92ZXIsXG4ucmVhZEJ0bkRpc3BsYXk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvcm0gPiAucmVhZEJ0bkRpdkRpc3BsYXkgPiAucmVhZEJ0bkRpc3BsYXkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG5mb3JtID4gLnJlYWRCdG5EaXZEaXNwbGF5ID4gLnJlYWRCdG5EaXNwbGF5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMS4xKTtcbn1cblxuLnNob3dNb3JlRGl2SGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93TW9yZUljb24ge1xuICBiYWNrZ3JvdW5kOiBjZW50ZXIvY29udGFpbiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgbm8tcmVwZWF0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRyYW5zaXRpb246IDFzO1xufVxuLnNob3dNb3JlSWNvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLm5vdFJlYWRDb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDE3LCAwLCAwKTtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLm1pbmltaXplSWNvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmRlbGV0ZUJ0bjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XG59XG5cbi5tYWluRGl2TW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1haW5EaXZNb2RhbCBkaXYgPiBpbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogNTUlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMjksIDEwMCwgMjMxKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLnN1Ym1pdEJ0biB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG4uc3VibWl0QnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uc3VibWl0QnRuRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tb2RhbDo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNTMsIDE1Myk7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogMXM7XG59XG5cbi5zdHlsZUhlYWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZWZhdWx0Q29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbkNvbG9yKTtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDE3LCAwLCAwKTtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmVycm9yTWVzc2FnZSB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCByZWQ7XG59XG5cbjpyb290IHtcbiAgLS1kYXJrQ29sb3I6IHJnYigxMiwgMTEsIDE0KTtcbiAgLS1ncmVlbkNvbG9yOiByZ2IoNzcsIDE4OSwgNjIpO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNC41cmVtO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmgyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjI4LCAyMTcpO1xuICBmb250LWZhbWlseTogXCJKb3N0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2VyaWYgSlBcIiwgc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiBcIlNvbm9cIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTQsIDkyLCA5Mik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5kaWFsb2cge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjMwLCAyMjEsIDIyMSkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59XG5cbmlucHV0IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kYXJrQ29sb3IpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG4gIGNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gIGlucHV0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMjksIDEwMCwgMjMxKTtcbiAgLyogYm94LXNoYWRvdzogMXB4IDVweCA4cHggcmdiKDI5LCAxMDAsIDIzMSk7ICovXG59XG5cbi8qIHRvIHJlbW92ZSBhcnJvdyBmcm9tIFtJbnB1dFt0eXBlPVwibnVtYmVyXCJdXSAqL1xuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dDpub3QoOmZvY3VzKTpub3QoOnBsYWNlaG9sZGVyLXNob3duKTppbnZhbGlkIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcbn1cblxuaW5wdXQ6bm90KDpmb2N1cyk6bm90KDpwbGFjZWhvbGRlci1zaG93bik6dmFsaWQge1xuICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgzMCwgMjU1LCAwLCAwLjY0NCk7XG59XG5cbi5zaGFrZUFuaW1hdGlvbiB7XG4gIGFuaW1hdGlvbjogc2hha2UgMC42cztcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcbiAgfVxuICAyMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDFkZWcpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTFweCkgcm90YXRlKDFkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoLTFkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDFweCkgcm90YXRlKC0xZGVnKTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcbiAgfVxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL3NlY3Rpb25PbmUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9zZWN0aW9uVHdvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3V0aWxpdGllcy9icmVha1BvaW50cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL3NlY3Rpb25UaHJlZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQ0o7QURDRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0Esd0JBQUE7RUFDQSxpSUFBQTtFQUVBLGlCQUFBO0FDQUo7QURDSTtFQUNFLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQ047O0FDbEJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsNERBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURxQkY7QUV4QkU7RURORjtJQVdJLFNBQUE7SUFDQSxVQUFBO0VEdUJGO0FBQ0Y7O0FDckJBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxt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QTtBQTBPRjs7QUF2T0E7RUFDRSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUEwT0Y7QUVwUkU7RUZtQ0Y7SUFTSSxlQUFBO0VBNE9GO0FBQ0Y7QUEzT0U7RUFDRSxlQUFBO0FBNk9KOztBQXpPQTtFQUNFLGlCQUFBO0FBNE9GOztBQXpPQTtFQUNFLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQTRPRjs7QUF6T0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUE0T0Y7QUVyVEU7RUYrREY7SUFZSSxpQkFBQTtFQThPRjtBQUNGO0FBN09FO0VBQ0UsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLCtDQUFBO0FBK09KOztBQTNPQSxnREFBQTtBQUNBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQThPRjs7QUEzT0E7RUFDRSxzQkFBQTtBQThPRjs7QUEzT0E7RUFDRSwwQ0FBQTtBQThPRjs7QUEzT0E7RUFDRSxxQkFBQTtBQThPRjs7QUEzT0E7RUFDRTtJQUNFLDJDQUFBO0VBOE9GO0VBM09BO0lBQ0UsOENBQUE7RUE2T0Y7RUExT0E7SUFDRSw0Q0FBQTtFQTRPRjtFQXpPQTtJQUNFLDJDQUFBO0VBMk9GO0VBeE9BO0lBQ0UsNENBQUE7RUEwT0Y7RUF2T0E7SUFDRSw2Q0FBQTtFQXlPRjtFQXRPQTtJQUNFLDRDQUFBO0VBd09GO0VBck9BO0lBQ0UsNENBQUE7RUF1T0Y7RUFwT0E7SUFDRSw2Q0FBQTtFQXNPRjtFQW5PQTtJQUNFLDJDQUFBO0VBcU9GO0VBbE9BO0lBQ0UsNkNBQUE7RUFvT0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYWRkQm9vayB7XFxyXFxuICAmRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAmQnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyOSwgMTAwLCAyMzEpO1xcclxcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgUmVndWxhclxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXHJcXG4gICAgICBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcXHJcXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ncmVlbkNvbG9yKTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAZm9yd2FyZCBcXFwidXRpbGl0aWVzXFxcIjtcXHJcXG5AZm9yd2FyZCBcXFwiY29tcG9uZW50c1xcXCI7XFxyXFxuQHVzZSBcXFwidXRpbGl0aWVzXFxcIiBhcyB1dDtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3N0JmZhbWlseT1Ob3RvK1NlcmlmK0pQJmZhbWlseT1Tb25vJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tZGFya0NvbG9yOiByZ2IoMTIsIDExLCAxNCk7XFxyXFxuICAtLWdyZWVuQ29sb3I6IHJnYig3NywgMTg5LCA2Mik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiA0LjVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIyOCwgMjE3KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2VyaWYgSlBcXFwiLCBzZXJpZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU29ub1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nLXRvcDogMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTQsIDkyLCA5Mik7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyMzAsIDIyMSwgMjIxKSAhaW1wb3J0YW50O1xcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcclxcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kYXJrQ29sb3IpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbiAgJjpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigyOSwgMTAwLCAyMzEpO1xcclxcbiAgICAvKiBib3gtc2hhZG93OiAxcHggNXB4IDhweCByZ2IoMjksIDEwMCwgMjMxKTsgKi9cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogdG8gcmVtb3ZlIGFycm93IGZyb20gW0lucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdXSAqL1xcclxcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxcclxcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6bm90KDpmb2N1cyk6bm90KDpwbGFjZWhvbGRlci1zaG93bik6aW52YWxpZCB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpub3QoOmZvY3VzKTpub3QoOnBsYWNlaG9sZGVyLXNob3duKTp2YWxpZCB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgzMCwgMjU1LCAwLCAwLjY0NCk7XFxyXFxufVxcclxcblxcclxcbi5zaGFrZUFuaW1hdGlvbiB7XFxyXFxuICBhbmltYXRpb246IHNoYWtlIDAuNnM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hha2Uge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDIwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDFkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMzAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDQwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTFweCkgcm90YXRlKDFkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoLTFkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNjAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA3MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDFweCkgcm90YXRlKC0xZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDgwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDkwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzIHV0O1xcclxcbi5kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG4gIHRyYW5zaXRpb246IDFzO1xcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uZWFjaEJvb2tTdHlsZSB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcXHJcXG4gIGNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAmSGVpZ2h0IHtcXHJcXG4gICAgbWF4LWhlaWdodDogMTU1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5lYWNoQm9va1N0eWxlID4gc3BhbixcXHJcXG4uaGlkZVNlY3Rpb24gPiBzcGFuIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvblNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlQnRuLFxcclxcbi5taW5pbWl6ZUljb24ge1xcclxcbiAgYWxsOiB1bnNldDtcXHJcXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDJweDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbmltaXplSWNvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIvY29udGFpbiB1cmwoLi4vYXNzZXRzL2NoZWNrYm94LnBuZykgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW5Db2xvcik7XFxyXFxuICB3aWR0aDogMTAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICZPbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGNlbnRlci9jb250YWluIHVybCguLi9hc3NldHMvZXllLnBuZykgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oaWRlU2VjdGlvbiA+IGRpdixcXHJcXG4uaGlkZVNlY3Rpb24gPiBzcGFuLFxcclxcbi5uYW1lU3BhbixcXHJcXG4ubmFtZURpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZWFkQnRuRGl2LFxcclxcbi5yZWFkQnRuRGl2RGlzcGxheSB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVhZEJ0bixcXHJcXG4ucmVhZEJ0bkRpc3BsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW5Db2xvcik7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTcsIDAsIDApO1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gLnJlYWRCdG5EaXZEaXNwbGF5ID4gLnJlYWRCdG5EaXNwbGF5IHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiAucmVhZEJ0bkRpdkRpc3BsYXkgPiAucmVhZEJ0bkRpc3BsYXk6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3dNb3JlRGl2SGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd01vcmVJY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IGNlbnRlci9jb250YWluIHVybCguLi9hc3NldHMvZG93bi5wbmcpIG5vLXJlcGVhdDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubm90UmVhZENvbG9yIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxNywgMCwgMCk7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLm1pbmltaXplSWNvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlQnRuOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcclxcbn1cXHJcXG5cIixcIiRicmVha3BvaW50czogKFxcclxcbiAgXFxcIm1lZGl1bVxcXCI6IDQzLjc1ZW0sXFxyXFxuICBcXFwibGFyZ2VcXFwiOiA1Ni4yNWVtLFxcclxcbiAgXFxcInhMYXJnZVxcXCI6IDkwZW0sXFxyXFxuKTtcXHJcXG5cXHJcXG5AbWl4aW4gYnJlYWtwb2ludCgkc2l6ZSkge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCRzaXplKSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyB1dDtcXHJcXG5cXHJcXG4ubWFpbkRpdk1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgJiBkaXYgPiBpbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gLm1haW5EaXZNb2RhbCA+IGRpdiB7XFxyXFxuLy8gICBkaXNwbGF5OiBmbGV4O1xcclxcbi8vIH1cXHJcXG5cXHJcXG4uc3VibWl0QnRuIHtcXHJcXG4gIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xcclxcbiAgd2lkdGg6IDU1JSAhaW1wb3J0YW50O1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMjksIDEwMCwgMjMxKSAhaW1wb3J0YW50O1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmtDb2xvcikgIWltcG9ydGFudDtcXHJcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG4gICZEaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsOjpiYWNrZHJvcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNTMsIDE1Myk7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuLnN0eWxlSGVhZCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0Q29sb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW5Db2xvcik7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTcsIDAsIDApO1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yTWVzc2FnZSB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiYWRkQm9va0J0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN1Ym1pdEJ0biIsIm1vZGFsIiwicmVhZEJ0biIsIm5hbWVJbnB1dCIsImF1dGhvcklucHV0IiwicGFnZUlucHV0IiwicmF0aW5nSW5wdXQiLCJyZWFkU3RhdHVzSW5wdXQiLCJpbnB1dEFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJCb29rIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiYXV0aG9yIiwicGFnZSIsInJhdGluZyIsInJlYWRTdGF0dXMiLCJteUxpYnJhcnkiLCJjb25zb2xlIiwibG9nIiwiYm9va09uZSIsInB1c2giLCJkaXNwbGF5Qm9va1RvTGlicmFyeSIsInBvcCIsImxpYnJhcnkiLCJhZGRCb29rIiwibWluaW1pemVJY29uIiwiY3JlYXRlRWxlbWVudCIsImRpc3BsYXkiLCJlYWNoQm9va1N0eWxlIiwiaWNvblNlY3Rpb24iLCJkZWxldGVCdG4iLCJuYW1lRGl2IiwibmFtZVNwYW4iLCJoaWRlU2VjdGlvbiIsImF1dGhvckRpdiIsInBhZ2VEaXYiLCJyYXRpbmdEaXYiLCJhdXRob3JTcGFuIiwicGFnZVNwYW4iLCJyYXRpbmdTcGFuIiwicmVhZEJ0bkRpdkRpc3BsYXkiLCJyZWFkQnRuRGlzcGxheSIsInNob3dNb3JlRGl2Iiwic2hvd01vcmVJY29uIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmQiLCJyZW1vdmUiLCJzdHlsZSIsImJvcmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWFkQnRuRGlzcGxheVN0YXR1cyIsIm1pbmltaXplSWNvblN0YXR1cyIsInNob3dNb3JlSWNvbkFuaW1hdGlvbiIsInJlbW92ZUJvb2siLCJ0b2dnbGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsInRvZ2dsZUFuaW1hdGlvbiIsImJ1dHRvbkZuYyIsInN1Ym1pdFByZXNzRm5jIiwicmVhZEJ0blN0YXR1c0ZuYyIsIlNob3dNb2RhbEZuYyIsInNob3dNb2RhbCIsImNoZWNrVmFsaWRhdGlvbiIsImVsZW1lbnROYW1lIiwiZWxlbWVudEluZGV4IiwiZSIsImFkZE5ld0Jvb2siLCJ2YWx1ZSIsImZvckVhY2giLCJjbG9zZSIsImNsZWFyVmFsdWVBZnRlclN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=