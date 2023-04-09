import React, { useState, useEffect } from 'react';
import './cardList.css';
import productsList from '../product';
import axios from 'axios';

type MyProps = {
  data?: string;
  key?: string;
  index?: string;
};

const Card: FC<ChildProps> = (props: MyProps): ReactElement => {
  const secret= props.data.secret;
  const cardId= props.data.id;
  const server=props.data.server;
  const farm = props.data.farm;

  const [state, setState] = useState('');

  const getState=async()=>{
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=fd018fb8b522dc83b621f765fd3951a3&photo_id='+cardId+'&secret='+secret+'&format=json&nojsoncallback=1'
    const resp= (await axios.get(url)).data.photo
    const result = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + cardId + '_' + secret + '.jpg'
    setState({
      title: resp.title._content,
      author: resp.owner.realname?resp.owner.realname:resp.owner.username,
      image: result,
      views: resp.views,
      description: resp.description._content?resp.description._content:'no description',
    })
    console.log(state)
  }


  /*const authorBase= ()=>{
    var ownerId = state.owner;
    
    const result = 'https://www.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=fd018fb8b522dc83b621f765fd3951a3&user_id='+ ownerId+'&format=json&nojsoncallback=1'
    return result
  }
  async function getA(){
    var ownerId = state.owner;
    
    const result = 'https://www.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=fd018fb8b522dc83b621f765fd3951a3&user_id='+ ownerId+'&format=json&nojsoncallback=1'
 
    const resp= await axios.get(result)
   /* setCards(resp.data.photos.photo)*/
 /*  setAuthor(resp.data.person.realname?resp.data.person.realname._content:'unknoun') 
   console.log(author)
  }*/
  useEffect( () => {
   getState()
  }, []);


  const check = (e: React.SyntheticEvent<EventTarget>) => {
    (e.target as HTMLImageElement).src = state.checked
      ? './assets/img/star-svgrepo-com.svg'
      : './assets/img/fullStar-svgrepo-com.svg';
    setState((state) => ({ ...state, checked: !state.checked }));
  };
  const getDescription = (e: React.SyntheticEvent<EventTarget>) => {
    console.log(state.description)
  };
  return (
    <>
     {<div className="card">
      <img className="card-img" src={state.image}></img>
      <h3 className="card-text">{state.title}</h3>
      <p className="card-text">Author: {state.author}</p>
      <span className="card-line"></span>
      <p className="card-text">{state.farm}</p>
      <div className="card-likes">
        <img
          className="card-svg"
          src="./assets/img/like-svgrepo-com.svg"
          alt="likes-img"
          onClick={getDescription}
        ></img>
        <p className="card-likes-count">{state.farm}</p>
        <img className="card-svg" src="./assets/img/view-svgrepo-com.svg" alt="views-img"></img>
        <p className="card-likes-count">{state.views}</p>
        <img
          className="card-svg"
          src="./assets/img/star-svgrepo-com.svg"
          alt="cheked-img"
          onClick={check}
        ></img>
      </div>
    </div>}
    </>
  );
};
/* componentDidUpdate() {
    window.localStorage.setItem(`card${this.props.index}`, JSON.stringify(this.state));
  }*/

export default Card;
