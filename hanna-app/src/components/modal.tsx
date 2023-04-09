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
            <h3 className="card-text">{data.title}</h3>
            <p className="card-text">Author: {'  ' + data.author}</p>
            <span className="card-line"></span>
            <p className="card-text">Description: {'  ' + data.description}</p>
            <p className="card-text">Created: {'  ' + data.date}</p>
            <br />
            <div className="card-likes">
              <span className="view-container">
                <img
                  className="card-svg"
                  src="./assets/img/view-svgrepo-com.svg"
                  alt="views-img"
                ></img>
                <p className="card-likes-count">{'  ' + data.views}</p>
                <img
                  className="card-svg"
                  src="./assets/img/star-svgrepo-com.svg"
                  alt="cheked-img"
                ></img>
              </span>
              <button className="small-button" disabled>
                More...
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Modal;
