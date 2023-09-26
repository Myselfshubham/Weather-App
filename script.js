const input = document.getElementById("location");
const btn = document.getElementById("button");
const output = document.getElementById("weather-info");
const bntCurrLoc = document.getElementById("buttonForCurrLoc");

async function getData(cityName) {
  const infoGot = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=c00433b0cccb4d8486a81118230609&q=${cityName}&aqi=no`
  );
  return await infoGot.json();
}

btn.addEventListener("click", async () => {
  const val = input.value;
  const res = await getData(val);
  console.log(res);
  const temp = res.current.temp_c;
  const windSpeed = res.current.wind_kph;
  const country = res.location.country;
  const localTime = res.location.localtime;

  const region = res.location.region;
  output.innerHTML = `
                    <p>
                        Place : ${val}
                        </p>
                    <p>
                        Region : ${region}
                        </p>
                    <p>
                        Country : ${country}
                        </p>
                    <p>
                        LocalTime : ${localTime}
                        </p> 
                    <p>    
                        Temperature : ${temp} deg. C
                        </p>
                    <p>
                        Wind Speed : ${windSpeed} kmph
                        </p>`;
  console.log(res);
});
