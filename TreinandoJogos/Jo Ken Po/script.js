/* CONTAGEM DE PONTOS */
var contUser = 0
var contPc = 0

/* ELEMENTOS DA APLICAÇÃO */
const imgUser = document.getElementById("user")
const imgPc = document.getElementById("pc")
const playing = document.getElementById("playing")
const contador = document.getElementById("contador")
const winner = document.getElementById("winner")
const loser = document.getElementById("loser")

/* SONS */
const audioWin = new Audio("assets/sounds/winning.wav")
const audioLose = new Audio("assets/sounds/losing.wav")

/* VARIÁVEIS DE ELEMENTOS */
var player1 = ""
var player2 = ""

playing.addEventListener("click", () => {
      reset()
      playPc()
})

function reset() {
      player1 = document.querySelector('input[name="play"]:checked').value
      imgUser.innerHTML = "<img src='assets/images/" + player1 + ".png'>"
      imgPc.innerHTML = ""
}

function playPc() {
      let opt = ['pedra', 'papel', 'tesoura']
      let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      player2 = opt[num]
      imgPc.innerHTML = "<img src='assets/images/" + player2 + ".png'>"
      analyze()
}

function analyze() {

      playing.disabled = true
      
      let win = "0"

      /* 
            0 = EMPATE
            1 = VITÓRIA
            -1 = DERROTA
      */

      if (player1 == player2) {

      } else if (player1 == "pedra") {
            win = player2 == "tesoura" ? 1 : -1
      } else if (player1 == "papel") {
            win = player2 == "pedra" ? 1 : -1
      } else if (player1 == "tesoura") {
            win = player2 == "papel" ? 1 : -1
      }

      if (win == 0) {

      } else if (win > 0) {
            contUser = contUser + 1
            audioWin.play()
      } else {
            contPc = contPc + 1
            audioLose.play()
      }

      contador.innerHTML = contUser + ":" + contPc

      if (contUser >= 5) {
            winner.classList.remove('none')
            winner.classList.add('center')
      }

      if (contPc >= 5) {
            loser.classList.remove('none')
            loser.classList.add('center')
      }

      setTimeout(()=>{
            playing.disabled = false
            clear();
      },1000)
}

function clear() {
      imgPc.innerHTML = ""
      imgUser.innerHTML = ""
}

function newGame() {
      contador.innerHTML = "0:0"
      contPc = 0
      contUser = 0
      reset()
      winner.classList.add('none')
      winner.classList.remove('center')
      loser.classList.add('none')
      loser.classList.remove('center')
}