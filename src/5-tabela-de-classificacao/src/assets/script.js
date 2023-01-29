// Imersão dev_ Alura 2022 - Aula 6

const players = [];
const table = document.getElementsByTagName("table");
const playersTable = document.getElementById("players-table");
const showPlayer = document.getElementById("show-player");
const resetPoints = document.getElementById("reset-points");
const clearTable = document.getElementById("clear-table");
const scoreToWin = document.getElementById("score-to-win");
const maxPoint = document.getElementById("max-point");
var finish = false;

function showOnScreen(players) {
  let element = "";
  for (let i = 0; i < players.length; i++) {
    element += `<tr><td>${players[i].name}</td>`;
    element += `<td>${players[i].victories}</td>`;
    element += `<td>${players[i].defeats}</td>`;
    element += `<td>${players[i].bonus}</td>`;
    element += `<td>${players[i].points}</td>`;
    if (!finish) {
      element += `<td><button onClick="addVictory(${i})">Vitória</button></td>`;
      element += `<td><button onClick="addDefeat(${i})">Derrota</button></td>`;
      element += `<td><button onClick="addBonus(${i})">Bônus</button></td>`;
      element += "</tr>";
    } else {
      if (maxPoint.disabled && players[i].points >= maxPoint.value) {
        element += `<td class="finished" colspan="3">&#128081; Vencedor &#127942;</td>`;
        element += "</tr>";
      } else {
        element += `<td class="finished" colspan="3"></td>`;
        element += "</tr>";
      }
    }
  }
  playersTable.innerHTML = element;
}

// Adicionar Avatar e nome do Jogador

showPlayer.addEventListener("click", () => {
  const namePlayer = document.getElementById("player");
  const radio = document.querySelector('input[name="avatar"]:checked');
  const idRadio = radio.id;
  const selector = `label[for="${idRadio}"]`;
  const label = document.querySelector(selector).innerHTML;

  if (namePlayer.value == "") return alert("Adicione o nome do jogador");

  const player = new Object();

  player.name = `${label} ${namePlayer.value}`;
  player.victories = 0;
  player.bonus = 0;
  player.defeats = 0;
  player.points = 0;
  players.push(player);

  showOnScreen(players);
  namePlayer.value = "";
});

// Add pontos

function addVictory(i) {
  const player = players[i];
  player.victories++;
  player.points += 3;
  if (maxPoint.disabled && player.points >= maxPoint.value) finish = true;

  showOnScreen(players);
}

function addBonus(i) {
  const player = players[i];
  player.bonus++;
  player.points += 1;
  if (maxPoint.disabled && player.points >= maxPoint.value) finish = true;
  showOnScreen(players);
}

function addDefeat(i) {
  const player = players[i];
  player.defeats++;
  synchronizePoints(player);
  showOnScreen(players);
}

function synchronizePoints(player) {
  const others = players.filter((e) => {
    return e !== player;
  });
  for (let player of others) {
    player.bonus++;
    player.points += 2;
    if (maxPoint.disabled && player.points >= maxPoint.value) finish = true;
    showOnScreen(players);
  }
}

// Pontos para vencer

scoreToWin.addEventListener("click", () => {
  const score = maxPoint.value;
  if (!score || score < 1) return alert("Valor inválido");

  maxPoint.disabled = true;
  scoreToWin.disabled = true;
  scoreToWin.style.cursor = "not-allowed";
});

// Zerar pontos e limpar tabela

resetPoints.addEventListener("click", () => {
  for (let player of players) {
    player.victories = 0;
    player.bonus = 0;
    player.defeats = 0;
    player.points = 0;
  }
  resetbuttons();
  showOnScreen(players);
});

clearTable.addEventListener("click", () => {
  while (players.length) {
    players.pop();
    if (playersTable.hasChildNodes()) {
      playersTable.removeChild(playersTable.children[0]);
    }
  }
  resetbuttons();
});

function resetbuttons() {
  finish = false;
  maxPoint.value = "";
  maxPoint.disabled = false;
  scoreToWin.disabled = false;
  scoreToWin.style.cursor = "pointer";
}