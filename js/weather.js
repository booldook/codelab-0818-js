const apiKey = "d965b9b0eacc39a576dc0027920741f8";
const reqUrl = "https://api.openweathermap.org/data/2.5/weather";
const locations = [
  { name: "서울", latitude: 37.566535, longitude: 126.977969 },
  { name: "부산", latitude: 35.179554, longitude: 129.075642 },
  { name: "제주", latitude: 33.489011, longitude: 126.498302 },
  { name: "원주", latitude: 37.342219, longitude: 127.919135 },
  { name: "대구", latitude: 35.871435, longitude: 128.601445 },
  { name: "세종", latitude: 36.480132, longitude: 127.289021 },
  { name: "광주", latitude: 35.159545, longitude: 126.852601 },
  { name: "독도", latitude: 37.241411, longitude: 131.870155 },
  { name: "속초", latitude: 38.204543, longitude: 128.591835 },
];

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
