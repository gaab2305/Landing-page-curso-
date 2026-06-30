const boton = document.getElementById("themeToggle");

// Cargar tema guardado
if(localStorage.getItem("tema") === "oscuro"){

    document.body.classList.add("dark-mode");
    boton.innerHTML = "☀️ Modo Claro";

}

// Cambiar tema
boton.addEventListener("click",function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("tema","oscuro");
        boton.innerHTML = "☀️ Modo Claro";

    }else{

        localStorage.setItem("tema","claro");
        boton.innerHTML = "🌙 Modo Oscuro";

    }

});