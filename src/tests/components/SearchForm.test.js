import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";
import handleCitySearch from "../../components/App";
import setSearchText from "../../components/App";

describe("SearchForm", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        onSubmit={handleCitySearch}
        searchText="Durham"
        setSearchText={setSearchText}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Button says the word Search", () => {
    const { getByText } = render(
      <SearchForm
        onSubmit={handleCitySearch}
        searchText="Durham"
        setSearchText={setSearchText}
      />
    );

    expect(getByText("Search")).toBeInTheDocument;
  });
});
