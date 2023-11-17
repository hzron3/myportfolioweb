// let fetchedList = document.getElementById("ul-lists");
let toggler = document.getElementById("toggler");
let btn = document.getElementById("btn");
console.log(btn);
let closeIcon = "Images/close-icon.png";
let menuIcon = "Images/menu-icon.png";
// console.log(toggler);
// console.log(fetchedList)
// let myList = ["Contacts", "About", "Home"];
// let myLists = "";
// for(list of myList){
//     myLists  += `
//     <li>
//     <a target='_blank' href='${list}'>
//     ${list}
//     </li>`;
// }
// fetchedList.innerHTML += myLists;

let mode = document.getElementById("mode");
let brackLeft = document.getElementById("brack-left");
let brackRight = document.getElementById("brack-right");
console.log(`${brackLeft}, ${brackRight}`);
mode.addEventListener("click",function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        mode.src = "Images/sun1-icon.png";
        brackLeft.src="Images/brack-d-Left.png";
        brackRight.src = "Images/brack-d-right.png";
    }
    else{
        mode.src = "Images/moon-icon.png";
        brackLeft.src="Images/brack-l-left.png";
        brackRight.src ="Images/brack-l-right.png";
    }
    // console.log("Hello World");
})
const menuBtn = document.querySelector('.navbar-toggler');
console.log(menuBtn);
const nav = document.querySelector('.nav');
console.log(nav);
const navLinks = document.querySelectorAll('.nav-item');
console.log(navLinks);
document.querySelectorAll("nav-links li a").forEach(item=>{
    item.addEventListener("click",()=>{
        nav.classList.toggle('nav-active');
    });
});