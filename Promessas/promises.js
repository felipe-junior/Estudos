const {readFile, writeFile} = require('fs').promises // configura ambos para trabalhar com promises
/*const { readFileSync } = require('node:fs')
const util = require('util')
const readFileAsync = util.promisify(readFileSync) Opcional
*/

/*new Promise((resolve, reject) =>{
    function x(){

    }
    resolve(1)
})*/

readFile(__dirname + "/a.txt", "utf8").then(value =>console.log(value)).catch(e=>console.log(e))
writeFile(__dirname + "/a.txt", "Meu dado", {encoding: "utf8", flag: "a"})