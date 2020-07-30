const axios = require("axios");


module.exports.getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f6b83657231b69d4c4d72faea59e8c23&units=metric`)


    return resp.data.main.temp;

}