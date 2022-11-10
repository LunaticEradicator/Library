const addBookBtn = document.querySelector(".addBookBtn");
const display = document.querySelector(".display");
// const displays = document.querySelector(".display1");


let myLibrary = [
    { name: "How to be Noob ", author: "Yedu", year: 2017, rating: 1 },
    { name: "How to be Pro ", author: "Kannan", year: 2009, rating: 7 },
    { name: "How to be God ", author: "Messi", year: 2022, rating: 10 },
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

// myLibrary.splice(-1, 0, bookOne);
myLibrary.push(bookOne);

function addBookToLibrary() {
    for (let library of myLibrary) {
        const mainDiv = document.createElement('div');

        const nameDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const yearDiv = document.createElement('div');
        const ratingDiv = document.createElement('div');

        nameDiv.textContent = ` Name: ${library.name}`;
        authorDiv.textContent = `Author: ${library.author}`;
        yearDiv.textContent = `Year: ${library.year}`;
        ratingDiv.textContent = ` Rating : ${library.rating}`;

        mainDiv.append(nameDiv);
        mainDiv.append(authorDiv);
        mainDiv.append(yearDiv);
        mainDiv.append(ratingDiv);

        mainDiv.classList.add("eachBookStyle");
        display.append(mainDiv);
    }
}

function eachBookDetails() { }

addBookToLibrary()



// for (let library of myLibrary) {
//     const mainDiv = document.createElement('div');
//     mainDiv.classList.add("eachBookStyle");
//     mainDiv.textContent = `Name : ${library.name} Author : ${library.author} Year : ${library.year} Rating : ${library.rating}`;
//     display.append(mainDiv);
// }
