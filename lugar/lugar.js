const axios = require('axios');


const getLugarLatlng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'a632554d65msh35a438979f64b41p1bfbe1jsn4da45849de5f' }
    });


    const resp = await instance.get();
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    if (data.length === 0) {
        throw new Error(`No hay resultados para ${dir} `);
    }




    return {
        direccion,
        lat,
        lng
    }


}

module.exports = {
    getLugarLatlng,
}