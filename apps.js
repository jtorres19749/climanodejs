const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv=  require('yargs').options({
  direccion: { 
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

//geolocalizacion a partir de una ciudad
//https://rapidapi.com/dev132/api/city-geo-location-lookup
//para realizar request usar el paquete request (callbacks) y/o el Axios (promesas)
//console.log(argv.direccion);
//?location=Monterrey+Mexico
//https://openweathermap.org 



lugar.getLugarLatLng(argv.direccion)
  .then ( resp=> {
    console.log(` ${resp.direccion} tiene la latitud: ${resp.lat} , longuitud: ${resp.lng}`);
    clima.getClima(resp.lat, resp.lng)
      .then ( resp=>{ 
          console.log (`la temperatura es de : ${resp} oC`)
      })
      .catch ( err=>{
          console.log ('error al obtener la temperatura ' + err)
      });

  })
  .catch(err=>{
    console.log("Error!!! ",err)
  });



