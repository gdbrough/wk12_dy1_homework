// 1. create parent container and its class
var createCatArticle = function(){
  let catUL = document.createElement("ul");
  catUL.classList.add("cat");
  return catUL;
};

// 2. Create first child and its text
var createCatName = function(name){
  let catName = document.createElement("li");
  catName.innerText = name;
  return catName;
}

// 3. Create the 2nd child and its text
var createCatFood = function(food){
  let catFood = document.createElement("li");
  catFood.innerText = food;
  return catFood;
};

// 3. Create the 3rd child and its text
var createCatPic = function(picture){
  let catPic = document.createElement("li");
  catPic.innerHTML = picture;
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



var addCat = function(catName, catFood, catPic) {
  var catArticle = createCatArticle();
  var nameOfCat = createCatName("Name: " + catName);
  var favFoodOfCat = createCatFood("Favourite food: " + catFood);
  var picOfCat = createCatPic("<img width=\"500\" src=\"" + catPic + "\">");
  appendElements(catArticle, nameOfCat, favFoodOfCat, picOfCat);
};

// var app = function(){
//   catName = "Name: Catty McCatface";
//   catFood = "Favourite food: Pot Noodle";
//   catPic = "<img width=\"500\" src=\"https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg\">";
//   addCat(catName, catFood, catPic);
// };

var newapp = function(){
  catNames = ["Boba","Barnaby","Max","Catty McCatface"];
  catFoods = ["Sock fluff","Tuna","Whiskas Temptations","Pot Noodle"];
  catPics = [
    "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg",
    "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg",
    "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg",
    "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"
  ];

  for (index = 0; index < catNames.length; index++){
    addCat(catNames[index], catFoods[index], catPics[index]);
  };
};

window.onload = newapp;
