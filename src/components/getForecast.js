import axios from "axios";
/* eslint-disable no-console */

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage(
          "No such town or city. Click the refresh button and try again!"
        );
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Oops! Server error, try again later!");
        console.error("Server error", error);
      }
    });
};

export default getForecast;
