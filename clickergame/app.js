const image = document.getElementById("image")
const countertext = document.getElementById("countertext")
let counter = 0






image.addEventListener("click", function() {

counter = counter + 1;
countertext.innerText = counter



})