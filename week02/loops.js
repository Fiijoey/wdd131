// loops.js
myInfo = {
  name: "Brother T",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 year",
    },
  ],
};
const foodHtml = document.querySelector("#favorite-foods");

myInfo.favoriteFoods.forEach((food) => {
  let favFood = document.createElement("li");
  favFood.textContent = food;
  foodHtml.appendChild(favFood);
});

const placeLived = document.querySelector("#places-lived");

myInfo.placesLived.forEach((places) => {
  let placelive = document.createElement("li");
  placelive.textContent = places.place;
  placeLived.appendChild(placelive);
});
