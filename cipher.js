const cipher = {
    encode: function criptografar(offset, string) {

        //Condição de teste erro - caso usuário digite elemento não aceito
        if(typeof offset != "number"){
            throw new TypeError("o tipo da variável offset deve ser um número")
        }
        if(typeof string != "string"){
            throw new TypeError("o tipo da variável string deve ser uma string")
        }

        let msgCodificada = "";

        for(let i = 0; i < string.length; i++) {
            let caractereCifrado = string.charCodeAt(i);
        if(caractereCifrado >= 65 && caractereCifrado <= 90){
           caractereCifrado = ((caractereCifrado - 65 + offset) % 26 + 65);
        } else if(caractereCifrado >= 97 && caractereCifrado <= 122) {
           caractereCifrado = ((caractereCifrado - 97 + offset) % 26 + 97);
        } else {
            caractereCifrado 
            
        }
        msgCodificada += String.fromCharCode(caractereCifrado);  
        }
    return msgCodificada;
    },


    decode: function descriptografar(offset, string){

        //Condição de teste erro - caso usuário digite elemento não aceito
        if(typeof offset != "number"){
            throw new TypeError("o tipo da variável offset deve ser um número")
        }
        if(typeof string != "string"){
            throw new TypeError("o tipo da variável string deve ser uma string")
        }

        let msgDesco = "";

        for(let i = 0; i < string.length; i++) {
            let caractereDescifrado = string.charCodeAt(i);
        if(caractereDescifrado >= 65 && caractereDescifrado <= 90) {
           caractereDescifrado = ((caractereDescifrado - 90 - offset) % 26 + 90);
        } else if (caractereDescifrado >= 97 && caractereDescifrado <= 122) {
           caractereDescifrado = ((caractereDescifrado - 122 - offset) % 26 + 122)
        } else {
            caractereDescifrado 
        }
        msgDesco += String.fromCharCode(caractereDescifrado);
        }
    return msgDesco;
    },
    
};
  
export default cipher;








