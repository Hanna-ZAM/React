import React, { useState, useEffect } from 'react';
import './cardList.css';
import Modal from './modal';
import axios from 'axios';

type MyProps = {
  data?: string;
  key?: string;
  index?: string;
};

const Card: FC<ChildProps> = (props: MyProps): ReactElement => {
  const secret = props.data.secret;
  const cardId = props.data.id;
  const server = props.data.server;
  const farm = props.data.farm;

  const [state, setState] = useState('');
  const [modal, setModal] = useState(false);

  const getState = async () => {
    const url =
      'https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=fd018fb8b522dc83b621f765fd3951a3&photo_id=' +
      cardId +
      '&secret=' +
      secret +
      '&format=json&nojsoncallback=1';
    const resp = (await axios.get(url)).data.photo;
    const result =
      'https://farm' + farm + '.staticflickr.com/' + server + '/' + cardId + '_' + secret + '.jpg';
    setState({
      title: resp.title._content,
      author: resp.owner.realname ? resp.owner.realname : resp.owner.username,
      image: result,
      views: resp.views,
      description: resp.description._content ? resp.description._content : 'no description',
      date: resp.dates.taken,
    });
  };

  useEffect(() => {
    getState();
  }, []);

  const check = (e: React.SyntheticEvent<EventTarget>) => {
    (e.target as HTMLImageElement).src = state.checked
      ? './assets/img/star-svgrepo-com.svg'
      : './assets/img/fullStar-svgrepo-com.svg';
    setState((state) => ({ ...state, checked: !state.checked }));
  };
  const getDescription = () => {
    setModal(true);
  };
  return (
    <>
      {
        <div className="card">
          <img className="card-img" src={state.image}></img>
          <h3 className="card-text">{state.title}</h3>
          <p className="card-text">Author: {state.author}</p>
          <span className="card-line"></span>
          <div className="card-likes">
            <span className="view-container">
              <img
                className="card-svg"
                src="./assets/img/view-svgrepo-com.svg"
                alt="views-img"
              ></img>
              <p className="card-likes-count">{state.views}</p>
              <img
                className="card-svg"
                src="./assets/img/star-svgrepo-com.svg"
                alt="cheked-img"
                onClick={check}
              ></img>
            </span>
            <button className="small-button" onClick={getDescription}>
              More...
            </button>
          </div>
        </div>
      }
      <Modal data={{ ...state }} visible={modal} setVisible={setModal} />
    </>
  );
};

export default Card;
