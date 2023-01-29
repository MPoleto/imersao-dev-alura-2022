// Imersão dev_ 2022 - Aula 8
const onePunchMan = [
  {
    nome: "Saitama",
    img: "./assets/img/characters/saitama.webp",
    atributos: {
      "Estamina": 15,
      "Inteligência": 3,
      "Justiça": 15,
      "Resistência": 15,
      "Poder": 15,
      "Popularidade": 1
    }
  }, 
  {
    nome: "Tornado of Terror",
    img: "./assets/img/characters/tornadoOfTerror.jpg",
    atributos: {
      "Estamina": 5,
      "Inteligência": 7,
      "Justiça": 7,
      "Resistência": 8,
      "Poder": 9,
      "Popularidade": 9
      
    }
  },
  {
    nome: "Atomic Samurai",
    img: "./assets/img/characters/atomicSamurai.jpg",
    atributos: {
      "Estamina": 9,
      "Inteligência": 4,
      "Justiça": 6,
      "Resistência": 8,
      "Poder": 10,
      "Popularidade": 8
    }
  },
  {
    nome: "Demon Cyborg",
    img: "./assets/img/characters/demonCyborg.jpg",
    atributos: {
      "Estamina": 9,
      "Inteligência": 7,
      "Justiça": 7,
      "Resistência": 9,
      "Poder": 8,
      "Popularidade": 8
    }
  },
  {
    nome: "Puri-Puri Prisioner",
    img: "./assets/img/characters/puri-puriPrisioner.png",
    atributos: {
      "Estamina": 8,
      "Inteligência": 4,
      "Justiça": 6,
      "Resistência": 8,
      "Poder": 7,
      "Popularidade": 7
    }
  },
  {
    nome: "Blizzard of Hell",
    img: "./assets/img/characters/blizzardOfHell.jpg",
    atributos: {
      "Estamina": 5,
      "Inteligência": 7,
      "Justiça": 5,
      "Resistência": 5,
      "Poder": 6,
      "Popularidade": 8
    }
  },
  {
    nome: "Mumen Rider",
    img: "./assets/img/characters/mumenRider.jpg",
    atributos: {
      "Estamina": 4,
      "Inteligência": 4,
      "Justiça": 10,
      "Resistência": 4,
      "Poder": 3,
      "Popularidade": 7
    }
  },
  {
    nome: "Silver Fang",
    img: "./assets/img/characters/silverFang.jpeg",
    atributos: {
      "Estamina": 9,
      "Inteligência": 6,
      "Justiça": 7,
      "Resistência": 9,
      "Poder": 10,
      "Popularidade": 7
    }
  },
  {
    nome: '"Biting Snake Fist" Sneck',
    img: "./assets/img/characters/bitingSnakeFist-Sneck.jpeg",
    atributos: {
      "Estamina": 6,
      "Inteligência": 6,
      "Justiça": 6,
      "Resistência": 5,
      "Poder": 6,
      "Popularidade": 5
    }
  },
  {
    nome: "Speed-o'-Sound Sonic",
    img: "./assets/img/characters/speed-o-Sound-Sonic.webp",
    atributos: {
      "Estamina": 13,
      "Inteligência": 6,
      "Justiça": 1,
      "Resistência": 9,
      "Poder": 7,
      "Popularidade": 1
    }
  },
  {
    nome: "Garou",
    img: "./assets/img/characters/garou.webp",
    atributos: {
      "Estamina": 12,
      "Inteligência": 6,
      "Justiça": 1,
      "Resistência": 12,
      "Poder": 9,
      "Popularidade": 1
    }
  },
  {
    nome: "Suiryu",
    img: "./assets/img/characters/suiryu.jpg",
    atributos: {
      "Estamina": 10,
      "Inteligência": 8,
      "Justiça": 1,
      "Resistência": 10,
      "Poder": 9,
      "Popularidade": 10
    }
  }
]

const divResultado = document.getElementById('resultado');
const divCartaJogador = document.getElementById("carta-jogador");
const divCartaMaquina = document.getElementById("carta-maquina");
const btnSortear = document.getElementById("btnSortear");
const btnJogar = document.getElementById("btnJogar");
const btnReset = document.getElementById("btnReset");
const btnSection = document.getElementById("section-btn");
const baralhoJog = [];
const baralhoMaq = [];
var cartaMaquina = 0;
var cartaJogador = 0;

// Antes de iniciar o jogo

function dividirBaralho(baralho){
    const copia = baralho.filter(() => {return baralho;});

    for(let i = copia.length; i > 0; i--) {
      const numeroCarta = parseInt(Math.random() * copia.length);

      if(i % 2 == 0) {
        baralhoJog.push(copia[numeroCarta]);
         copia.splice(numeroCarta, 1);
      } else {
        baralhoMaq.push(copia[numeroCarta]);
         copia.splice(numeroCarta, 1);
      }
  }
}

dividirBaralho(onePunchMan);

// Funções chamadas pelos botões

function sortearCarta() {
  btnSortear.disabled = true;
  btnJogar.disabled = false;
  divResultado.innerHTML = "";
  divCartaMaquina.innerHTML = "";
  
  if(baralhoMaq.length == 0 || baralhoJog.length == 0) {
    finalizarJogo(baralhoMaq, baralhoJog);
  } else {
    let numeroCartaJogador = parseInt(Math.random() * baralhoJog.length);
    cartaJogador = baralhoJog[numeroCartaJogador];

    let numeroCartaMaquina = parseInt(Math.random() * baralhoMaq.length);
    cartaMaquina = baralhoMaq[numeroCartaMaquina];
  
    exibirCarta(divCartaJogador, cartaJogador);
  }
}

function jogar(){
  let atributoSelecionado = obtemAtributoSelecionado();
  let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  let htmlResultado;
  
  if (atributoSelecionado === undefined) {
    return (divResultado.innerHTML = `<p class="resultado">Selecione<br>um atributo</p>`);
  } else if(valorCartaJogador > valorCartaMaquina) {
    htmlResultado = `<p class="resultado">Venceu</p>`;
    pegarCarta(cartaMaquina, baralhoMaq, baralhoJog);
    
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado = `<p class="resultado">Perdeu</p>`
    pegarCarta(cartaJogador, baralhoJog, baralhoMaq); 
    
  } else {
    htmlResultado = `<p class="resultado">Empatou</p>`
  }
  divResultado.innerHTML = htmlResultado;
  
  exibirCarta(divCartaMaquina, cartaMaquina);
  
  btnSortear.disabled = false;
  btnJogar.disabled = true;
}

function resetBaralho() {
  btnSortear.style.display = "initial";
  btnJogar.style.display = "initial";
  btnSortear.disabled = false;
  btnJogar.disabled = true;
  divCartaMaquina.innerHTML = "";
  divCartaJogador.innerHTML = "";
  divResultado.innerHTML = "";
  btnSection.style.alignSelf = "center";
  document.body.style.backgroundImage = "";
  
  for(let i = baralhoMaq.length; i > 0; i--) {
    baralhoMaq.pop();
  }
  for(let i = baralhoJog.length; i > 0; i--) {
    baralhoJog.pop();
  }
  dividirBaralho(onePunchMan);
}

// Funções de apresentação e complemento

function exibirCarta(divCarta, carta) {
  let img = `<div class="carta-imagem" style="background-image: url(${carta.img})"></div>`
  let moldura = `<img src="./assets/img/card-super-trunfo-transparent-ajustado.webp" class="carta-moldura" style="width: inherit; height: inherit; position: absolute;">`;
  
  let nome = `<h3 class="carta-nome">${carta.nome}</h3>`
  let subtitulo = `<h4>Escolha o seu atributo</h4>`
  let tagHTML = `<div id="opcoes" class="carta-status">`;
  
  let opcoesTexto = "";
  for (let atributo in carta.atributos) {
    opcoesTexto += `<label><input type="radio" name="atributo" value="${atributo}"> ${atributo}  <span>${carta.atributos[atributo]}</span></label>`;
  }
  
  divCarta.innerHTML = img + moldura + nome + subtitulo + tagHTML + opcoesTexto + "</div>"
}

function obtemAtributoSelecionado() {
  let radioAtributos = document.getElementsByName("atributo");
  for (let i = 0; i < radioAtributos.length; i++) {
    if(radioAtributos[i].checked)
      return radioAtributos[i].value;
  }
}

// Passar carta de uma array para outra
function pegarCarta(cartaPerdeu, baralhoPerdeu, baralhoVenceu) {
  let cartaGanha;
  for (let i = 0; i < baralhoPerdeu.length; i++) {
    if (cartaPerdeu == baralhoPerdeu[i]) {
      cartaGanha = baralhoPerdeu.splice(i, 1);
      break;
    }
  }
   baralhoVenceu[baralhoVenceu.length] = cartaGanha[0];
}

// Mostrar vencedor
function finalizarJogo(baralhoMaq, baralhoJog){
  btnSortear.style.display = "none";
  btnJogar.style.display = "none";
  divCartaJogador.innerHTML = "";
  
  if(baralhoMaq.length == 0) {
    divResultado.innerHTML = '<p class="resultado-final">VOCÊ<br>VENCEU!</p>';
    btnSection.style.alignSelf = "flex-end";
    document.body.style.backgroundPosition = "top right";
    document.body.style.backgroundImage = "url('./assets/img/backgroundWin.png')";
    
  } else if(baralhoJog.length == 0){
    divResultado.innerHTML = `<p class="resultado-final" style="font-family: 'Teko', sans-serif; color: #111; text-shadow: 0px 0px rgb(255,251,200), 0px 0px rgb(255,251,200), 0px 0px 3px rgb(255,251,200);">GAME OVER</p>`;
  
    document.body.style.backgroundPosition = "bottom left";
    document.body.style.backgroundImage = "url('./assets/img/backgroundLose.jpg')";
  }
}
