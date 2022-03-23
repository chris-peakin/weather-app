import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

function ForecastDetails({ details }) {
  const { date, temperature, humidity, wind } = details;
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__temperaturemax">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__temperaturemin">
        {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__humidity">{humidity}</div>
      <div className="forecast-details__windspeed">{wind.speed}</div>
      <div className="forecast-details__winddirection">{wind.direction}</div>
    </div>
  );
}

ForecastDetails.propTypes = {
  details: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
