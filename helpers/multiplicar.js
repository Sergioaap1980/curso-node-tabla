const fs = require('fs');
const crearArchivo = async(base = 5, listado = false, hasta = 10) =>{
const colors = require('colors');


    try {



        
        // num = 5;
        //     for (var i = 1; i <= 10; i++) {
        //         multi = num * i;
        //         console.log(num + " x " + i + " = " + multi)
        //     }    
     
        let salida = '';
        let consola  = '';
        // let x = 'x'.red;
        // let igual = '='.yellow;
    
        
        
        for(let i = 1; i <= hasta; i++){
            // console.log (`${ base } x ${i} = ${base * i }`);
           
            salida += `${ base } x ${i} = ${base * i}\n`;
            consola += `${ base } ${'x'.green} ${i} ${'='.red} ${base * i}\n`;
        }
        
        if (listado){
            console.log('====================='.green);
            console.log('   Tabla del'.green, colors.blue(base));
            console.log('====================='.green);
            console.log(consola);
        }        
        
        
        
        ///// sin write file asincrona
        // fs.writeFile(`tabla- ${ base }.txt`, salida, (err)=> {
        //     if (err) throw err;
        //     console.log('tabla-${ base }.txt');
        // });
        
        
        ///// con write file asincrona
        fs.writeFileSync (`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;     
    } catch (err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}