var colors = ["0", "1", "2", "3", "4", "A", "B", "C", "D", "E", "F"];

document.getElementById("btn").addEventListener("click", () => {
  // alert("hee");
  let container = document.querySelector(".container-fluid");

  let index = "#";
  for (let i = 0; i < 6; i++) {
    index += colors[randomNumberGenerator()];
  }

  document.body.style.backgroundColor = index;
  document.getElementById("color").innerText = index;

  console.log(index);
});

function randomNumberGenerator() {
  return Math.floor(Math.random() * colors.length);
}
