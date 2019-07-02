const axios =require ('axios');



const getLugarLatLng = async (direccion) => {

  const encodeUrl = encodeURI(direccion);
    
  const instance = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location='+encodeUrl,
    timeout: 1000,
    headers: {'X-RapidAPI-Key': 'a9d3ab518fmsh7cb1fd0604f2cdap199765jsnab2ca123783a'}
  });

  const resp= await instance.get();

  if (resp.data.Results.length ===0) {
    throw new Error (`No hay resultados para ${direccion}`);
  }

  const data = resp.data.Results[0];
  const direcc =data.name;
  const lat = data.lat;
  const lng =data.lon;

  return {
    direccion : direcc,
    lat,
    lng
  }

}

module.exports = {
  getLugarLatLng
};

