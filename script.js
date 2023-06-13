const randomWords = [
  "masa",
  "astronaut",
  "belgia",
  "stilou",
  "osos",
  "Pneumonoultramicroscopicsilicovolcaniconioza",
  "Zbor",
  "val",
  "tabara",
  "drum",
  "norocel",
  "floare",
  "piatră",
  "lac",
  "vis",
];
const word = randomWords[Math.floor(Math.random() * 6)];

const wrapper = document.querySelector(".word-wrapper");
const input = document.querySelector("input");
const button = document.querySelector("button");
const image = document.querySelector("img");
let words = [];
let currentPhoto = 2;
let win = 0;

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
      win++;
    }
    if (
      input.value !== word[i] &&
      input.value !== "" &&
      input.value.length === 1
    ) {
      k++;
    }
  }
  if (win === word.length) {
    image.src = "./Images/WIN.png";
  }
  if (k === word.length) {
    image.src = `./Images/Faze ${currentPhoto}.png`;
    if (currentPhoto < 7) {
      currentPhoto++;
    }
  }
});
