const {readFileSync, writeFileSync} = require("fs")

//                                      Nao esquecer da barra
const arquivoLido = readFileSync(__dirname + "/textoCriado.txt", "utf-8")
console.log(arquivoLido)
//opcoes é um objeto de configuração 
//flag =  "a" de opcoes indica q se o arquivo ja existe ele ira concatenar o novo conteúdo com o existente 
writeFileSync(__dirname + "/textoSincrono.txt", "Meus dados", {flag: "a"}) 