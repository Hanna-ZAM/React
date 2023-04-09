import React, { useState, useEffect, useCallback } from 'react';
import './cardList.css';
import Modal from './modal';
import axios from 'axios';

type MyProps = {
  data?: {
    secret: string;
    id: string;
    server: string;
  };
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

  const getState = useCallback(async () => {
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
      title: resp.title ? resp.title._content : 'no title',
      author: resp.owner.realname ? resp.owner.realname : resp.owner.username,
      image: result,
      views: resp.views,
      description: resp.description._content ? resp.description._content : 'no description',
      date: resp.dates.taken,
      link: resp.urls.url[0]._content,
    });
  }, [cardId, farm, secret, server]);

  useEffect(() => {
    getState();
  }, [getState]);

  return (
    <>
      {
        <div className="card">
          <img className="card-img" src={state.image}></img>
          <h3 className="card-text">{state.title}</h3>
          <p className="card-text">Author: {state.author}</p>
          <button className="card-likes small-button" onClick={() => setModal(true)}>
            More...
          </button>
        </div>
      }
      <Modal data={{ ...state }} visible={modal} setVisible={setModal} />
    </>
  );
};

export default Card;
