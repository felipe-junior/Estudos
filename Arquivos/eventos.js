const Event = require('events')

const meuEvento = new Event()

function procedimento(){
    console.log("Procedimento realizado")
}
meuEvento.on("Id - 01", procedimento)

meuEvento.emit('Id - 01')