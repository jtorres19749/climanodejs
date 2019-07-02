const axios = require('axios');


const getClima = async(lat, lng) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lat}&appid=6c622ac60f0b42a7bd34a33978a77265&units=metric`;
  //const url = `https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22`;
  
  const resp = await axios.get (url);

  return resp.data.main.temp;

}


module.exports = {
  getClima
}