const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const phrases = [
  "maybe in another life… we could be together.",
  "you'd keep the promises you once made.",
  "if the universe was kinder… maybe we'd meet again.",
  "and then… would you choose me this time?",
];

const textDiv = document.getElementById("text");
let index = 0;

function typeSentence(sentence, i = 0) {
  if (i < sentence.length) {
    textDiv.innerHTML += sentence.charAt(i);
    setTimeout(() => typeSentence(sentence, i + 1), 40);
  }
}

function showNextPhrase() {
  textDiv.innerHTML = "";
  typeSentence(phrases[index]);
  index = (index + 1) % phrases.length;
}

// Initial typing
showNextPhrase();

// Change phrase on click
document.body.addEventListener("click", showNextPhrase); 
