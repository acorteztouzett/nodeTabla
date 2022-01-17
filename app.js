const argv=require('./config/yargs')
const {createTable}= require(`./helpers/multiplicar`)


console.clear()



//const base=7

createTable(argv.b,argv.l,argv.h)
     .then(nombreArchivo=>console.log(nombreArchivo,"con exito"))
     .catch(err=>console.log(err))