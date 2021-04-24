const path = require('path')

console.log(path.sep) // Separador padrão de arquivos do sistema operacional
const filePath = path.join('/pasta/', 'subpasta', 'text.txt')

console.log(filePath);

const base = path.basename(filePath)
console.log(base)
const absolute = path.resolve(__dirname, 'pasta', "subpasta", 'text.txt')
console.log("->" + absolute);
