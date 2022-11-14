const addBookBtn = document.querySelector(".addBookBtn");
const display = document.querySelector(".display");
const submitBtn = document.querySelector(".submitBtn");
const modal = document.querySelector(".modal");
const readBtn = document.querySelector('.readBtn');
const readBtnDiv = document.querySelector('.readBtnDiv');
const eachBookStyle = document.querySelector('.eachBookStyle');

const nameInput = document.querySelector(".nameInput");
const authorInput = document.querySelector(".authorInput");
const yearInput = document.querySelector(".yearInput");
const ratingInput = document.querySelector(".ratingInput");
const readStatusInput = document.querySelector(".readStatusInput");



let myLibrary = [
    // { name: "How to be Noob ", author: "Yedu", year: 2017, rating: 1 },
    // { name: "How to be Pro ", author: "Kannan", year: 2009, rating: 7 },
    // { name: "How to be God ", author: "Messi", year: 2022, rating: 10 },
];



function Book(name, author, year, rating, readStatus) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.rating = rating;
    this.readStatus = readStatus;
}

Book.prototype.addBook = function () {
    return `Name : ${this.name} Author : ${this.author} Year : ${this.year} Rating : ${this.rating} ReadStats : ${this.readStatus}`
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

    const nameDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const yearDiv = document.createElement('div');
    const ratingDiv = document.createElement('div');

    const nameSpan = document.createElement('span');
    const authorSpan = document.createElement('span');
    const yearSpan = document.createElement('span');
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

    yearDiv.textContent = "Year";
    yearSpan.textContent = ` ${library.year}`;

    ratingDiv.textContent = "Rating";
    ratingSpan.textContent = ` ${library.rating}`;

    readBtn.textContent = `${library.readStatus}`;

    eachBookStyle.classList.add("eachBookStyle");

    nameDiv.classList.add("nameDiv");
    nameSpan.classList.add("nameSpan");

    authorDiv.classList.add("authorDiv");
    authorSpan.classList.add("authorSpan");

    yearDiv.classList.add("yearDiv");
    yearSpan.classList.add("yearSpan");

    ratingDiv.classList.add("ratingDiv");
    ratingSpan.classList.add("ratingSpan");

    readBtnDiv.classList.add("readBtnDiv");
    readBtn.classList.add("readBtn");

    if (readBtn.textContent === "Read") {
        readBtn.classList.remove("readStatus");
    }
    else {
        readBtn.classList.add("readStatus");
    }



    eachBookStyle.append(nameDiv);
    eachBookStyle.append(nameSpan);

    eachBookStyle.append(authorDiv);
    eachBookStyle.append(authorSpan);

    eachBookStyle.append(yearDiv);
    eachBookStyle.append(yearSpan);

    eachBookStyle.append(ratingDiv);
    eachBookStyle.append(ratingSpan);

    eachBookStyle.append(readBtnDiv);
    readBtnDiv.append(readBtn);

    display.append(eachBookStyle);

    readBtn.addEventListener("click", readBtnStatus)
    function readBtnStatus() {
        console.log("CLICKED")
        if (readBtn.textContent === "Read") {
            readBtn.textContent = "Not Read";
            readBtn.classList.toggle("readStatus");
        }
        else {
            readBtn.textContent = "Read";
            readBtn.classList.toggle("readStatus");
        }
        event.preventDefault();
    }

    removeBook(deleteBtn, eachBookStyle);

    readIcon.addEventListener("click", e => {
        readIcon.classList.toggle("readIconStatus");
        // eachBookStyle.style.height = "27%";
        // eachBookStyle.style.display = "none";
        // height: 27 %;

    })

}

submitBtn.addEventListener("click", submitPress);
readBtn.addEventListener("click", readBtnStatus);
addBookBtn.addEventListener("click", ShowModal)

function ShowModal() {
    modal.showModal();
}

function submitPress() {
    const news = new Book(`${nameInput.value}`, `${authorInput.value}`, `${yearInput.value}`, `${ratingInput.value}`, `${readStatusInput.textContent}`);
    console.log(nameInput.value.length)
    if (nameInput.value === "" || authorInput.value === "" || yearInput.value === "" || ratingInput.value === "") {
        //html required field will popup
    }
    else {
        event.preventDefault();
        console.log(news);
        myLibrary.push(news);
        modal.close();
    }
    displayingBookToLibrary();

    myLibrary.pop(news);
    clearValueAfterSubmit()
}

function clearValueAfterSubmit() {
    nameInput.value = "";
    authorInput.value = "";
    yearInput.value = "";
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
