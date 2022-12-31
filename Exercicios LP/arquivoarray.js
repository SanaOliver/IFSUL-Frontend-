var montarLista = document.querySelector("#montar-lista");
    var limparLista = document.querySelector("#limpar-lista");

    montarLista.addEventListener("click", function (){
         var array = [];
        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        for (var i = 0; i < checkboxes.length; i++){
            array.push(checkboxes[i]);
            array.sort();
        }

             var ol = document.querySelector("#lista-montada");
             var btn = document.querySelector('#limpar-lista');
             ol.innerHTML = "";

            for (let i = 0; i < array.length; i++) {
                var li = document.createElement("li");
                li.textContent = array[i];
                ol.appendChild(li);
                console.log(array[i]);
             }

         ol.classList.remove("invisivel");
         btn.classList.remove("invisivel");
    });

    limparLista.addEventListener("click", function(){
        console.log("fui clicado");
        location.reload(); 
    });