const baralho = [
  {
    nome: "Zorro",
    img:
      "./assets/img/characters/zorro.jpg",
    atributos: {
      Força: 61,
      Magia: 67,
      Resistência: 49,
      Agilidade: 64,
      Sorte: 63
    }
  },
  {
    nome: "Captain Kidd",
    img:
      "./assets/img/characters/captainKidd.jpg",
    atributos: {
      Força: 73,
      Magia: 43,
      Resistência: 81,
      Agilidade: 54,
      Sorte: 53
    }
  },
  {
    nome: "Carmen",
    img:
      "./assets/img/characters/carmen.jpg",
    atributos: {
      Força: 55,
      Magia: 78,
      Resistência: 55,
      Agilidade: 56,
      Sorte: 61
    }
  },
  {
    nome: "Goemon",
    img:
      "./assets/img/characters/goemon.jpg",
    atributos: {
      Força: 78,
      Magia: 54,
      Resistência: 66,
      Agilidade: 61,
      Sorte: 45
    }
  },
  {
    nome: "Johanna",
    img:
      "./assets/img/characters/johanna.jpg",
    atributos: {
      Força: 64,
      Magia: 65,
      Resistência: 61,
      Agilidade: 65,
      Sorte: 49
    }
  },
  {
    nome: "Necronomicon",
    img:
      "./assets/img/characters/necronomicon.jpg",
    atributos: {
      Força: 48,
      Magia: 63,
      Resistência: 55,
      Agilidade: 58,
      Sorte: 96
    }
  },
  {
    nome: "Milady",
    img:
      "./assets/img/characters/milady.jpg",
    atributos: {
      Força: 69,
      Magia: 64,
      Resistência: 59,
      Agilidade: 59,
      Sorte: 53
    }
  },
  {
    nome: "Robin Hood",
    img:
      "./assets/img/characters/robinHood.jpg",
    atributos: {
      Força: 70,
      Magia: 61,
      Resistência: 60,
      Agilidade: 62,
      Sorte: 51
    }
  },
  {
    nome: "Arsène",
    img:
      "./assets/img/characters/arsene.jpg",
    atributos: {
      Força: 63,
      Magia: 60,
      Resistência: 57,
      Agilidade: 56,
      Sorte: 56
    }
  }
];

var cartaMaquina = 0;
var cartaJogador = 0;
const elementoResultado = document.getElementById("resultado");

function sortearCarta() {
  const numeroCartaMaquina = parseInt(Math.random() * 9);
  cartaMaquina = baralho[numeroCartaMaquina];

  let numeroCartaJogador = parseInt(Math.random() * 9);

  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 9);
  }
  cartaJogador = baralho[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  elementoResultado.innerHTML = "";
  exibirOpcoes();
}

function exibirOpcoes() {
  const opcoes = document.getElementById("opcoes");

  const image = `<img src=${cartaJogador.img} alt=${cartaJogador.nome} /><br>`;
  let opcoesTexto = `<div id="atributos"><h2>Escolha o seu atributo:</h2>`;
  for (let atributo in cartaJogador.atributos) {
    opcoesTexto += `<label><input type="radio" name="atributo" value="${atributo}">${atributo}</label><br>`;
  }
  opcoesTexto += "</div>";
  opcoes.innerHTML = opcoesTexto + image;
}

function obtemAtributoSelecionado() {
  const radioAtributos = document.getElementsByName("atributo");
  for (let i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  const atributoSelecionado = obtemAtributoSelecionado();
  const valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  const valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (atributoSelecionado === undefined) {
    return (elementoResultado.innerHTML = "Selecione um atributo");
  } else if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu...";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}