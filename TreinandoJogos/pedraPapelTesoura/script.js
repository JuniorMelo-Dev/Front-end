var jogadorEscolha = 0;
var computadorEscolha = 0;
var jogadorPontos = 0;
var computadorPontos = 0;
var ganhador = -1;

function jogar(escolha) {
      jogadorEscolha = escolha;

      computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;
      
      if ((jogadorEscolha == 1) && (computadorEscolha == 1)) {
            ganhador = 0;
      }
      else if ((jogadorEscolha == 1) && (computadorEscolha == 2)) {
            ganhador = 2;
      }
      else if ((jogadorEscolha == 1) && (computadorEscolha == 3)) {
            ganhador = 1;
      }
      else if((jogadorEscolha == 2) && (computadorEscolha == 1)) {
            ganhador = 1;
      }
      else if ((jogadorEscolha == 2) && (computadorEscolha == 2)) {
            ganhador = 0;
      }
      else if ((jogadorEscolha == 2) && (computadorEscolha == 3)){
            ganhador = 2;
      }
      else if ((jogadorEscolha == 3) && (computadorEscolha == 1)) {
            ganhador = 2;
      }
      else if ((jogadorEscolha == 1) && (computadorEscolha == 2)) {
            ganhador = 1;
      }
      else if ((jogadorEscolha == 3) && (computadorEscolha == 3)) {
            ganhador = 0;
      }
      
      document.getElementById("jogador-escolha1").classList.remove('selecionado');
      document.getElementById("jogador-escolha2").classList.remove('selecionado');
      document.getElementById("jogador-escolha3").classList.remove('selecionado');


      document.getElementById("computador-escolha1").classList.remove('selecionado');
      document.getElementById("computador-escolha2").classList.remove('selecionado');
      document.getElementById("computador-escolha3").classList.remove('selecionado');

      document.getElementById("jogador-escolha" + jogadorEscolha).classList.add('selecionado');
      document.getElementById("computador-escolha" + computadorEscolha).classList.add('selecionado');

      if (ganhador == 0) {
            document.getElementById('mensagens').innerHTML = 'Empate';
      } else if (ganhador == 1) {
            document.getElementById('mensagens').innerHTML = 'Jogador Ganhou!!';
            jogadorPontos++;
      } else if (ganhador == 2) {
            document.getElementById('mensagens').innerHTML = 'Computador Ganhou ! !';
            computadorPontos++;
      }

      document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
      document.getElementById('computador-pontos').innerHTML = computadorPontos;
}