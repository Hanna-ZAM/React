import React from 'react';
import './cardList.css';

const Modal: FC<ChildProps> = ({ data, visible, setVisible }): ReactElement => {
  let classRoot = 'modal-background';
  if (visible) {
    classRoot = ['modal-background', 'modal-active'].join(' ');
  } else {
    classRoot = 'modal-background';
  }

  return (
    <div className={classRoot} onClick={() => setVisible(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {
          <div className="card modal-content">
            <img
              className="modal-cross"
              src="./assets/img/cross.svg"
              alt="cross"
              onClick={() => setVisible(false)}
            ></img>
            <img className="card-img" src={data.image}></img>
            <h3 className="card-text modal-text">{data.title}</h3>
            <p className="card-text modal-text">Author: {'  ' + data.author}</p>
            <span className="card-line"></span>
            <p className="card-text modal-text">Description: {'  ' + data.description}</p>
            <a className="card-text modal-text" href={data.link}>
              {data.link}
            </a>
            <br />
            <div className="card-likes">
              <span className="view-container">
                <img
                  className="card-svg"
                  src="./assets/img/view-svgrepo-com.svg"
                  alt="views-img"
                ></img>
                <p className="card-likes-count">{'  ' + data.views}</p>
              </span>
              <p className="card-text modal-text">Created: {'  ' + data.date}</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Modal;
