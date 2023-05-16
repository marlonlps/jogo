var nomes = [];
var txtNomes = document.querySelector("#nomes");
var btn = document.querySelector("#iniciar");
var pontuacao = 0;
var rodada = 1;
var totalRodadas = 5;
var tempo = 1;

btn.addEventListener("click", function () {
   var valores = txtNomes.value;
   nomes = valores.split(" ");
   txtNomes.value = "";
   txtNomes.disabled = true;
   btn.disabled = true;
   setTimeout(function() {
      jogar();
   }, tempo);
});

function jogar() {
   var numeroAleatorio = Math.floor(Math.random() * nomes.length) + 1;
   var palpite = prompt(`Digite o ${numeroAleatorio}º nome da lista:`);
   var nomeCorreto = nomes[numeroAleatorio - 1];
   var mensagem;
   
   if (palpite === nomeCorreto) {
      pontuacao++;
      mensagem = "Parabéns, você acertou!";
   } else {
      pontuacao = Math.max(0, pontuacao - 1);
      mensagem = `Ops, você errou! O nome correto era ${nomeCorreto}.`;
   }
   
   alert(mensagem + ` Sua pontuação é ${pontuacao}.`);
   rodada++;
   
   if (rodada <= totalRodadas) {
      setTimeout(function() {
         jogar();
      }, tempo);
   } else {
      if (pontuacao >= 3) {
         alert(`Fim de jogo! Você completou as ${totalRodadas} rodadas. Sua pontuação final é ${pontuacao}.`);
      } else {
         alert(`Fim de jogo! Você completou as ${totalRodadas} rodadas, mas sua pontuação final é ${pontuacao}. `);
      }
      
      txtNomes.disabled = false;
      btn.disabled = false;
      rodada = 1;
      pontuacao = 0;
   }
}
