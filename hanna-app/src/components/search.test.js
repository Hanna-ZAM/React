import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "./search";
import "@testing-library/jest-dom/extend-expect";


describe("search", () => {
  it("renders App component", () => {
    render(<Search />);
    expect(screen.getByPlaceholderText('enter word for search')).toBeInTheDocument();
    expect(screen.getByAltText('search-img')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
});
