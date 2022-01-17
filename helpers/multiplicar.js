const fs= require("fs")

const createTable= async(base=1,listar=true,hasta=10)=>{
    try{
        let salida=""

        for(let i=1;i<=hasta;i++){
            salida +=`${base} x ${i} = ${base*i}\n`
        }
        if(listar){
            console.log(`Tabla del: ${base} hasta el ${hasta}`)
            console.log(salida)
        }
        

        fs.writeFileSync(`./salida/tabla${base}.txt`,salida)

        return `tabla${base}.txt creada`
    }
    catch(err){

    }
}

module.exports={
    createTable
}