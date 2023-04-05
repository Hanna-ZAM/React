import React, { useState } from 'react';
import './form.css';
import { CardType } from './function';
import { CardListForm } from './cardListForm';
import { useForm } from 'react-hook-form';

export let f: Array<CardType> = [];

export const Form: FC<ChildProps> = (): ReactElement => {
  const [state, setState] = useState({
    formItem: [],
    created: false,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CardType>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldFocusError: false,
  });

  const onSubmit = (data: CardType) => {
    const newCard = {
      title: data.title,
      author: data.author,
      date: data.date,
      gender: data.gender,
      isAgree: data.isAgree,
      category: data.category,
      file: URL.createObjectURL(data.file[0]),
    };
    setState({
      ...state,
      formItem: [...state.formItem, newCard],
      created: true,
    });

    reset();
    setTimeout(() => {
      setState({
        ...state,
        formItem: [...state.formItem, newCard],
        created: false,
      });
    }, 1000);
  };

  f = state.formItem;
  return (
    <>
      <form className="formStyle" onSubmit={handleSubmit(onSubmit)}>
        <label className="labelStyle">
          Enter title for your foto
          <input
            className="inputStyle"
            defaultValue=""
            name="title"
            type="text"
            {...register('title', {
              required: true,
              minLength: {
                value: 3,
                message: 'You need input more 3 letters',
              },
            })}
            placeholder="Title"
          />
          {errors.title && <p className="error">Error Title</p>}
        </label>
        <br />
        <label className="labelStyle">
          Enter author&apos;s name for your foto
          <input
            className="inputStyle"
            defaultValue=""
            name="author"
            type="text"
            {...register('author', {
              required: true,
              minLength: {
                value: 3,
                message: 'You need input more 3 letters',
              },
            })}
            placeholder="Author"
          />
          {errors.author && <p className="error">Error Author</p>}
        </label>
        <br />
        <label className="labelStyle">
          Enter date of create foto
          <input
            className="inputStyle"
            defaultValue=""
            name="date"
            type="date"
            {...register('date', {
              required: true,
              valueAsDate: true,
            })}
          />
          {errors.date && <p className="error">Error Date</p>}
        </label>
        <br />
        <label className="labelStyle">
          Categoty of your foto:
          <select
            className="inputStyle"
            name="category"
            defaultValue=""
            {...register('category', {
              required: true,
            })}
          >
            <option value="people">people</option>
            <option value="city">city</option>
            <option value="nature">nature</option>
          </select>
        </label>
        <br />
        <label className="labelStyle">
          I agree with using this foto
          <input
            className=""
            name="isAgree"
            type="checkbox"
            {...register('isAgree', {
              required: true,
            })}
          />
          {errors.isAgree && <p className="error">Check it!</p>}
        </label>
        <label className="labelStyle">
          <input
            className="inputStyle"
            name="file"
            type="file"
            accept="image/png, image/gif, image/jpeg"
            {...register('file', {
              required: true,
            })}
          />
          {errors.file && <p className="error">Error File</p>}
        </label>
        <br />
        <label className="labelStyle">
          male
          <input
            type="radio"
            value="male"
            name="male"
            {...register('gender', {
              required: true,
            })}
          />
          female
          <input
            type="radio"
            name="female"
            value="female"
            {...register('gender', {
              required: true,
            })}
          />
          {errors.gender && <p className="error">Check it!</p>}
        </label>
        <input className="buttonStyle" type="submit" value="Submit" />
      </form>
      {state.created && <p className="createdMessage">Card is created</p>}
      <CardListForm data={JSON.stringify(f)} />
    </>
  );
};
