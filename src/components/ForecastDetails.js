import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

function ForecastDetails({ details }) {
  const { forecast } = details;
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        {moment(forecast.date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__temperaturemax">
        {forecast.temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__temperaturemin">
        {forecast.temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__humidity">{forecast.humidity}</div>
      <div className="forecast-details__windspeed">{forecast.wind.speed}</div>
      <div className="forecast-details__winddirection">
        {forecast.wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  details: PropTypes.objectOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};

export default ForecastDetails;
