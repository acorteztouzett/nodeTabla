const argv=require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                demandOption:true
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                default:true
            })
            .check((argv,options)=>{
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser numero'
                }
                return true
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                default: 10
            })
            .argv

module.exports=argv