import React, { useRef, useState } from 'react';
import './form.css';
import { validation, CardType } from './function';
import { CardListForm } from './cardListForm';

export const Form: FC<ChildProps> = (): ReactElement => {
  const [state, setState] = useState({
    formItem: [],
    created: false,
    valid: {
      title: true,
      author: true,
      date: true,
      isAgree: true,
      gender: true,
      category: true,
      file: true,
    },
  });

  const title = useRef(null);
  const author = useRef(null);
  const date = useRef(null);
  const category = useRef(null);
  const isAgree = useRef(null);
  const file = useRef(null);
  let gender = 'male';
  const male = useRef(null);
  const female = useRef(null);

  const handleRadioChange = () => {
    if (male.current.checked) {
      gender = male.current.name;
      female.current.checked = false;
    } else if (female.current.checked) {
      gender = female.current.name;
      male.current.checked = false;
    }
  };

  const handleSubmit = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    const newCard: CardType = {
      title: title.current.value,
      author: author.current.value,
      date: date.current.value,
      isAgree: isAgree.current.checked,
      gender: gender,
      genderCheck: female.current.checked || male.current.checked,
      category: category.current.value,
      file: URL.createObjectURL((file.current.files as FileList)[0]),
    };

    const valid = validation(newCard);
    setState({ ...state, valid: valid });

    for (const key in valid) {
      if (valid[key] === false) {
        switch (key.toString()) {
          case 'title':
            title.current.className = 'wrong';
            break;
          case 'author':
            author.current.className = 'wrong';
            break;
          case 'date':
            date.current.className = 'wrong';
            break;
        }
      } else {
        switch (key.toString()) {
          case 'title':
            title.current.className = 'inputStyle';
            break;
          case 'author':
            author.current.className = 'inputStyle';
            break;
          case 'date':
            date.current.className = 'inputStyle';
            break;
        }
      }
    }

    if (!Object.values(valid).includes(false)) {
      setState({
        ...state,
        formItem: [...state.formItem, newCard],
        valid: valid,
        created: true,
      });

      setTimeout(() => {
        title.current.value = '';
        author.current.value = '';
        date.current.value = '';
        category.current.value = 'people';
        isAgree.current.checked = false;
        file.current.value = '';
        gender = 'male';
        male.current.checked = false;
        female.current.checked = false;
        setState({
          ...state,
          formItem: [...state.formItem, newCard],
          valid: valid,
          created: false,
        });
      }, 1000);
    }
  };

  const f: Array<CardType> = state.formItem;
  return (
    <>
      <form className="formStyle" onSubmit={handleSubmit}>
        <label className="labelStyle">
          Enter title for your foto
          <input
            className="inputStyle"
            defaultValue=""
            name="title"
            type="text"
            ref={title}
            placeholder="Title"
          />
          {!state.valid.title && <p className="error">Error Title</p>}
        </label>
        <br />
        <label className="labelStyle">
          Enter author&apos;s name for your foto
          <input
            className="inputStyle"
            defaultValue=""
            name="author"
            type="text"
            ref={author}
            placeholder="Author"
          />
          {!state.valid.author && <p className="error">Error Author</p>}
        </label>
        <br />
        <label className="labelStyle">
          Enter date of create foto
          <input className="inputStyle" defaultValue="" name="date" type="date" ref={date} />
          {!state.valid.date && <p className="error">Error Date</p>}
        </label>
        <br />
        <label className="labelStyle">
          Categoty of your foto:
          <select className="inputStyle" name="category" defaultValue="" ref={category}>
            <option value="people">people</option>
            <option value="city">city</option>
            <option value="nature">nature</option>
          </select>
          {!state.valid.category && <p className="error">Error Category</p>}
        </label>
        <br />
        <label className="labelStyle">
          I agree with using this foto
          <input
            className=""
            name="isAgree"
            type="checkbox"
            ref={isAgree}
            checked={isAgree.checked}
          />
          {!state.valid.isAgree && <p className="error">Check it!</p>}
        </label>
        <label className="labelStyle">
          <input
            className="inputStyle"
            name="file"
            type="file"
            accept="image/png, image/gif, image/jpeg"
            ref={file}
          />
          {!state.valid.file && <p className="error">Error File</p>}
        </label>
        <br />
        <label className="labelStyle" onChange={handleRadioChange}>
          male
          <input type="radio" name="male" ref={male} />
          female
          <input type="radio" name="female" ref={female} />
          {!state.valid.gender && <p className="error">Check it!</p>}
        </label>
        <input className="buttonStyle" type="submit" value="Submit" />
      </form>
      {state.created && <p className="createdMessage">Card is created</p>}
      <CardListForm data={JSON.stringify(f)} />
    </>
  );
};
