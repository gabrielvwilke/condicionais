function questao1(){
    let A = parseFloat(prompt("Digite o valor de A: ").replace(",",","));
    let B = parseFloat(prompt("Digite o valor de B: ").replace(",",","));
    let C = parseFloat(prompt("Digite o valor de C: ").replace(",",","));

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
    let sexo = prompt("Digite (M)asculino ou (F)eminino: ");
    let estadoCivil = prompt("Digite seu estado civil:").toUpperCase();
    if (sexo ==="F" && estadoCivil === "CASADA") {
        let tempoCasada = prompt("Digite o tempo de casada (anos): ");
        resultado - 'Nome: ${nome}
        Sexo: ${sexo}
        EstadoCivil ${estadoCivil}
        TempoDeCasada ${tempoCasada}';
    }
}