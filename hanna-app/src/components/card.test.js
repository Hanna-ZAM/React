import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import Card from "./card";
import "@testing-library/jest-dom/extend-expect";


describe("card", () => {
  it("renders Card component", () => {
    render(<Card key='card1' index='0'/>);
    expect(screen.getByText(/lady/i)).toBeInTheDocument();
    expect(screen.getByAltText('views-img')).toBeInTheDocument();
    expect(screen.getByAltText('likes-img')).toBeInTheDocument();
    /*expect(screen.getByText(/549/i)).toBeInTheDocument();*/
    expect(screen.getByRole('heading', {level: 3})).toBeInTheDocument();
  });

  it ('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<img
      className="card-svg"
      src="./assets/like-svgrepo-com.svg"
      alt="likes-img"
      onClick={handleClick}
    ></img>)
    fireEvent.click((screen.getByAltText('likes-img')))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
});

