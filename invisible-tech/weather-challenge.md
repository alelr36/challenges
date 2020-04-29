**Given values**:
* An array consisting of city names or postal codes

**Goal**:
* Produce meaningful data regarding weather.

**Assumptions**:
* All values represent at least one valid location

**Example**:
***Input***
```javascript
const defaultLocations = [
  'New York', 10005, 5000, 'Tokyo', 'São Paulo', 'Pluto'
];
// Expected output in console
{city: "New York", weather: "Cloudy"}
{city: "New York", weather: "Cloudy"}
{city: "Cordoba", weather: "Mostly sunny"}
{city: "Tokyo", weather: "Sunny"}
{city: "São Paulo", weather: "Sunny"}
{city: "Silesia", weather: "Mostly cloudy"}
```
---
**You can TypeScript solution is in .ts file**

**You can open main.html and see browser's console. the script result will be logged there (if not, reload after opening console)**

**You can paste this IIFE (Immediately Invoked Function Expression) in browser's console and you will see results**
```javascript
(() => {
const defaultLocations = [
  'New York', 10005, 5000, 'Tokyo', 'São Paulo', 'Pluto'
];
const apiKey = '4Zu44DNpzrt0gcGr8ldUvvVuktgDGHmy';

const getUrlAutocompleteUrl = cityName => `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${cityName}`;
const getCurrentWeatherUrl = locationId => `http://dataservice.accuweather.com/currentconditions/v1/${locationId}?apikey=${apiKey}`;
const getCurrentWeatherByPostCode = code => `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${apiKey}&q=${code}`;

const getLocationIdByName = async (name) => {
  try {
    const urlToFetch = !!+name ? getCurrentWeatherByPostCode : getUrlAutocompleteUrl;
    const locationsResponse = await fetch(urlToFetch(name));
    const locations = await locationsResponse.json();
    const weatherResponse = await fetch(getCurrentWeatherUrl(locations[0].Key));
    const weather = await weatherResponse.json();
    return {
      city: locations[0].AdministrativeArea.LocalizedName,
      weather: weather[0].WeatherText,
    };
  } catch (error) {
    throw error;
  }
};

const getWeather = async (names = defaultLocations) => {
  try {
    return Promise.all(names.map(name => getLocationIdByName(name)));
  } catch(error) {
    throw error;
  }
};

getWeather().then(data => {
  console.log('Default locations array', defaultLocations);
  data.forEach(item => {
    console.log(item)
  });
})})()
```
