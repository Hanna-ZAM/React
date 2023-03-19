import React from "react";
import { Main } from '../pages/mainPage';
import { About } from '../pages/aboutPage';
import { Page404 } from '../pages/404Page';
import { Routes, Route, } from 'react-router-dom';
class Page extends React.Component {
    render() {
        return (React.createElement("main", null,
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Main, null) }),
                React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
                React.createElement(Route, { path: "*", element: React.createElement(Page404, null) }))));
    }
}
export default Page;
