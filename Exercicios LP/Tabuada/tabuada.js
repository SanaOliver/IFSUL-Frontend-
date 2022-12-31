function exibir(){
    var base = parseInt(document.getElementById("valor").value);
  var resposta = document.getElementById('resposta');
  var tabuada='';

  for(var i=1; i<=10 ; i++)
   tabuada += base+" x "+i+" = "+
               base*i+"<br />";
  
  resposta.innerHTML = tabuada;
}
    function limpar(){
        resposta.innerHTML = '';
    }