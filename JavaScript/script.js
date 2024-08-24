const textoIngresado = document.getElementById ("textoIngresado");

const botonEncriptar = document.getElementById ("botonEncriptar");

const botonDesencriptar = document.getElementById ("botonDesencriptar");

const mensajeFinal = document.getElementById ("mensajeFinal");

const botonCopiar = document.getElementById ("botonCopiar");

const señora = document.getElementById ("señora");

const mensajeDerecha = document.getElementById ("mensajeDerecha");

const derecha = document.getElementById ("derecha");

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat" ],
]

const replace = (nuevoValor) => {

    mensajeFinal.innerHTML = nuevoValor;

    textoIngresado.value = ""

    señora.classList.add("oculto");

    mensajeDerecha.style.display = "none";

    botonCopiar.style.display = "block";

    derecha.classList.add ("modificaciones");

    mensajeFinal.classList.add("modificaciones");   
}

botonEncriptar.addEventListener("click", () => {
    
    const texto = textoIngresado.value.toLowerCase()
    if(texto != ""){

    function encriptar (newText) {
        for (let i = 0; i < remplazar.length; i++){

            if (newText.includes(remplazar[i][0])){

                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
            };
        };
        return newText
    }

} else{
    alert("Ingrese un texto por favor")
}
    //const textoEncriptado = encriptar(texto)

    mensajeFinal.innerHTML = encriptar(texto);
    
    replace(encriptar(texto));
})

botonDesencriptar.addEventListener("click",() =>{
    const texto = textoIngresado.value.toLowerCase();
    if(texto != ""){
    function desencriptar(newText) {
        for(let i  = 0; i < remplazar.length; i++){
            if(newText.includes(remplazar[i][1])){
                newText = newText.replaceAll(remplazar[i][1],remplazar[i][0]);
        };
    };
    return newText
};  

} else {
    alert("Ingrese un texto por favor")
}
    const textoDesencriptado = desencriptar(texto);

    replace (desencriptar(texto));
    })

botonCopiar.addEventListener("click",() =>{
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy");
    alert("El texto ha sido copiado");

    mensajeFinal.innerHTML = "";
    señora.style.display = "block";
    mensajeDerecha.style.display = "block";
    botonCopiar.style.display = "none";
    derecha.classList.remove("modificaciones");
    mensajeFinal.classList.remove("modificaciones");
    textoIngresado.focus();

})