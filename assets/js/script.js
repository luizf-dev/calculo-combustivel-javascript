
//? função que calcula os valores
function calculo(event) {

   //? evita que a página seja atualizada automaticamente
   event.preventDefault();

  //? Obtem os valores dos inputs
  const alcool = document.getElementById("alcool").value;
  const gasolina = document.getElementById("gasolina").value;
  const displayResultado = document.getElementById("resultado");
  const displayErro = document.getElementById('error');

 //? variáveis para mensagem ao usuário
  let mensagemAlcool = "A melhor opção nesse caso é Álcool!";
  let mensagemGasolina = "A melhor opção nesse caso é Gasolina!";
  let mensagemAmbas = "Ambas as opções são válidas!";
  
  //? verifica se os campos foram digitados
  if(alcool === "" || gasolina === "") {
    alert("Digite todos os campos!");
    return;
  } 

  //? Converter os valores em float(casas decimais)
  const valoralcool = parseFloat(alcool);
  const valorgasolina  = parseFloat(gasolina);

  //? Fazer a multiplicação e mostrar o resultado na tela
  const resultado = (valoralcool * 100) / valorgasolina;
  

  //? começa a verificar os resultados possíveis para entregar a mensagem ao usuário
  let mensagem = resultado < 70 ? mensagemAlcool :
                 resultado > 70 ? mensagemGasolina :
                 mensagemAmbas;

    displayResultado.innerHTML = resultado.toLocaleString('pt-BR',{maximumFractionDigits:1}) + '% - ' + mensagem;

    //?limpa os inputs após o calculo e impressão na tela
    alcool.value = "";
    gasolina.value = "";
}
