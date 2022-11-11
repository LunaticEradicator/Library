const addBookBtn = document.querySelector(".addBookBtn");
const display = document.querySelector(".display");
const submitBtn = document.querySelector(".submitBtn");

const nameInput = document.querySelector(".nameInput");
const authorInput = document.querySelector(".authorInput");
const yearInput = document.querySelector(".yearInput");
const ratingInput = document.querySelector(".ratingInput");

// let names;
// let authors;
// let year;
// let rating;

let myLibrary = [
    // { name: "How to be Noob ", author: "Yedu", year: 2017, rating: 1 },
    // { name: "How to be Pro ", author: "Kannan", year: 2009, rating: 7 },
    // { name: "How to be God ", author: "Messi", year: 2022, rating: 10 },
];



function Book(name, author, year, rating) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.rating = rating;
}

Book.prototype.addBook = function () {
    return `Name : ${this.name} Author : ${this.author} Year : ${this.year} Rating : ${this.rating}`
}

const bookOne = new Book("Hard Work and Dedication", "CR7", 1990, 10);
const bookTwo = new Book("Dive and ShowBot", "NY9", 2000, 8);
const bookThree = new Book("How to be a GOAT", "Messi", 2012, 10);

// myLibrary.splice(-1, 0, bookOne);
// myLibrary.push(bookTwo);
// myLibrary.push(bookThree);




function displayingBookToLibrary() {
    // if (!ifAdded) {
    // ifAdded = true;
    for (let library of myLibrary) {
        displayStyle(library);
        // }
    }

}

function displayStyle(library) {
    const eachBookStyle = document.createElement('div');

    const deleteDiv = document.createElement('div');
    deleteDiv.classList.add("deleteDiv")
    eachBookStyle.append(deleteDiv);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("deleteBtn")
    deleteDiv.append(deleteBtn);



    const nameDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const yearDiv = document.createElement('div');
    const ratingDiv = document.createElement('div');
    const readBtnDiv = document.createElement('div');
    const readBtn = document.createElement('button');

    const nameSpan = document.createElement('span');
    const authorSpan = document.createElement('span');
    const yearSpan = document.createElement('span');
    const ratingSpan = document.createElement('span');


    nameDiv.textContent = "Book";
    nameSpan.textContent = ` ${library.name}`;

    authorDiv.textContent = "Author";
    authorSpan.textContent = ` ${library.author}`;

    yearDiv.textContent = "Year";
    yearSpan.textContent = ` ${library.year}`;

    ratingDiv.textContent = "Rating";
    ratingSpan.textContent = ` ${library.rating}`;

    readBtn.textContent = ` Delete `;

    nameDiv.classList.add("nameDiv");
    nameSpan.classList.add("nameSpan");

    authorDiv.classList.add("authorDiv");
    authorSpan.classList.add("authorSpan");

    yearDiv.classList.add("yearDiv");
    yearSpan.classList.add("yearSpan");

    ratingDiv.classList.add("ratingDiv");
    ratingSpan.classList.add("ratingSpan");

    readBtnDiv.classList.add("readBtnDiv");
    eachBookStyle.classList.add("eachBookStyle");


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
}


let ifAdded = false;

submitBtn.addEventListener("click", submitPress)

function submitPress() {



    const news = new Book(`${nameInput.value}`, `${authorInput.value}`, `${yearInput.value}`, `${ratingInput.value}`);
    console.log(nameInput.value.length)
    // if (nameInput.value === "" || authorInput.value === "" || yearInput.value === "" || ratingInput.value === "") {
    // }
    // else {
    event.preventDefault();
    // myLibrary.push(news);
    console.log(news);


    myLibrary.push(news);
    // }
    displayingBookToLibrary();

    myLibrary.pop(bookOne);
    myLibrary.pop(news);

    nameInput.value = "";
    authorInput.value = "";
    yearInput.value = "";
    ratingInput.value = "";
    // }
}



// for (let library of myLibrary) {
//     const mainDiv = document.createElement('div');
//     mainDiv.classList.add("eachBookStyle");
//     mainDiv.textContent = `Name : ${library.name} Author : ${library.author} Year : ${library.year} Rating : ${library.rating}`;
//     display.append(mainDiv);
// }
