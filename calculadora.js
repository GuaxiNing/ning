var opera = "";
var valorAnt = 0;

function adicionarNaTela(valor){
    var numero=0
    var ax;
    var num;

    numero = document.getElementById("tela").value
    document.getElementById("tela").value = numero + valor
}

function mais(){
     
    if (opera == "+") { 
        
        var valorAtual = parseFloat(document.getElementById("tela").value);
        valorAnt += valorAtual;
    }
    else { 
        valorAnt = parseFloat(document.getElementById("tela").value);
    }

    opera = "+";
    document.getElementById("tela").value = ""; 

}

function menos(){
    if (opera == "-") {
        var valorAtual = parseFloat(document.getElementById("tela").value);
        valorAnt -= valorAtual;
    }
    else {
        valorAnt = parseFloat(document.getElementById("tela").value);
    }

    opera = "-";
    document.getElementById("tela").value = "";

}

function multiplica(){
    var valorAtual = parseFloat(document.getElementById("tela").value);
    

    if (opera == "*") {
        valorAnt = valorAnt * valorAtual;
    }
    else {
        valorAnt = valorAtual
    }

    opera = "*";
    document.getElementById("tela").value = "";

}

function divide(){
    var valorAtual = parseFloat(document.getElementById("tela").value);

    if (opera == "/") {
        valorAnt = valorAnt / valorAtual;
    }
    else {
        valorAnt = valorAtual
    }

    opera = "/";
    document.getElementById("tela").value = ""; 

}


function ponto(){
    var tela = document.getElementById("tela").value;

    if (!tela.includes(".")){
    document.getElementById("tela").value = tela + ".";
    }
}

function igual(){
    var valorAtual = parseFloat(document.getElementById("tela").value); 
    var result = 0;

    if(opera == "+"){
        result = valorAnt + valorAtual;
    }
    
    else if(opera == "-"){
        result = valorAnt - valorAtual;
    }

    else if(opera == "*"){
        result = valorAnt * valorAtual;
    }

    else if(opera == "/"){
        result = valorAnt / valorAtual;
    }

    else if(opera == "%"){
        result = (valorAnt * valorAtual) / 100;

    }

    document.getElementById("tela").value = result;
    valorAnt = result;
    opera= "";

}

function limpa(){
    valorAtual = 0;
    valorAnt = 0;
    result = 0;
    opera = 0;

    document.getElementById("tela").value = " ";

}