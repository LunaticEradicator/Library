// import createDom, {
//     eachBookStyle, iconSection, deleteBtn,
//     nameDiv, nameSpan,
//     hideSection, authorDiv, pageDiv, ratingDiv, authorSpan, pageSpan, ratingSpan, readBtnDivDisplay, readBtnDisplay,
//     showMoreDiv, showMoreIcon, minimizeIcon
// } from "./domElement.js";

// export {
//   eachBookStyle,
//   iconSection,
//   deleteBtn,
//   nameDiv,
//   nameSpan,
//   hideSection,
//   authorDiv,
//   pageDiv,
//   ratingDiv,
//   authorSpan,
//   pageSpan,
//   ratingSpan,
//   readBtnDivDisplay,
//   readBtnDisplay,
//   showMoreDiv,
//   showMoreIcon,
//   minimizeIcon,
// };

// // export let display;
// let eachBookStyle;

// // default export ([a]) => {
// //     variableToExport = a;
// // }
// // let eachBookStyle;

// //EachBookStyle Section One
// let iconSection;
// let deleteBtn;
// let minimizeIcon;

// // EachBookStyle Section Two
// let nameDiv;
// let nameSpan;

// //EachBookStyle Section Three
// let hideSection;
// let authorDiv;
// let pageDiv;
// let ratingDiv;
// let authorSpan;
// let pageSpan;
// let ratingSpan;
// let readBtnDivDisplay;
// let readBtnDisplay;

// let showMoreDiv;
// let showMoreIcon;

// export default function createDom(library, minimizeIcon) {
//   //---Created DOM Element---//
//   //Main Element

//   minimizeIcon = document.createElement("button"); //111111111111111111111111FIXXXXXXXXXXX

//   let display = document.querySelector(".display");
//   eachBookStyle = document.createElement("div");

//   //EachBookStyle Section One
//   iconSection = document.createElement("div");
//   deleteBtn = document.createElement("button");

//   // EachBookStyle Section Two
//   nameDiv = document.createElement("div");
//   nameSpan = document.createElement("span");

//   //EachBookStyle Section Three
//   hideSection = document.createElement("div");
//   authorDiv = document.createElement("div");
//   pageDiv = document.createElement("div");
//   ratingDiv = document.createElement("div");
//   authorSpan = document.createElement("span");
//   pageSpan = document.createElement("span");
//   ratingSpan = document.createElement("span");
//   readBtnDivDisplay = document.createElement("div");
//   readBtnDisplay = document.createElement("button");

//   showMoreDiv = document.createElement("div");
//   showMoreIcon = document.createElement("div");

//   //---Classlist---//
//   //EachBookStyle Section One
//   iconSection.classList.add("iconSection");
//   deleteBtn.textContent = "X";
//   deleteBtn.classList.add("deleteBtn");
//   minimizeIcon.textContent = "";
//   minimizeIcon.classList.add("minimizeIcon");

//   //EachBookStyle Section Two
//   nameDiv.textContent = "Book";
//   nameSpan.textContent = ` ${library.name}`;

//   //EachBookStyle Section Three
//   authorDiv.textContent = "Author";
//   authorSpan.textContent = ` ${library.author}`;
//   pageDiv.textContent = "Pages";
//   pageSpan.textContent = ` ${library.page}`;
//   ratingDiv.textContent = "Rating";

//   ratingSpan.textContent = ` ${library.rating}`;
//   readBtnDisplay.textContent = `${library.readStatus}`;

//   //---DOM ClassList---//
//   //Main Section
//   eachBookStyle.classList.add("eachBookStyle");

//   //EachBookStyle Section Two
//   nameDiv.classList.add("nameDiv");
//   nameSpan.classList.add("nameSpan");

//   //EachBookStyle Section Three
//   hideSection.classList.add("hideSection");
//   authorDiv.classList.add("authorDiv");
//   authorSpan.classList.add("authorSpan");
//   pageDiv.classList.add("yearDiv");
//   pageSpan.classList.add("yearSpan");
//   ratingDiv.classList.add("ratingDiv");
//   ratingSpan.classList.add("ratingSpan");

//   readBtnDivDisplay.classList.add("readBtnDivDisplay");
//   readBtnDisplay.classList.add("readBtnDisplay");

//   showMoreDiv.classList.add("showMoreDiv");
//   showMoreDiv.classList.add("showMoreDivHide");
//   showMoreIcon.classList.add("showMoreIcon");

//   //---Appended DOM Element---//
//   //Section One
//   eachBookStyle.append(iconSection);
//   iconSection.append(deleteBtn);
//   iconSection.append(minimizeIcon);

//   //Section Two
//   eachBookStyle.append(nameDiv);
//   eachBookStyle.append(nameSpan);

//   //Section Three
//   readBtnDivDisplay.append(readBtnDisplay);
//   hideSection.append(authorDiv);
//   hideSection.append(authorSpan);
//   hideSection.append(pageDiv);
//   hideSection.append(pageSpan);
//   hideSection.append(ratingDiv);
//   hideSection.append(ratingSpan);
//   hideSection.append(readBtnDivDisplay);
//   showMoreDiv.append(showMoreIcon);

//   //Main Section
//   eachBookStyle.append(hideSection);
//   eachBookStyle.append(showMoreDiv);
//   display.append(eachBookStyle);
// }
