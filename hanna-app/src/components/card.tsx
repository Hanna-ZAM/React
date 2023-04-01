import React, { useState } from 'react';
import './cardList.css';
import productsList from '../product';

type MyProps = {
  data?: string;
  key?: string;
  index?: string;
};
type MyState = {
  id: string;
  title: string;
  author: string;
  likes: number;
  views: number;
  checked: boolean;
  category: string;
  image: string;
};

const Card:FC<ChildProps>=(props: MyProps):ReactElement => {
  const [state, getState] =useState(window.localStorage.getItem(`card${props.index}`)
      ? JSON.parse(window.localStorage.getItem(`card${props.index}`) as string)
      : { ...productsList.products[+(props.index as string)] }
  )
  useEffect(() => {
  window.localStorage.setItem(`card${props.index}`, JSON.stringify(state));
  })

  const check=(e: React.SyntheticEvent<EventTarget>)=> {
    (e.target as HTMLImageElement).src = state.checked
      ? './assets/img/star-svgrepo-com.svg'
      : './assets/img/fullStar-svgrepo-com.svg';
    setState((state) => ({
      checked: !state.checked,
    }));
  }
  const like=(e: React.SyntheticEvent<EventTarget>) =>{
    if (state.likes === productsList.products[+(props.index as string)].likes) {
      (e.target as HTMLImageElement).src = './assets/img/fullLike-svgrepo-com.svg';
      setState(() => ({
        likes: state.likes + 1,
      }));
    } else {
      (e.target as HTMLImageElement).src = './assets/img/like-svgrepo-com.svg';
      setState(() => ({
        likes: state.likes - 1,
      }));
    }
  }
    return (
      <div className="card">
        <img className="card-img" src={state.image}></img>
        <h3 className="card-text">{state.title}</h3>
        <p className="card-text">{state.author}</p>
        <span className="card-line"></span>
        <p className="card-text">{state.category}</p>
        <div className="card-likes">
          <img
            className="card-svg"
            src="./assets/like-svgrepo-com.svg"
            alt="likes-img"
            onClick={like}
          ></img>
          <p className="card-likes-count">{state.likes}</p>
          <img className="card-svg" src="./assets/img/view-svgrepo-com.svg" alt="views-img"></img>
          <p className="card-likes-count">{state.views}</p>
          <img
            className="card-svg"
            src="./assets/img/star-svgrepo-com.svg"
            alt="cheked-img"
            onClick={check}
          ></img>
        </div>
      </div>
    );
  }
 /* componentDidUpdate() {
    window.localStorage.setItem(`card${this.props.index}`, JSON.stringify(this.state));
  }*/


export default Card;
