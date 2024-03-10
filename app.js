const textArea = document.querySelector(".texto-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            document.getElementById("output").innerHTML = '<textarea id="mensagem" cols="35" rows="10" readonly>' + stringEncriptada + '</textarea>' + '<button class="btn-copiar id="copiar" onclick="copiar()">Copiar</button>'
        }
    }

     return stringEncriptada;
} 

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            document.getElementById("output").innerHTML = '<textarea id="mensagem" cols="40" rows="10" readonly>' + stringDesencriptada + '</textarea>' + '<button class="btn-copiar id="copiar" onclick="copiar()">Copiar</button>'
        }
    }

     return stringDesencriptada;
} 

function copiar(){
    let textcop = document.getElementById('mensagem');

    textcop.select();
    document.execCommand('copy');

    location.reload();
}
