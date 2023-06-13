const word = "masa";
const wrapper = document.querySelector(".word-wrapper");
const input = document.querySelector("input");
const button = document.querySelector("button");
const image = document.querySelector("img");
let words = [];
let currentPhoto = 2;

for (let i = 0; i < word.length; i++) {
  let cuvant = document.createElement("span");
  words.push(cuvant);
  wrapper.appendChild(cuvant);
}

button.addEventListener("click", () => {
  let k = 0;
  for (let i = 0; i < word.length; i++) {
    if (input.value === word[i]) {
      words[i].innerHTML = input.value;
    }
    if (
      input.value !== word[i] &&
      input.value !== "" &&
      input.value.length === 1
    ) {
      k++;
    }
  }

  if (k === word.length) {
    image.src = `./Images/Faze ${currentPhoto}.png`;
    if (currentPhoto < 7) {
      currentPhoto++;
    }
  }
});
