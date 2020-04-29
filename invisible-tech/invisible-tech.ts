const apiKey = '4Zu44DNpzrt0gcGr8ldUvvVuktgDGHmy';
const defaultLocations: (string | number)[] = [
  'New York', 10005, 5000, 'Tokyo', 'São Paulo', 'Pluto'
];

const getUrlAutocompleteUrl = (cityName: string) => `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${cityName}`;
const getCurrentWeatherUrl = (locationId: number) => `https://dataservice.accuweather.com/currentconditions/v1/${locationId}?apikey=${apiKey}`;
const getCurrentWeatherByPostCode = (code: number) => `https://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${apiKey}&q=${code}`;

const getLocationIdByName = async (name: (string | number)) => {
  try {
    const urlToFetch: Function = !!+name ? getCurrentWeatherByPostCode : getUrlAutocompleteUrl;
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
})
