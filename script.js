const textAreaEl = document.querySelector(".textarea");
const characterNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

const inputHandler = () => {
  // input validation
  if (textAreaEl.value.includes("<script>")) {
    alert("You cannot use <script> in your text");
    textAreaEl.value = textAreaEl.value.replace("<script>", "");
  }

  // determine new numbers
  let numberOfWords = textAreaEl.value.split(" ").length;
  textAreaEl.value.length === 0 ? (numberOfWords = 0) : null;

  const numberOfCharacters = +textAreaEl.value.length;
  const twitterCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 2200 - numberOfCharacters;
  console.log(numberOfWords);

  // add visual indicator if limit is exceeded
  twitterCharactersLeft < 0
    ? twitterNumberEl.classList.add("stat__number--limit")
    : twitterNumberEl.classList.remove("stat__number--limit");

  facebookCharactersLeft < 0
    ? facebookNumberEl.classList.add("stat__number--limit")
    : facebookNumberEl.classList.remove("stat__number--limit");

  // set new numbers
  wordsNumberEl.textContent = numberOfWords;
  characterNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharactersLeft;
};

textAreaEl.addEventListener("input", inputHandler);
