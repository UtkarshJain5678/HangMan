let cWord = "elephant";
let wordEl = document.querySelector(".word");
let count = 0;
let chanceCount = 5;

let chances = document.querySelector(".chances");
chances.innerHTML = `Chances Left:  ${chanceCount}`;

for (let i = 0; i < cWord.length; i++) {
  let letter = document.createElement("div");
  letter.className = "letter";
  // letter.className = cWord[i];
  letter.classList.add(cWord[i]);
  wordEl.appendChild(letter);
}

const handleKeyPress = (event) => {
  let keyPressed = event.key.toLowerCase();
  let element = document.getElementsByClassName(keyPressed);

  if (element.length === 0 && chanceCount !== 0) {
    let chances = document.querySelector(".chances");
    chances.innerHTML = `Chances Left:  ${--chanceCount}`;
    return;
  }

  if (chanceCount === 0) {
    // alert("Game Over");
    let result = document.querySelector(".result");
    result.classList.remove("hide");
    result.innerHTML = `You <b>Lost</b>, the word was <b>${cWord}</b>`;
    return;
  }

  for (let el of element) {
    if (el.innerHTML === "") count++;
    el.innerHTML = keyPressed;
  }

  // console.log(element.classList);
  // element.classList.remove(keyPressed);

  if (count === cWord.length) {
    let result = document.querySelector(".result");
    result.classList.remove("hide");
    result.innerHTML = "Congats for Winning This one";
    return;
  }
};

document.addEventListener("keypress", handleKeyPress);
