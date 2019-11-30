let gameArr = [];

function play(clickedId) {
  let playerSpan = document.getElementById("player");
  let clickedElement = document.getElementById(clickedId);
  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    gameArr[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    gameArr[clickedId] = "O";
  }
  console.log(gameArr);

  let topLeft = gameArr[0];
  let topMiddle = gameArr[1];
  let topRight = gameArr[2];
  let middleLeft = gameArr[3];
  let middleMiddle = gameArr[4];
  let middleRight = gameArr[5];
  let bottomLeft = gameArr[6];
  let bottomMiddle = gameArr[7];
  let bottomRight = gameArr[8];

  if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
    alert("Winner!!!");
  } else if (
    topLeft !== undefined &&
    topLeft === middleMiddle &&
    topLeft === bottomRight
  ) {
    alert("Winner!!!");
  } else if (topLeft !== undefined && topLeft === middleLeft && bottomLeft) {
    alert("Winner!!!");
  } else if (
    topMiddle !== undefined &&
    topMiddle === middleMiddle &&
    topMiddle === bottomMiddle
  ) {
    alert("Winner!!!");
  } else if (
    topRight !== undefined &&
    topRight === middleRight &&
    topRight === bottomRight
  ) {
    alert("Winner!!!");
  } else if (
    topRight !== undefined &&
    topRight === middleMiddle &&
    topRight === bottomLeft
  ) {
    alert("Winner!!!");
  } else if (
    middleLeft !== undefined &&
    middleLeft === middleMiddle &&
    middleLeft === middleRight
  ) {
    alert("Winner!");
  } else if (
    bottomLeft !== undefined &&
    bottomLeft === bottomMiddle &&
    bottomLeft === bottomRight
  ) {
    alert("Winner!");
  }

  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (!gameArr[i]) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat won!");
  }
}

function resetter() {
  document.getElementsByTagName(button).reset();
}
