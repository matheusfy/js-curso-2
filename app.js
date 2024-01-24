let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function imprimirConsole() {
	console.log("O botão foi clicado")
}

function Alerta(){
	alert("Eu amo JS");
}

function perguntaCidade(){
	let cidade = prompt("Digite o nome de uma cidade do Brasil");

	alert(`Estive em ${cidade} e lembrei de você`);
}

function soma(){
	let num1 = parseInt(prompt("Digite o numero 1"));
	let num2 = parseInt(prompt("Digite o numero 2"));
	if (Number.isInteger(num1) && Number.isInteger(num2)){
		alert(num1 + num2);
	} else{
		alert("Falha no calculo. Insira numeros validos");
	}
}