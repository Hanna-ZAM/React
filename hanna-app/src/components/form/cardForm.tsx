import React, { useState, useEffect, useMemo } from 'react';
import './form.css';

type MyProps = {
  data?: string;
  key?: string;
  index?: string;
};
/*type MyState = {
  index?: number;
};*/

const CardForm: FC<ChildProps> = (props: MyProps): ReactElement => {
  const state = {
    ...JSON.parse(props.data),
    index: props.index,
  };
  const [classGender, setClassGender] = useState('');

  const gender = useMemo(() => {
    state.gender;
    return state.gender;
  }, []);
  useEffect(() => {
    if (gender === 'male') {
      setClassGender('card-male');
    } else {
      setClassGender('card-female');
    }
  }, [gender]);
  
 
  return (
    <div className={classGender}>
      <h3 className="card-text">
        {+state.index + 1} Title: {state.title}
      </h3>
      <p className="card-text">File: {state.file}</p>
      <p className="card-text">Author: {state.author}</p>
      <p className="card-text">Category: {state.category}</p>
      <p className="card-text">Create at: {state.date}</p>
    </div>
  );
};

export default CardForm;
