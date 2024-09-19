function questão1(){
    let A = parseFloat(prompt("Digite o valor de A: ").replace(",", "."));
    let B = parseFloat(prompt("Digite o valor de B: ").replace(",", "."));
    let C = parseFloat(prompt("Digite o valor de C: ").replace(",", "."));
    let resultado;
    if (A + B < C) {
     resultado = ("A soma de A + B é menor que C");
     document.getElementById("resultado1").innerHTML = resultado;
    }
    else{
        resultado = ("A soma de A + B é maior que C");
        document.getElementById("resultado1").innerHTML = resultado;
    }
}   

function questão2() {
    let nome = prompt("Digite seu nome: ").toUpperCase();
    let sexo = prompt("Digite (M)asculino ou (F)eminino: ").toUpperCase();
    let estadoCivil = prompt("Digite seu estado civil:").toUpperCase();
    if (sexo ==="F" && estadoCivil === "CASADA") {
        let tempoCasada = prompt("Digite o tempo de casada (anos): ");
        resultado = `
        Nome: ${nome}
        Sexo: ${sexo}
        EstadoCivil ${estadoCivil}
        TempoDeCasada ${tempoCasada} anos
        `;
    } else {
        resultado =`
        Nome: ${nome}
        Sexo: ${sexo}
        Estado Civil: ${estadoCivil}
        `;
    }
    document.getElementById("resultado2").innerHTML = resultado;
}

function questão3() {
    let numero = parseInt(prompt("Digite um número: "));
    let resultado = (numero % 2 === 0) 
    ? `O número ${numero} é par`
    : `O número ${numero} é ímpar`;
    document.getElementById("resultado3").innerHTML = resultado;
}

function questão4() {
    let A = parseInt(prompt("Digite o valor de A: "));
    let B = parseInt(prompt("Digite o valor de B: "));
    let C = 0;
    if (A === B) {
        C = A + B;
    } else {
        C = A * B;
    }
    let resultado = `O valor de C é ${C}`;
    document.getElementById("resultado4").innerHTML = resultado;
}

function questão5() {
    let numero = parseFloat(prompt("Digite um número: ").replace(",", "."));
    let resultado = (numero >=0) ? `O dobro do número é: ${numero * 2}` : `O triplo do número é: ${numero * 3}`;
    document.getElementById("resultado5").innerHTML = resultado;
}

function questão6() {
    let valor1 = prompt("Digite o primeiro booleano (true ou false): ").toLocaleLowerCase();
    let valor2 = prompt("Digite o segundo booleano (true ou false): ").toLocaleLowerCase();
    let resultado;
    if (valor1 === "true" && valor2 === "true") {
      resultado = "Ambos são verdadeiros";  
    } else if (valor1 === "false" && valor2 === "false"){
        resultado = "Ambos são falsos";
    } else {
        resultado = "Pelo menos um é falso";
    }
    document.getElementById("resultado6").innerHTML = resultado;
}

function questão7() {
    let numero = parseFloat(prompt("Digite um número: ").replace(",", "."));
    let resultado = (numero % 2 === 0) ? `O resultado da soma é: ${numero + 5}`: `O resultado da subtração é: ${numero + 8}`;
    document.getElementById("resultado7").innerHTML = resultado;
}

function questão8() {
   let valores = [];
   valores.push(parseInt(prompt("Digite o primeiro valor: ")));
   valores.push(parseInt(prompt("Digite o segundo valor: ")));
   valores.push(parseInt(prompt("Digite o terceiro valor: ")));
   valores.sort((a, b) => b - a);
   let resultado = `Os valores em ordem decrescente são: ${valores.join(", ")}`;
    document.getElementById("resultado8").innerHTML = resultado;
}

function questão9() {
    let altura = parseFloat(prompt("Digite sua altura (m): ").replace(",", "."));
    let sexo = prompt("Digite seu sexo (M)asculino ou (F)eminino: ").toUpperCase();
    let pesoIdeal = (62.1 * altura) - 44.7;
    if (sexo === "M") {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === "F") {
        pesoIdeal = (62.1 * altura) -44.7;
    } else {
        pesoIdeal = "Sexo inválido";
    }
    let resultado = `O peso ideal é: ${pesoIdeal.toFixed(2)} kg`;
    document.getElementById("resultado9").innerHTML = resultado;
}

function questão10() {
    let peso = parseFloat(prompt("Digite o seu peso (kg): ").replace(",", "."));
    let altura = parseFloat(prompt("Digite a sua altura (m): ").replace(",", "."));
    let imc = peso / (altura ** 2);
    let condicao;
    if (imc < 18.5) {
        condicao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        condicao = "Peso normal";
    } else if (imc > 25 && imc < 30) {
        condicao = "Acima do peso";
    } else {
        condicao = "Obeso";
    }
    let resultado = `Seu IMC é: ${imc.toFixed(2)} e sua condição é: ${condicao}`;
    document.getElementById("resultado10").innerHTML = resultado;
}

function questão11() {
    let preco = parseFloat(prompt("Digite o preco do produto (R$): ").replace(",", "."));
    let condicaoPagamento = parseFloat(prompt("Digite a condicao de pagamento (1 a 4): "));
    switch (condicaoPagamento) {
        case 1:
            total = preco * 0.9;
            break;
        case 2:
            total = preco * 0.85;
            break;    
        case 3:
            total = preco;
            break;
        case 4:
            total = preco * 1.1;
            break;
        default:
            total = "Código inválido.";
    }
    let resultado = `O total a ser pago é: R$ ${total.toFixed(2)}`;
    document.getElementById("resultado11").innerHTML = resultado;
}

function questão12() {
    
}