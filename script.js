const arrows = document.querySelectorAll(".arrow");

console.log(arrows)
/* dark mode*/

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,movie-list-filter select,.movie-list-title")

ball.addEventListener("click",function(){
    items.forEach((item) => item.classList.toggle("active"));
});