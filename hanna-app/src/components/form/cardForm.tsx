import React, { useState, useEffect, useCallback } from 'react';
import './form.css';

type MyProps = {
  data?: string;
  key?: string;
  index?: string;
};

export type CardFormType = {
  title: string;
  author: string;
  category: string;
  date: string;
  file: string;
  gender: string;
};

const CardForm: FC<ChildProps> = (props: MyProps): ReactElement => {
  const state = {
    ...JSON.parse(props.data),
    index: props.index,
  };
  const [classGender, setClassGender] = useState('');

  const changeClass = useCallback(() => {
    if (state.gender === 'male') {
      setClassGender('card-male');
    } else {
      setClassGender('card-female');
    }
  }, [state.gender]);

  useEffect(() => {
    changeClass();
  }, [changeClass]);

  return (
    <div className={classGender}>
      <h3 className="card-text">
        {+state.index + 1} Title: {state.title}
      </h3>
      <img className="card-image" src={state.file} alt="card-img"></img>
      <p className="card-text">Author: {state.author}</p>
      <p className="card-text">Category: {state.category}</p>
      <p className="card-text">Create at: {state.date}</p>
    </div>
  );
};

export default CardForm;
