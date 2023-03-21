import React from "react";
import { render, screen } from "@testing-library/react";
import cardList from "./cardList";
import "@testing-library/jest-dom/extend-expect";
import CardList from "./cardList";
import productsList from "../product";


describe("cardList", () => {
  it("renders Card component", () => {
    render(<CardList data={JSON.stringify(productsList.products)} />);
    /*expect(screen.getByText(/lady/i)).toBeInTheDocument();
    expect(screen.getByAltText('views-img')).toBeInTheDocument();
    expect(screen.getByRole('heading', {level: 3})).toBeInTheDocument();*/
  });
});
