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