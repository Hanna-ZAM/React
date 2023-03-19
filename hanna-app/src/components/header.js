import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (React.createElement("header", { className: 'header' },
            React.createElement("nav", null,
                React.createElement("ul", { className: 'header-list' },
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/" }, "Main")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/about" }, "About us")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/page404" }, "404"))))));
    }
}
export default Header;
