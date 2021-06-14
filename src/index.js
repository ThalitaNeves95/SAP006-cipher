import cipher from './cipher.js';

let botaoCifrar = document.getElementById("botaoCifrar")
let botaoDecifrar = document.getElementById("botaoDecifrar")
let botaoLimpar = document.getElementById("limpar")

botaoCifrar.addEventListener("click", encode)
botaoDecifrar.addEventListener("click", decode)
botaoLimpar.addEventListener("click", limpar)

let mensagemDois = document.getElementById("msgCifrada")
let mensagemQuatro = document.getElementById("msgDecifrada")

function encode(){
    let deslocamentoCifrar = Number(document.getElementById("offsetCif").value)
    let mensagemUm = document.getElementById("serCifrada").value
    mensagemDois.innerHTML += cipher.encode(deslocamentoCifrar, mensagemUm)
}

function decode(){
    let deslocamentoDecifrar = Number(document.getElementById("offsetDec").value)
    let mensagemTres = document.getElementById("serDecifrada").value
    mensagemQuatro.innerHTML += cipher.decode(deslocamentoDecifrar, mensagemTres)
}

function limpar(){
    mensagemQuatro.innerHTML = ""
    mensagemDois.innerHTML = ""
}

//console.log(cipher.encode(2, "THALITA"))
//console.log(cipher.decode(2, "VJCNKVC"))
