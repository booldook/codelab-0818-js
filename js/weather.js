const apiKey = "d965b9b0eacc39a576dc0027920741f8";
const reqUrl = "https://api.openweathermap.org/data/2.5/weather";

function getCoords() {
  return new Promise((resolve) => {
    let defaultLat = 37.566535;
    let defaultLon = 126.9779692;
    navigator.geolocation.getCurrentPosition(
      (res) => {
        resolve({
          lat: res?.coords?.latitude ?? defaultLat,
          lon: res?.coords?.longitude ?? defaultLon,
        });
      },
      (err) => {
        console.log(err);
        resolve({ lat: defaultLat, lon: defaultLon });
      }
    );
  });
}
async function getWeather(lat, lon) {
  // const req = `${reqUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  // const { data } = await axios.get(req);
  const params = { lat, lon, appid: apiKey, units: "metric" };
  const { data } = await axios.get(reqUrl, { params });
  return data;
}

async function init() {
  const { lat, lon } = await getCoords();
  const weather = await getWeather(lat, lon);
  console.log(weather);
}

// function init2() {
//   getCoords().then(async ({ lat, lon }) => {
//     console.log(await getWeather(lat, lon));
//   });
// }

window.addEventListener("load", init);
console.log("hello");

// QueryString(params)
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
