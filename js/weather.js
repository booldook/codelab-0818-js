const apiKey = "d965b9b0eacc39a576dc0027920741f8";
const reqUrl = "https://api.openweathermap.org/data/2.5/weather";
const iconUrl = "https://openweathermap.org/img/wn/10d@2x.png";
const weathers = {
  myData: {},
  allData: [
    { city: "서울", lat: 37.566535, lon: 126.977969, weather: {} },
    { city: "부산", lat: 35.179554, lon: 129.075642, weather: {} },
    { city: "제주", lat: 33.489011, lon: 126.498302, weather: {} },
    { city: "원주", lat: 37.342219, lon: 127.919135, weather: {} },
    { city: "대구", lat: 35.871435, lon: 128.601445, weather: {} },
    { city: "세종", lat: 36.480132, lon: 127.289021, weather: {} },
    { city: "광주", lat: 35.159545, lon: 126.852601, weather: {} },
    { city: "독도", lat: 37.241411, lon: 131.870155, weather: {} },
    { city: "속초", lat: 38.204543, lon: 128.591835, weather: {} },
  ],
};
function getIcon(code, lg = false) {
  return code
    ? `https://openweathermap.org/img/wn/${code}${lg ? "@2x" : ""}.png`
    : "-";
}

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

function renderInfo() {
  const temp = weathers.myData?.main?.temp || "-";
  const max = weathers.myData?.main?.temp_max || "-";
  const min = weathers.myData?.main?.temp_min || "-";
  const humidity = weathers.myData?.main?.humidity || "-";
  const description = weathers.myData?.weather?.[0]?.description || "-";
  const icon = getIcon(weathers.myData?.weather?.[0]?.icon, true);
  const info = document.querySelector(".info-wrapper");
  info.querySelector(".main-temp").innerText = temp;
  info.querySelector(".max-temp").innerText = max;
  info.querySelector(".min-temp").innerText = min;
  info.querySelector(".humedity").innerText = humidity;
  info.querySelector(".description").innerText = description;
  info.querySelector(".weather-icon").src = icon;
}

async function init() {
  const { lat, lon } = await getCoords(); // 나의 위치
  weathers.myData = await getWeather(lat, lon);
  renderInfo();

  weathers.allData.forEach(async (item) => {
    item.weather = await getWeather(item.lat, item.lon);
  });
  console.log(weathers);
}

window.addEventListener("load", init);

// ******* 설명 *******
// QueryString(params)
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// function init2() {
//   getCoords().then(async ({ lat, lon }) => {
//     console.log(await getWeather(lat, lon));
//   });
// }

// window.addEventListener("load", init);
