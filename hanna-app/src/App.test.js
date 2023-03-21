import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";


describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    expect(screen.getByText(/Bridge/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('enter word for search')).toBeInTheDocument();
    expect(screen.getByAltText('search-img')).toBeInTheDocument();
    expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
});
