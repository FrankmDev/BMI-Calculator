"use strict";

let result = document.querySelector(".result");
let btn = document.getElementById("calculate");
let category = document.querySelector(".category");

btn.addEventListener("click", function () {
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);
  height /= 100;
  let bmi = weight / height ** 2;
  bmi = bmi.toFixed(2);
  result.textContent = bmi;
  if (10 <= bmi && bmi <= 18.5) {
    category.textContent = "Under Weight";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    category.textContent = "Normal";
  } else if (25 <= bmi && bmi <= 29.9) {
    category.textContent = "Over Weight";
  } else if (30 <= bmi && bmi <= 34.9) {
    category.textContent = "Obesity I";
  } else if (35 <= bmi && bmi <= 39.9) {
    category.textContent = "Extreme Obesity";
  } else {
    result.textContent = "NaN";
    category.textContent = "Error";
  }
});
