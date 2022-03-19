import React from "react";
import {render} from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
    const validProps = [
        {
            date: 1111111,
            description: "Stub Description 1",
            icon: "Stub Icon 1",
            temperature: {
                max: 22,
                min: 12,
            },
        },
        {
            date: 2222222,
            description: "Stub Description 2",
            icon: "Stub Icon 2",
            temperature: {
                max: 26,
                min: 20,
            },
        },
    ];

    it("renders correctly", () => {
        const {asFragment} = render(<ForecastSummaries forecasts={validProps} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the correct number of ForecastSummary instances", () => {
        const {getAllByTestId} = render(
            <ForecastSummaries forecasts={validProps} />
        );

        expect(getAllByTestId("forecast-summary")).toHaveLength(2);
    });
});