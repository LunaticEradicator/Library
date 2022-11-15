const addBookBtn = document.querySelector(".addBookBtn");
const display = document.querySelector(".display");
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



let myLibrary = [
    // { name: "How to be Noob ", author: "Yedu", year: 2017, rating: 1 },
    // { name: "How to be Pro ", author: "Kannan", year: 2009, rating: 7 },
    // { name: "How to be God ", author: "Messi", year: 2022, rating: 10 },
];



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

const bookOne = new Book("Hard Work and Dedication", "CR7", 1990, 10);
const bookTwo = new Book("Dive and ShowBot", "NY9", 2000, 8);
const bookThree = new Book("How to be a GOAT", "Messi", 2012, 10);

// myLibrary.splice(-1, 0, bookOne);
// myLibrary.push(bookTwo);
// myLibrary.push(bookThree);

function displayingBookToLibrary() {
    for (let library of myLibrary) {
        displayStyle(library);
    }
}




function displayStyle(library) {
    const eachBookStyle = document.createElement('div');
    const hideDiv = document.createElement('div');
    hideDiv.classList.add("hideDiv");





    const nameDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const ratingDiv = document.createElement('div');

    const nameSpan = document.createElement('span');
    const authorSpan = document.createElement('span');
    const pageSpan = document.createElement('span');
    const ratingSpan = document.createElement('span');

    const readBtn = document.createElement('button');
    const readBtnDiv = document.createElement('div');

    const deleteDiv = document.createElement('div');
    deleteDiv.classList.add("deleteDiv")
    eachBookStyle.append(deleteDiv);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteBtn")
    deleteDiv.append(deleteBtn);

    const readIcon = document.createElement('button');
    readIcon.textContent = "";
    readIcon.classList.add("readIcon")
    deleteDiv.append(readIcon);

    nameDiv.textContent = "Book";
    nameSpan.textContent = ` ${library.name}`;

    authorDiv.textContent = "Author";
    authorSpan.textContent = ` ${library.author}`;

    pageDiv.textContent = "Pages";
    pageSpan.textContent = ` ${library.page}`;

    ratingDiv.textContent = "Rating";
    ratingSpan.textContent = ` ${library.rating}`;

    readBtn.textContent = `${library.readStatus}`;

    eachBookStyle.classList.add("eachBookStyle");

    nameDiv.classList.add("nameDiv");
    nameSpan.classList.add("nameSpan");

    authorDiv.classList.add("authorDiv");
    authorSpan.classList.add("authorSpan");

    pageDiv.classList.add("yearDiv");
    pageSpan.classList.add("yearSpan");

    ratingDiv.classList.add("ratingDiv");
    ratingSpan.classList.add("ratingSpan");

    readBtnDiv.classList.add("readBtnDiv");
    readBtn.classList.add("readBtn");

    if (readBtn.textContent === "Read") {
        readBtn.classList.remove("readStatus");
        eachBookStyle.style.border = "3px solid rgb(77, 189, 62)";
    }
    else {
        readBtn.classList.add("readStatus");
        eachBookStyle.style.border = "3px solid red";
    }


    eachBookStyle.append(nameDiv);
    eachBookStyle.append(nameSpan);

    hideDiv.append(authorDiv);
    hideDiv.append(authorSpan);

    hideDiv.append(pageDiv);
    hideDiv.append(pageSpan);

    hideDiv.append(ratingDiv);
    hideDiv.append(ratingSpan);

    hideDiv.append(readBtnDiv);
    readBtnDiv.append(readBtn);

    const hideDivImage = document.createElement('div');
    const hideDivImageBackground = document.createElement('div');
    // hideDivImageBackground.textContent = "nice";
    hideDivImage.classList.add("hideDivImage");
    hideDivImage.classList.add("hideDivStatus");
    hideDivImageBackground.classList.add("hideDivImageBackground");
    hideDivImage.append(hideDivImageBackground);

    eachBookStyle.append(hideDiv);
    eachBookStyle.append(hideDivImage);
    display.append(eachBookStyle);

    readBtn.addEventListener("click", readBtnStatus)
    function readBtnStatus() {
        console.log("CLICKED")
        if (readBtn.textContent === "Read") {
            readBtn.textContent = "Not Read";
            readBtn.classList.toggle("readStatus");
            eachBookStyle.style.border = "3px solid red";
            // eachBookStyle.style.boxShadow = "1px 1px 30px 2px rgb(224, 0, 0)";
        }
        else {
            readBtn.textContent = "Read";
            readBtn.classList.toggle("readStatus");
            eachBookStyle.style.border = "3px solid rgb(77, 189, 62)";
            // eachBookStyle.style.boxShadow = " 1px 1px 30px 2px rgb(0, 224, 49)";
        }
        event.preventDefault();
    }

    removeBook(deleteBtn, eachBookStyle);

    readIcon.addEventListener("click", e => {
        readIcon.classList.toggle("readIconStatus");
        hideDiv.classList.toggle("hideDivStatus");
        eachBookStyle.classList.toggle("eachBookStyleStatus");
        hideDivImage.classList.toggle("hideDivStatus");
        // eachBookStyle.style.height = "100%";
    })

    hideDivImageBackground.addEventListener("click", e => {
        readIcon.classList.toggle("shakeAnimation");
    })

}


submitBtn.addEventListener("click", submitPress);
readBtn.addEventListener("click", readBtnStatus);
addBookBtn.addEventListener("click", ShowModal)



function ShowModal() {
    modal.showModal();
}

function submitPress() {
    const news = new Book(`${nameInput.value}`, `${authorInput.value}`, `${pageInput.value}`, `${ratingInput.value}`, `${readStatusInput.textContent}`);
    console.log(nameInput.value.length)
    // if (nameInput.value === "" || authorInput.value === "" || yearInput.value === "" || ratingInput.value === "") {
    //html required field will popup
    // }
    // else {
    event.preventDefault();
    console.log(news);
    myLibrary.push(news);
    modal.close();
    // }
    displayingBookToLibrary();

    myLibrary.pop(news);
    clearValueAfterSubmit()
    // display.style.border = "2px solid rgb(133, 130, 130)";

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
        readBtn.classList.add("readStatus");
        console.log("Red");
    }
    else {
        readBtn.textContent = "Read";
        readBtn.classList.remove("readStatus");
        console.log("Green");
    }
    event.preventDefault();
}

function removeBook(deleteBtn, eachBookStyle) {
    deleteBtn.addEventListener("click", e => {
        eachBookStyle.remove();
    })
}


// let ifRead = false;
// function readBtnStatus() {
//     if (!ifRead) {
//         ifRead = true;
//         readBtn.textContent = "Not Read";
//         readBtn.classList.add("readStatus");
//         console.log("Red")
//     }
//     else {
//         ifRead = false;
//         readBtn.textContent = "Read";
//         readBtn.classList.remove("readStatus");
//         console.log("Green")
//     }
//     event.preventDefault();
// }

// for (let library of myLibrary) {
//     const mainDiv = document.createElement('div');
//     mainDiv.classList.add("eachBookStyle");
//     mainDiv.textContent = `Name : ${library.name} Author : ${library.author} Year : ${library.year} Rating : ${library.rating}`;
//     display.append(mainDiv);
// }
