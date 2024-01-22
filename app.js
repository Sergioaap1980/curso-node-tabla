
const {crearArchivo} = require('./helpers/multiplicar');

const argv = require('./config/yargs');

const colors = require('colors');

console.clear(); //limpia la consola


//console.log(process.argv);
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');

//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs', argv.b)
//const base = 5;

crearArchivo(argv.base, argv.listado, argv.hasta)
    .then (nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch (err => console.log(err));
