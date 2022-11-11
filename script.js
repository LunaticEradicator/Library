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
        const mainDiv = document.createElement('div');

        const nameDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const yearDiv = document.createElement('div');
        const ratingDiv = document.createElement('div');


        nameDiv.textContent = ` Name : ${library.name}`;
        authorDiv.textContent = `Author : ${library.author}`;
        yearDiv.textContent = `Year : ${library.year}`;
        ratingDiv.textContent = ` Rating : ${library.rating}`;

        mainDiv.append(nameDiv);
        mainDiv.append(authorDiv);
        mainDiv.append(yearDiv);
        mainDiv.append(ratingDiv);

        mainDiv.classList.add("eachBookStyle");
        display.append(mainDiv);
        // }
    }

    // submitBtn.removeEventListener("click", submitPress);

}

let ifAdded = false;

submitBtn.addEventListener("click", submitPress)

function submitPress() {



    const news = new Book(`${nameInput.value}`, `${authorInput.value}`, `${yearInput.value}`, `${ratingInput.value}`);
    if (nameInput.value === "" || authorInput.value === "" || yearInput.value === "" || ratingInput.value === "") {
        // alert("Please Enter Values")
    }
    else {
        event.preventDefault();
        // myLibrary.push(news);
        console.log(news);


        // myLibrary.push(bookOne);
        myLibrary.push(news);
        // }
        displayingBookToLibrary();

        myLibrary.pop(bookOne);
        myLibrary.pop(news);

        nameInput.value = "";
        authorInput.value = "";
        yearInput.value = "";
        ratingInput.value = "";
    }
}



// for (let library of myLibrary) {
//     const mainDiv = document.createElement('div');
//     mainDiv.classList.add("eachBookStyle");
//     mainDiv.textContent = `Name : ${library.name} Author : ${library.author} Year : ${library.year} Rating : ${library.rating}`;
//     display.append(mainDiv);
// }
