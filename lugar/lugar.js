const axios = require("axios");



module.exports.getLugarLatLng = async(dir) => {


    const encodeulr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/Hauptstr.,+57632+${encodeulr}?json=1`,
        headers: { 'auth': '721852914766644981832x6828' }
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;




    return {
        direccion,
        lat,
        lng
    }

}