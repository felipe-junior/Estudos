const fs = require("fs")

const {readFile, writeFile} = require("fs")
const meuTexto = "Texto criado no node"
//As funções writeFile e readFile são ambas assíncronas, ou seja, o programa cria as threads e vai para a proxima linha mesmo se a operçãoo nao estiver sido concluida. Isso eh bom pois o programa não fica travado esperando a resposta, principalmente de uma operação bloqueante como a E/S

//__dirname -> caminho relativo deste arquivo
//diretorio, dado a ser escrito, callback de err
writeFile(__dirname + "/textoCriado.txt", meuTexto, err => {if(err)console.log(err)} )
//Diretorio, tipo de codificação, callback com o erro e o valor lido
fs.readFile(__dirname + "/texto.txt",'utf-8' ,(err,value) =>{
    console.log(value)
}) 