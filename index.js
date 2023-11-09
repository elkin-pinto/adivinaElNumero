

/* Primero de todo lo que haremos es crear el numero random y guardarlo en una variable */

var numero_aleatorio = "18784"
var intentos = 0
for (i = 0; i < 5; i++) {
    let num_random = Math.floor(Math.random() * 10);

}



function adivina_el_numero() {

    /* Cogemos los daots que nos da el usuario y dependiendo de si es lo 
    que queremos seguireos con el codigo o le mandaremos un mensaje mediante 
    la secion de INFO */
    let numero = document.getElementById("input").value;
    if (numero.length != 5) {
        document.getElementById("mensaje").getElementsByTagName("p")[0].innerHTML = "El valor enviado no cumple las condiciones";
    }


    /* Le daremos a cada uno de los cuadrados de las secion codigo el valor del numero secreto correspondiente ya que el usuario a perdido */
    else if (intentos == 4) {
        document.getElementById("mensaje").getElementsByTagName("p")[0].innerHTML = "GAME OVER, Recarga la pagina para volver a jugar ;D";
        let article = document.getElementsByClassName("numerosAdivinado");
        for (i = 0 ; i < 5; i++) {
            article[i].getElementsByTagName("p")[0].getElementsByTagName("b")[0].innerHTML = numero_aleatorio[i]
            article[i].style.backgroundColor = "var(--gris_apartado_result)"
        }
    }
    else if (intentos != -1) {

        /* Cogemos el SECTION de result y le agregaremos una estrctura que consiste
        en un article con 5 div y 5 p cada uno, tambien le ponemos una clase a los articles
        y a los divs, que le daran el aspecto mediante el css */

        let section_result = document.getElementById("result");
        let article = document.createElement("article");
        section_result.appendChild(article);
        article.classList.add("article_result");
        for (i = 0 ; i < 5; i++) {
            let div = document.createElement("div");
            let p = document.createElement("p");
            article.appendChild(div);
            div.appendChild(p);
            div.classList.add("div_result");
            

            /* Aprovechando el bucle y que tenemos aqui cada p por separado
            lo que haremos es dar el texto a cada p */ 
            p.innerHTML = numero[i];
        }

        /* Creamos un array que guardaremos el numero de veces que aparece un numero, lo usaremos para que cuando hagamos la revision no salgan errores */

        let numeros_array = [0,0,0,0,0,0,0,0,0,0];
        for (i = 0;i < 5;i++) {
            numeros_array[numero_aleatorio[i]] += 1;
        }
        

        let div = article.getElementsByTagName("div");
        for (i = 0 ; i < 5; i++) {
            /* vamos a cambiar el color del div dependiendo del valor introduzido por el usuario */
            if (numeros_array[numero[i]] > 0 && numero_aleatorio[i] == numero[i]) {
                numeros_array[numero[i]] -= 1;
                div[i].style.backgroundColor = "var(--verde_apartado_result)";
            }
            else if (numeros_array[numero[i]] > 0 && numero_aleatorio.includes(numero[i])) {
                numeros_array[numero[i]] -= 1;
                div[i].style.backgroundColor = "var(--amarillo_apartado_result)";
            }
            else {
                div[i].style.backgroundColor = "var(--gris_apartado_result)";
            }
        }

        /* Definimos las frases que dara la secions de info ademas de ir contando los intentos, para asi dar game over */
        let frases_secion_info = ["2ndo intento, aun te queda ;)", "3ter intento, ya casí =p", "4rto intento, solo dos mas", "5nto intento, último intento!! =("];
        document.getElementById("mensaje").getElementsByTagName("p")[0].innerHTML = frases_secion_info[intentos];
        intentos++;

        /* Aqui definiremos que el usuario a ganado diciendo que intentos es -1 para asi que ya no pueda interactuar mas con la pagina (gracias a la condicion que tiene el else if)
        , ademas mostraremos el numero secreto y un mensaje por la secion de info */

        if (numero_aleatorio == numero) {
            intentos = -1
            document.getElementById("mensaje").getElementsByTagName("p")[0].innerHTML = "Enhora buena, has ganado, Recarga la pagina para volver a jugar ;D";
            let article_codigo = document.getElementsByClassName("numerosAdivinado");
            for (i = 0 ; i < 5; i++) {
            article_codigo[i].getElementsByTagName("p")[0].getElementsByTagName("b")[0].innerHTML = numero_aleatorio[i];
            article_codigo[i].style.backgroundColor = "var(--verde_apartado_result)";
        }
        }
        
    }
}