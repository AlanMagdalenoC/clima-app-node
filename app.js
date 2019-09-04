const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const info = require('./')
const argv = require('./config/yargs').argv;


/* lugar.getLugarLatlng(argv.direccion)
    .then(console.log); */


/* clima.getClima(20.6736, -103.344)
    .then(console.log)
    .catch(console.log); */



const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatlng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `el clima de ${coords.direccion} es de ${temp}`;

    } catch (e) {
        return `No se pudo obtener el clima de ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);