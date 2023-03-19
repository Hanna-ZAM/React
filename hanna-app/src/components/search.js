import React from "react";
const BarStyle = { width: "20rem", background: "#F0F0F0", border: "none", padding: "0.5rem" };
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { searchValue: window.localStorage.getItem('searchValue') ? window.localStorage.getItem('searchValue') : '' };
    }
    render() {
        return (React.createElement("div", { style: { width: "22rem",
                background: "#F0F0F0",
                border: "1px",
                margin: "auto",
                display: "flex" } },
            React.createElement("img", { src: "../src/assets/search-svgrepo-com.svg", alt: "search-img" }),
            React.createElement("input", { style: BarStyle, value: this.state.searchValue, key: "search-bar", placeholder: "enter word for search", onChange: this.handleChange })));
    }
    handleChange(e) {
        this.setState(state => ({
            searchValue: e.target.value
        }));
    }
    componentDidUpdate() {
        window.localStorage.setItem('searchValue', this.state.searchValue);
    }
}
export default SearchBar;
