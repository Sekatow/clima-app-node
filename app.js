const lugar = require("./lugar/lugar");
const colors = require("colors")
const clima = require("./clima/clima");
const argv = require("yargs").options({
    direccion: {
        alias: "d",
        des: "Direccion de la ciudad para obtener el clima",
        demand: true
    }
}).argv;

//argv.direccion

// lugar.getLugarLatLng(argv.direccion).then(console.log)

// clima.getClima(40.68908, -73.95861).then(console.log).catch(console.log);

const getInfo = async(direccion) => {

    direccion = argv.direccion;

    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temp}`;

    } catch (error) {

        return `No se pudo determinar el clima de ${direccion}`;

    }



}

getInfo(argv.direccion)
    .then(console.log).catch(console.log);