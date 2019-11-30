let idChanger = document.getElementById("idInput");
console.log(idChanger);
let colorChanger = document.getElementById("colorInput");
console.log(colorChanger);

function setCard() {
  const card = document.getElementById(idInput.value);
  card.style.color = colorChanger.value;
}
