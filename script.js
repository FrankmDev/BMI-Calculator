"use strict";

let result = document.querySelector(".result");
let btn = document.getElementById("calculate");
let category = document.querySelector(".category");

btn.addEventListener("click", function () {
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);
  height /= 100;
  let bmi = (weight / height ** 2).toFixed(2);

  result.textContent = bmi;

  let categoryType;

  switch (true) {
    case bmi <= 10:
      categoryType = "Under Weight";
      break;
    case bmi <= 18.5:
      categoryType = "Normal";
      break;
    case bmi <= 24.9:
      categoryType = "Over Weight";
      break;
    case bmi <= 29.9:
      categoryType = "Obesity I";
      break;
    case bmi >= 34.9:
      categoryType = "Extreme Obesity";
      break;
    default:
      categoryType = "Error";
      break;
  }

  category.textContent = categoryType;
});
