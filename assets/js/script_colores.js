const divAzul = document.getElementById("blue");
divAzul.addEventListener("click", () => {
  divAzul.style.backgroundColor = "black";
});

const divRojo = document.getElementById("red");
divRojo.addEventListener("click", () => {
  divRojo.style.backgroundColor = "black";
});

const divVerde = document.getElementById("green");
divVerde.addEventListener("click", () => {
  divVerde.style.backgroundColor = "black";
});

const divAmarillo = document.getElementById("yellow");
divAmarillo.addEventListener("click", () => {
  divAmarillo.style.backgroundColor = "black";
});

document.addEventListener("keydown", function (event) {
  let colorKey = "";
  if (event.key === "a") colorKey = "pink";
  else if (event.key === "s") colorKey = "orange";
  else if (event.key === "d") colorKey = "lightblue";

  const keyDiv = document.getElementById("key");
  if (keyDiv && colorKey) {
    keyDiv.style.backgroundColor = colorKey;
  }
});

document.addEventListener("keydown", function (event) {
  if (["q", "w", "e"].includes(event.key)) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.border = "1px solid black";
    newDiv.style.display = "inline-block";
    newDiv.style.margin = "10px";

    if (event.key === "q") newDiv.style.backgroundColor = "purple";
    else if (event.key === "w") newDiv.style.backgroundColor = "gray";
    else if (event.key === "e") newDiv.style.backgroundColor = "brown";

    document.body.appendChild(newDiv);
  }
});
