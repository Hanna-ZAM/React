import React from 'react';
import './form.css';
import { CardType } from './function';
import { CardListForm } from './cardListForm';
import { useForm } from 'react-hook-form';
import { cardFormSlicer } from '../../store/reducers/cardFormSlicer';
import { formSlicer } from '../../store/reducers/formSlicer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export const Form: FC<ChildProps> = (): ReactElement => {
  const state = useAppSelector((state) => state.cardFormReducer);
  const formState = useAppSelector((state) => state.formReducer);
  const { addCardForm, createNewCard } = cardFormSlicer.actions;
  const { changeFormField } = formSlicer.actions;
  const dispatch = useAppDispatch();

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

  const changeField = (data: EventTarget) => {
    const value = data.value;
    let obj = {};
    switch (data.name) {
      case 'title': {
        obj = { title: value };
        break;
      }
      case 'author': {
        obj = { author: value };
        break;
      }
      case 'date': {
        obj = { date: value };
        break;
      }
    }
    dispatch(changeFormField(obj));
  };

  const onSubmit = (data: CardType) => {
    const newCard = {
      title: data.title,
      author: data.author,
      date: data.date.toString().slice(4, 15),
      gender: data.gender,
      isAgree: data.isAgree,
      category: data.category,
      file: URL.createObjectURL(data.file[0]),
    };
    dispatch(createNewCard(true));
    reset();
    setTimeout(() => {
      dispatch(addCardForm(newCard));
    }, 1000);
  };
  return (
    <>
      <form className="formStyle" onSubmit={handleSubmit(onSubmit)}>
        <label className="labelStyle">
          Enter title for your foto
          <input
            className="inputStyle"
            defaultValue={formState.formFields.title}
            name="title"
            type="text"
            {...register(
              'title',
              {
                onChange: (e) => changeField(e.target),
              },
              {
                required: true,
                minLength: {
                  value: 3,
                  message: 'You need input more 3 letters',
                },
              }
            )}
            placeholder="Title"
          />
          {errors.title && <p className="error">Error Title</p>}
        </label>
        <br />
        <label className="labelStyle">
          Enter author&apos;s name for your foto
          <input
            className="inputStyle"
            defaultValue={formState.formFields.author}
            name="author"
            type="text"
            {...register(
              'author',
              {
                onChange: (e) => changeField(e.target),
              },
              {
                required: true,
                minLength: {
                  value: 3,
                  message: 'You need input more 3 letters',
                },
              }
            )}
            placeholder="Author"
          />
          {errors.author && <p className="error">Error Author</p>}
        </label>
        <br />
        <label className="labelStyle">
          Enter date of create foto
          <input
            className="inputStyle"
            defaultValue={formState.formFields.date}
            name="date"
            type="date"
            {...register(
              'date',
              {
                onChange: (e) => changeField(e.target),
              },
              {
                required: true,
                valueAsDate: true,
              }
            )}
          />
          {errors.date && <p className="error">Error Date</p>}
        </label>
        <br />
        <label className="labelStyle">
          Categoty of your foto:
          <select
            className="inputStyle"
            name="category"
            defaultValue={formState.formFields.category}
            {...register(
              'category',
              {
                onChange: (e) => changeField(e.target),
              },
              {
                required: true,
              }
            )}
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
            {...register(
              'isAgree',
              {
                onChange: (e) => changeField(e.target),
              },
              {
                required: true,
              }
            )}
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
      <CardListForm data={JSON.stringify(state.formItem)} />
    </>
  );
};
