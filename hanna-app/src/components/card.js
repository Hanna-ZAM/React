import React from "react";
import './cardList.css';
import productsList from "../product";
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = window.localStorage.getItem(`card${this.props.index}`) ?
            JSON.parse(window.localStorage.getItem(`card${this.props.index}`)) :
            { ...productsList.products[+this.props.index] };
    }
    render() {
        return (React.createElement("div", { className: "card" },
            React.createElement("img", { className: "card-img", src: this.state.image }),
            React.createElement("h3", { className: "card-text" }, this.state.title),
            React.createElement("p", { className: "card-text" }, this.state.author),
            React.createElement("span", { className: "card-line" }),
            React.createElement("p", { className: "card-text" }, this.state.category),
            React.createElement("div", { className: "card-likes" },
                React.createElement("img", { className: "card-svg", src: "../src/assets/like-svgrepo-com.svg", alt: "likes-img", onClick: this.like.bind(this) }),
                React.createElement("p", { className: "card-likes-count" }, this.state.likes),
                React.createElement("img", { className: "card-svg", src: "../src/assets/view-svgrepo-com.svg", alt: "views-img" }),
                React.createElement("p", { className: "card-likes-count" }, this.state.views),
                React.createElement("img", { className: "card-svg", src: "../src/assets/star-svgrepo-com.svg", alt: "cheked-img", onClick: this.check.bind(this) }))));
    }
    check(e) {
        e.target.src = this.state.checked ? "../src/assets/star-svgrepo-com.svg" : "../src/assets/fullStar-svgrepo-com.svg";
        this.setState(state => ({
            checked: (!state.checked)
        }));
    }
    like(e) {
        if (this.state.likes === productsList.products[+this.props.index].likes) {
            e.target.src = "../src/assets/fullLike-svgrepo-com.svg";
            this.setState(state => ({
                likes: this.state.likes + 1
            }));
        }
        else {
            e.target.src = "../src/assets/like-svgrepo-com.svg";
            this.setState(state => ({
                likes: this.state.likes - 1
            }));
        }
    }
    componentDidUpdate() {
        window.localStorage.setItem(`card${this.props.index}`, JSON.stringify(this.state));
    }
}
export default Card;
