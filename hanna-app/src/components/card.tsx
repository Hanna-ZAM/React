import React, { useState } from 'react';
import './cardList.css';
import Modal from './modal';
import { cardAPI } from '../store/services/serviseCards';

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

  const [modal, setModal] = useState(false);

  const { data, isLoading } = cardAPI.useFetchCardInfoQuery(cardId, secret);
  const result =
    'https://farm' + farm + '.staticflickr.com/' + server + '/' + cardId + '_' + secret + '.jpg';

  return (
    <div>
      {!isLoading && (
        <div className="card">
          <img className="card-img" src={result}></img>
          <h3 className="card-text">{data.photo.title?._content}</h3>
          <p className="card-text">Author: {data.photo.owner.realname}</p>
          <button className="card-likes small-button" onClick={() => setModal(true)}>
            More...
          </button>
        </div>
      )}
      {!isLoading && (
        <Modal
          data={{
            title: data.photo.title ? data.photo.title._content : 'no title',
            author: data.photo.owner.realname
              ? data.photo.owner.realname
              : data.photo.owner.username,
            image: result,
            views: data.photo.views,
            date: data.photo.dates.taken,
            link: data.photo.urls.url[0]._content,
            description: data.photo.description._content
              ? data.photo.description._content
              : 'no description',
          }}
          visible={modal}
          setVisible={setModal}
        />
      )}
    </div>
  );
};

export default Card;
