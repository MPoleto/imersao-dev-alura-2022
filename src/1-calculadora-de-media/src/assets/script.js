//Imersão dev_ Alura 2022 - Aula 1

const form = document.getElementById('form');
const schoolInput = document.getElementById('school');
const firstInput = document.getElementById('gradesOne');
const secondInput = document.getElementById('gradesTwo');
const thirdInput = document.getElementById('gradesThree');
const fourthInput = document.getElementById('gradesFour');
const displayGrades = document.getElementById('final-grades');
const approval = document.getElementById('approval');
const reset = document.getElementById('reset');

var schoolAverage, firstGrades, secondGrades, thirdGrades, fourthGrades;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  averageCalculation();
});

// Mostrar se a aluna ou aluno foi aprovada(o) ou não.

function averageCalculation () {
  firstGrades = parseFloat(firstInput.value);
  secondGrades = parseFloat(secondInput.value);
  thirdGrades = parseFloat(thirdInput.value);
  fourthGrades = parseFloat(fourthInput.value);
  
  // Colocar a conta inteira da média em apenas uma linha*/
  const finalGrades = ((firstGrades + secondGrades + thirdGrades + fourthGrades)/4).toFixed(1);
  
  isApproved (finalGrades);
}

// Imprimir na própria página o resultado, ao invés do console

function isApproved (finalGrades) {
  
  schoolAverage = parseFloat(schoolInput.value);
  
  form.style.display = "none";
  displayGrades.innerHTML = finalGrades;
  displayGrades.style.display = "block";
  displayGrades.style.borderRadius = "50%";
  reset.style.display = "block";
  
  if((finalGrades > schoolAverage) || (finalGrades == schoolAverage)) {
    
    approval.innerHTML = 'Aprovado(a)';
    approval.style.display = "inline";
    approval.style.color = "rgb(0, 170, 0)";
    displayGrades.style.border = "4px dotted rgb(0, 170, 0)";
    
  }else {
    
    approval.innerHTML = 'Reprovado(a)';
    approval.style.display = "inline";
    approval.style.color = "rgb(134, 1, 8)";
    displayGrades.style.border = "4px dotted rgb(134, 1, 8)";
  }
}

reset.addEventListener('click', () => {
  schoolInput.value = '';
  firstInput.value = ''; 
  secondInput.value = ''; 
  thirdInput.value = ''; 
  fourthInput.value = '';
  
  form.style.display = "grid";
  displayGrades.style.display = "none";
  approval.style.display = "none";   
  reset.style.display = "none";
});



// Criar um conversor de temperaturas entre Fahrenheit e Celsius

var fahrenheit = '60°F';

var celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
console.log(celsius.toFixed(1));