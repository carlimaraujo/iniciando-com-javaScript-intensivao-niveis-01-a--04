// 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");

// 2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = Number(prompt("Digite o primeiro número da soma: "));
let numberTwo = Number(prompt("Digite o segundo número da soma: "));
let sum = numberOne + numberTwo;
alert(`A soma entre ${numberOne} mais ${numberTwo} é igual à: ${sum}`);

// 3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let isNumber = Number(prompt("Digite um valor para verificar se é um número ou não"));
if (typeof isNumber == "number") {
  alert(
    `O valor digitado foi: ${isNumber}, portanto é um número`
  );
} else {
  alert(
    `O valor digitado foi: ${isNumber}, portanto não é um número`
  );
}

// 4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".let isNumber = "abc"
let isString = "abc";
if (typeof isString == "string") {
  alert(
    `A variável de "isString" possui o valor ${isString}, portanto é uma string`
  );
} else {
  alert(
    `A variável de "isString" possui o valor ${isString}, portanto não é uma string`
  );
}

// 5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let isBoolean = false
if(typeof(isBoolean) == "boolean"){
  alert(`O valor da variável "isBoolean" é ${isBoolean}, portanto é um booleano`)
} else {
  alert(`O valor da variável "isBoolean" é ${isBoolean}, portanto não é um booleano`)
}

// 6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let numberOneSub = Number(prompt("Digite o primeiro número da subtração: "))
let numberTwoSub = Number(prompt("Digite o segundo número da subtração: "))
let sub = numberOneSub - numberTwoSub
alert(`A subtração entre ${numberOneSub} menos ${numberTwoSub} é igual à: ${sub}`);

// 7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let numberOneMult = Number(prompt("Digite o primeiro número da multiplicação: "))
let numberTwoMult = Number(prompt("Digite o segundo número da multiplicação: "))
let mult = numberOneMult * numberTwoMult
alert(`A multiplicação entre ${numberOneMult} vezes ${numberTwoMult} é igual à: ${mult}`);

// 8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let numberOneDiv = Number(prompt("Digite o primeiro número da divisão: "))
let numberTwoDiv = Number(prompt("Digite o segundo número da divisão: "))
let div = numberOneDiv / numberTwoDiv
alert(`A divisão entre ${numberOneDiv} e ${numberTwoDiv} é igual à: ${div.toFixed(2)}`);

// 9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let isPair = Number(prompt("Digite um número para verificar se ele é par"))
if(isPair % 2 == 0){
  alert("O número digitado é par")
} else {
  alert("O número digitado não é par")
}

// 10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let isOdd = Number(prompt("Digite um número para verificar se ele é ímpar"))
if(isOdd % 2 != 0){
  alert("O número digitado é ímpar")
} else {
  alert("O número digitado não é ímpar")
}
