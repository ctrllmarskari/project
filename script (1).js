const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const phrases = [
  "i still love u,buat im not going back."
  " i dont hate u,i miss u."
  "but no i don't want back to u."
  " klo pun gua dikasih kesempatan buat balikan ama lu,gua pasti nolak kesempatan itu."
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
