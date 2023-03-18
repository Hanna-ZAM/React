import React from "react";
import SearchBar from "../components/search";

export  class Main extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h2>Main</h2>
        <SearchBar/>
      </>
    )
  }
}