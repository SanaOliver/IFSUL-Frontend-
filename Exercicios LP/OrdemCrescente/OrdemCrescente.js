function resolver(){
var valor1 = document.getElementById("valor1").value;
var valor2 = document.getElementById("valor2").value;
var valor3 = document.getElementById("valor3").value;
var valor4= document.getElementById("valor4").value;
var valor5= document.getElementById("valor5").value;
var array = [valor1,valor2,valor3,valor4,valor5];
array.sort();
array.forEach(function(array){
    document.getElementById("listar").insertAdjacentHTML("before", item + "<br>");
});
}