const fs = require('fs')


const stream = fs.createReadStream(__dirname + '/texto.txt', {encoding: 'utf8', highWaterMark: 2})

//Padrão 64 kb
// Último buffer - restante (remainder)
//highWaterMark - tamanho de cada stream em KB
//
stream.on('data', (valor)=>console.log(valor+ "->"))