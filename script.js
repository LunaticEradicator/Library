const display = document.querySelector(".display");
const addBookBtn = document.querySelector(".addBookBtn");
const submitBtn = document.querySelector(".submitBtn");
const modal = document.querySelector(".modal");
const readBtn = document.querySelector('.readBtn');
const readBtnDiv = document.querySelector('.readBtnDiv');
const eachBookStyle = document.querySelector('.eachBookStyle');

const nameInput = document.querySelector(".nameInput");
const authorInput = document.querySelector(".authorInput");
const pageInput = document.querySelector(".pageInput");
const ratingInput = document.querySelector(".ratingInput");
const readStatusInput = document.querySelector(".readStatusInput");


function Book(name, author, page, rating, readStatus) {
    this.name = name;
    this.author = author;
    this.page = page;
    this.rating = rating;
    this.readStatus = readStatus;
}

Book.prototype.addBook = function () {
    return `Name : ${this.name} Author : ${this.author} Year : ${this.page} Rating : ${this.rating} ReadStats : ${this.readStatus}`
}

// Each Time Submit Button is Pressed a new object will be created using object constructor [submitBtn function is invoked]
let myLibrary = [
    // { name: "How to be Noob ", author: "Yedu", year: 2017, rating: 1 }
];

//Loop through every item in the array myLibrary
function displayBookToLibrary() {
    for (let library of myLibrary) {
        addBook(library);
    }
}

function addBook(library) {
    //---Created DOM Element---//
    //Main Element
    const eachBookStyle = document.createElement('div');

    //EachBookStyle Section One
    const iconSection = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const minimizeIcon = document.createElement('button');

    // EachBookStyle Section Two
    const nameDiv = document.createElement('div');
    const nameSpan = document.createElement('span');

    //EachBookStyle Section Three
    const hideSection = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const ratingDiv = document.createElement('div');
    const authorSpan = document.createElement('span');
    const pageSpan = document.createElement('span');
    const ratingSpan = document.createElement('span');
    const readBtnDivDisplay = document.createElement('div');
    const readBtnDisplay = document.createElement('button');

    const showMoreDiv = document.createElement('div');
    const showMoreIcon = document.createElement('div');



    //---Classlist---//
    //EachBookStyle Section One
    iconSection.classList.add("iconSection")
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteBtn")
    minimizeIcon.textContent = "";
    minimizeIcon.classList.add("minimizeIcon")

    //EachBookStyle Section Two
    nameDiv.textContent = "Book";
    nameSpan.textContent = ` ${library.name}`;

    //EachBookStyle Section Three
    authorDiv.textContent = "Author";
    authorSpan.textContent = ` ${library.author}`;
    pageDiv.textContent = "Pages";
    pageSpan.textContent = ` ${library.page}`;
    ratingDiv.textContent = "Rating";

    ratingSpan.textContent = ` ${library.rating}`;
    readBtnDisplay.textContent = `${library.readStatus}`;


    //---DOM ClassList---//
    //Main Section 
    eachBookStyle.classList.add("eachBookStyle");

    //EachBookStyle Section Two
    nameDiv.classList.add("nameDiv");
    nameSpan.classList.add("nameSpan");

    //EachBookStyle Section Three
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

    //Toggle readBtnOnOff on EachBookStyle
    if (readBtnDisplay.textContent === "Read") {
        readBtnDisplay.classList.remove("notReadStatus");
        eachBookStyle.style.border = "3px solid rgb(77, 189, 62)";
    }
    else {
        readBtnDisplay.classList.add("notReadStatus");
        eachBookStyle.style.border = "3px solid red";
    }

    //---Appended DOM Element---//
    //Section One
    eachBookStyle.append(iconSection);
    iconSection.append(deleteBtn);
    iconSection.append(minimizeIcon);

    //Section Two
    eachBookStyle.append(nameDiv);
    eachBookStyle.append(nameSpan);

    //Section Three
    readBtnDivDisplay.append(readBtnDisplay);
    hideSection.append(authorDiv);
    hideSection.append(authorSpan);
    hideSection.append(pageDiv);
    hideSection.append(pageSpan);
    hideSection.append(ratingDiv);
    hideSection.append(ratingSpan);
    hideSection.append(readBtnDivDisplay);
    showMoreDiv.append(showMoreIcon);

    //Main Section 
    eachBookStyle.append(hideSection);
    eachBookStyle.append(showMoreDiv);
    display.append(eachBookStyle);

    //---Event Listener and Function---//
    readBtnDisplay.addEventListener("click", readBtnDisplayStatus)
    minimizeIcon.addEventListener("click", minimizeIconStatus)
    showMoreIcon.addEventListener("mousedown", showMoreIconAnimation)
    removeBook(deleteBtn, eachBookStyle);

    function readBtnDisplayStatus() {
        // console.log("CLICKED")
        if (readBtnDisplay.textContent === "Read") {
            readBtnDisplay.textContent = "Not Read";
            readBtnDisplay.classList.toggle("notReadStatus");
            eachBookStyle.style.border = "3px solid red";
        }
        else {
            readBtnDisplay.textContent = "Read";
            readBtnDisplay.classList.toggle("notReadStatus");
            eachBookStyle.style.border = "3px solid rgb(77, 189, 62)";
        }
        event.preventDefault();
    }
    function minimizeIconStatus() {
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

submitBtn.addEventListener("click", submitPress);
readBtn.addEventListener("click", readBtnStatus);
addBookBtn.addEventListener("click", ShowModal)

function ShowModal() {
    modal.showModal();
}

function submitPress() {
    const addNewBook = new Book(`${nameInput.value}`, `${authorInput.value}`, `${pageInput.value}`, `${ratingInput.value}`, `${readStatusInput.textContent}`);
    if (nameInput.value === "" || authorInput.value === "" || pageInput.value === "" || ratingInput.value === "") {
        //HTML required field will show
    }
    else if (ratingInput.value > 10) {
        error();
    }
    else {
        event.preventDefault();
        console.log(addNewBook);
        myLibrary.push(addNewBook);
        modal.close();
    }
    displayBookToLibrary();
    myLibrary.pop(addNewBook); // So it won't be Re-added again
    clearValueAfterSubmit()
}

function clearValueAfterSubmit() {
    nameInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
    ratingInput.value = "";
    readStatusInput.textContent = "Read";
    readBtn.classList.add("defaultColor");
}

function readBtnStatus() {
    readBtn.classList.remove("defaultColor");

    if (readBtn.textContent === "Read") {
        readBtn.textContent = "Not Read";
        readBtn.classList.add("notReadStatus");
        console.log("Red");
    }
    else {
        readBtn.textContent = "Read";
        readBtn.classList.remove("notReadStatus");
        console.log("Green");
    }
    event.preventDefault();
}

function removeBook(deleteBtn, eachBookStyle) {
    deleteBtn.addEventListener("click", e => {
        eachBookStyle.remove();
    })
}


// const bookOne = new Book("Hard Work and Dedication", "CR7", 1990, 10);
// const bookTwo = new Book("Dive and ShowBot", "NY9", 2000, 8);
// const bookThree = new Book("How to be a GOAT", "Messi", 2012, 10);

// myLibrary.splice(-1, 0, bookOne);
// myLibrary.push(bookTwo);
// myLibrary.push(bookThree);

// let myLibrary = [
    // { name: "How to be Noob ", author: "Yedu", year: 2017, rating: 1 },
    // { name: "How to be Pro ", author: "Kannan", year: 2009, rating: 7 },
    // { name: "How to be God ", author: "Messi", year: 2022, rating: 10 },
// ];
