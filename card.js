let button = document.querySelector("#folo1");
let temp = 0;

button.addEventListener("click", function () {
  if (temp == 0) {
    button.innerHTML = "Following";
    button.style.backgroundColor = "grey";

    temp = 1;
  } else {
    button.innerHTML = "Follow";

    button.style.backgroundColor = " rgb(2, 192, 250)";
    temp = 0;
  }
});

// --2
let temp1 = 0;
let folo2 = document.querySelector("#carr");
folo2.addEventListener("click", function () {
  if (temp1 == 0) {
    folo2.innerHTML = "Following";
    folo2.style.backgroundColor = "grey";
    temp1 = 1;
  } else {
    folo2.innerHTML = "Follow";
    folo2.style.backgroundColor = " rgb(2, 192, 250)";
    temp1 = 0;
  }
});

///---3

let temp2 = 0;
let folo4 = document.querySelector("#folo3");
folo3.addEventListener("click", function () {
  if (temp2 == 0) {
    folo4.innerHTML = "Following";
    folo4.style.backgroundColor = "grey";
    temp2 = 1;
  } else {
    folo4.innerHTML = "Follow";
    folo4.style.backgroundColor = " rgb(2, 192, 250)";
    temp2 = 0;
  }
});

///---4

let temp3 = 0;
let folo5 = document.querySelector("#folo4");
folo5.addEventListener("click", function () {
  if (temp3 == 0) {
    folo5.innerHTML = "Following";
    folo5.style.backgroundColor = "grey";
    temp3 = 1;
  } else {
    folo5.innerHTML = "Follow";
    folo5.style.backgroundColor = " rgb(2, 192, 250)";
    temp3 = 0;
  }
});

// JavaScript to close individual suggestion cards
let cardx = document.querySelector("#card1");
let card1 = document.querySelector(".card1");
cardx.addEventListener("click", function () {
  card1.style.display = "none";
});
let cardxy = document.querySelector("#card3");
let card3 = document.querySelector(".card3");
cardxy.addEventListener("click", function () {
  card3.style.display = "none";
});

let cardxyz = document.querySelector("#card4");
let card4 = document.querySelector(".card4");
cardxyz.addEventListener("click", function () {
  card4.style.display = "none";
});

let cardxyza = document.querySelector("#card2");
let card2 = document.querySelector(".card2");
cardxyza.addEventListener("click", function () {
  card2.style.display = "none";
});
