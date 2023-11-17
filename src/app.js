/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function card() {
  let suitsTypes = ["♦", "♥", "♠", "♣"];
  let numbersType = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numbers = Math.floor(Math.random() * numbersType.length);
  let suits = Math.floor(Math.random() * suitsTypes.length);

  if (suits === 0 || suits === 1) {
    document.getElementById("card").style.color = "red";
  }
  document.getElementById("numbers").innerHTML = numbersType[numbers];
  document.getElementById("suits1").innerHTML = suitsTypes[suits];
  document.getElementById("suits2").innerHTML = suitsTypes[suits];
};
