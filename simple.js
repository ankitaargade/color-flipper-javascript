var colors = ["red", "green", "pink", "yellow"];

document.getElementById("btn").addEventListener("click", () => {
  // alert("hee");
  let container = document.querySelector(".container-fluid");

  var r = Math.floor(Math.random() * 256); // Random between 0-255
  var g = Math.floor(Math.random() * 256); // Random between 0-255
  var b = Math.floor(Math.random() * 256); // Random between 0-255
  var rgb = "rgb(" + r + "," + g + "," + b + ")";

  let index = randomNumberGenerator();
  if (index != 4) {
    document.body.style.backgroundColor = colors[index];
    document.getElementById("color").innerText = colors[index];
  } else {
    document.body.style.backgroundColor = rgb;
    document.getElementById("color").innerText = rgb;
  }

  console.log(index);
});

function randomNumberGenerator() {
  return Math.floor(Math.random() * 4);
}
