const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f9579b0088c58b3afc601857e6b72655&units=metric`)



    return resp.data.main.temp;

}

module.exports = {
    getClima
}