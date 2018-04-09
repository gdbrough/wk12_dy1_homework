// 1. create parent container and its class
var createCatArticle = function(){
  let catUL = document.createElement("ul");
  catUL.classList.add("cat");
  return catUL;
};

// 2. Create first child and its text
var createCatName = function(){
  let catName = document.createElement("li");
  catName.innerText = "Name: Catty McCatface";
  return catName;
}

// 3. Create the 2nd child and its text
var createCatFood = function(){
  let catFood = document.createElement("li");
  catFood.innerText = "Favourite food: Pot Noodle";
  return catFood;
};

// 3. Create the 3rd child and its text
var createCatPic = function(){
  let catPic = document.createElement("li");
  catPic.innerHTML = "<img width=\"500\" src=\"https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg\">";
  return catPic;
};

var appendElements = function(catUL, catName, catFood, catPic){
// 4. Append the li to the ul
  catUL.appendChild(catName);
  catUL.appendChild(catFood);
  catUL.appendChild(catPic);

// 5. Append the ul to the list of cats
  let cats = document.querySelector("#cats");
  cats.appendChild(catUL)

};



var addCat = function(catName, catfood, catPic) {
  var catArticle = createCatArticle();
  var nameOfCat = createCatName(catName);
  var favFoodOfCat = createCatFood(catFood);
  var picOfCat = createCatPic(catPic);
  appendElements(catArticle, nameOfCat, favFoodOfCat, picOfCat);
};

var app = function(){
  catName = "Someone Wise";
  catFood = "Assumption is the mother of all fuck ups.";
  catPic = "<img width=\"500\" src=\"https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg\">";
  addCat(catName, catFood, catPic);
};

window.onload = app;
