PROBLEMA 1: 

Uma cesta com frutas, contém: 15 maçãs, 10 peras e algumas bananas. 
Sabendo que o total de bananas é o dobro da soma do total de maçãs e de peras, descubra qual é
a quantidade de bananas que estão na cesta. 



const quantidadeDeMaçãsNaCesta = prompt("Quantidade de maçãs na cesta:"); // Inserindo total de maçãs
console.log(quantidadeDeMaçãsNaCesta);


const quantidadeDePerasNaCesta = prompt("Quantidade de peras na cesta:"); // Inserindo total de peras
console.log(quantidadeDePerasNaCesta);


const totalDeMaçãsEPerasNaCesta = parseInt(quantidadeDeMaçãsNaCesta) + parseInt(quantidadeDePerasNaCesta); // Somando total de maçãs + total de peras
console.log(totalDeMaçãsEPerasNaCesta);


const quantidadeDeBananasNaCesta = totalDeMaçãsEPerasNaCesta * 2; // Multiplicando total da soma de maçãs e peras por 2
console.log(quantidadeDeBananasNaCesta);



alert(` Quantidade de Bananas na Cesta: ${quantidadeDeBananasNaCesta} `); // Informando o resultado 



PROBLEMA 2:

O valor total do jantar de um cliente é R$ 135,00. Sabendo que a taxa de serviço do garçom é 
10% do valor do jantar, qual é o valor total a ser pago pelo cliente?

let valorConta = prompt("Digite o valor da conta:"); // Inserindo o valor da conta
console.log(valorConta);


let valorContaInteiro = parseFloat(valorConta); 


let taxaGarçom = valorContaInteiro * 0.1; // Calculando a taxa de serviço do garçom
console.log(taxaGarçom);


let valorTotal = valorContaInteiro + taxaGarçom; // Calculando o valor total a ser pago pelo cliente
console.log(valorTotal);



alert(` O valor a ser pago pelo cliente é: ${valorTotal} `); // Informando o resultado 




PROBLEMA 3: 

João e sua namorada e mais outros 2 casais foram a uma pizzaria. Eles decidiram dividir entre todos
de forma igual, o valor total da conta, que foi de R$ 360,00. Qual o valor a ser pago por cada pessoa?


const valorTotalDaConta = parseFloat(prompt("Digite o valor total da conta:")); // lendo o valor da conta 
console.log(valorTotalDaConta);


const númeroDePessoas = parseInt(prompt("Digite o número de pessoas:")); // lendo o número de pessoas
console.log(númeroDePessoas);


const valorPorPessoa = valorTotalDaConta / númeroDePessoas; // calculando o valor a ser pago por cada pessoa
console.log(valorPorPessoa);



alert(` Cada pessoa deve pagar: ${valorPorPessoa} `); // Informando o resultado 

