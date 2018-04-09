const app = function(){

// 1. create parent container and its class
let catUL = document.createElement("ul");
catUL.classList.add("cat");

// 2. Create first child and its text
let catName = document.createElement("li");
catName.innerText = "Name: Catty McCatface";

// 3. Create the 2nd child and its text
let catFood = document.createElement("li");
catFood.innerText = "Favourite food: Pot Noodle";


// 3. Create the 3rd child and its text
let catPic = document.createElement("li");
catPic.innerHTML = "<img width=\"500\" src=\"https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg\">";

// 4. Append the li to the ul
catUL.appendChild(catName);
catUL.appendChild(catFood);
catUL.appendChild(catPic);

// 5. Append the ul to the list of cats
let cats = document.querySelector("#cats");
cats.appendChild(catUL)

};

window.onload = app;
