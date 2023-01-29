// Imersão dev_ Alura 2022 Aula3

var secretNumber = parseInt(Math.random() * 11);
const shotInput = document.getElementById("value");
const resultElement = document.getElementById("result");
const submit = document.getElementById('submit');
const reset = document.getElementById("reset");
var count = 0;

function guess() {
  const shot = parseInt(shotInput.value);
  resultElement.style.color = "#ffffff";
  count++;
  
    if (shot > 10 || shot < 0 || isNaN(shot)) {
      resultElement.innerHTML = "Você deve digitar um número de 0 a 10";
      resultElement.style.color = "red";
      count--;
    } else if (shot == secretNumber) {
      shotInput.disabled = true;
      submit.disabled = true;
      resultElement.innerHTML = `Uhuuu!<br>Você acertou!`;
    } else {
      switch (count) {
        case 1:
          resultElement.innerHTML = 
            `Errou! <br> Tente mais uma vez!<br>${biggerOrSmaller(shot)}`;
          break;
        case 2:
          resultElement.innerHTML = 
            `Ihhh! <br> Errou de novo... Última chance!<br>${biggerOrSmaller(shot)}`;
          break;
        case 3:
          shotInput.disabled = true;
          submit.disabled = true;
          resultElement.innerHTML = 
            `Errou!!!<br>Suas chances acabaram...<br>O número correto era ${secretNumber}` ;
          break;
        default:
          resultElement.innerHTML = 
            `Click no botão "Reset".` ;
          break;
      }
  }
  shotInput.value = '';
}

function biggerOrSmaller (shot) {
  if(shot > secretNumber) {return `O número é menor que ${shot}`;}
  else {return `O número é maior que ${shot}`;}
}

reset.addEventListener("click", () => {
  count = 0;
  secretNumber = parseInt(Math.random() * 11);
  resultElement.innerHTML = '';
  
  if (shotInput.disabled && submit.disabled) {
    shotInput.disabled = false;
    submit.disabled = false;  
  }
});