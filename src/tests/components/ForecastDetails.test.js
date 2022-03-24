import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
        details: {
            date: 111111,
            temperature: {
                max: 11,
                min: 4,
            },
            humidity: 30,
            wind: {
                speed: 13,
                direction: "s",
            },
    },
};
    it("renders correctly", () => {
    const { asFragment } = render(
            <ForecastDetails
                details={validProps.details}
                />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});