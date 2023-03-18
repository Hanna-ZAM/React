import React from "react";

const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

class SearchBar extends React.Component{
  render(){
    return (
      <input 
       style={BarStyle}
       key="search-bar"
       placeholder={"enter word for search"}
      />
    );
  }
}



export default SearchBar