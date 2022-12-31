function calculadoraIf(){
var valorA = document.getElementById("valorA").value;
var operacao = document.getElementById("operacoes").value;
var valorB=document.getElementById("valorB").value;
if (operacao=="+"){
    document.getElementById("result").value=parseFloat(valorA)+parseFloat(valorB);
}else if (operacao=="-"){
    document.getElementById("result").value= parseFloat(valorA)-parseFloat(valorB);
}
else if (operacao=="*"){
    document.getElementById("result").value= parseFloat(valorA)*parseFloat(valorB);
}
else if (operacao=="/"){
    document.getElementById("result").value= parseFloat(valorA)/parseFloat(valorB);
}
else{
    alert("Selecione a operação.");
}
}

function calculadoraswitch(){
    var valorA = document.getElementById("valorA").value;
    var operacao = document.getElementById("operacoes").value;
    var valorB=document.getElementById("valorB").value;
    switch(operacao){
        case "+":
            document.getElementById("result").value=parseFloat(valorA)+parseFloat(valorB);
            break;
        case "-":
            document.getElementById("result").value=parseFloat(valorA)-parseFloat(valorB);
            break;
        case "*":
            document.getElementById("result").value=parseFloat(valorA)*parseFloat(valorB);
            break;
        case "/":
            document.getElementById("result").value=parseFloat(valorA)/parseFloat(valorB);
            break;
        default:
            alert("Escolha a operação.");
            
    }
}