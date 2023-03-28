import React from 'react';
import './form.css';
import { validation, CardType } from './function';
import { CardListForm } from './cardListForm';

type MyProps = {
  value?: string;
  key?: string;
  index?: string;
};

export class Form extends React.Component<MyProps> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      formItem: [],
      valid: {
        title: true,
        author: true,
        date: true,
        isAgree: true,
        gender: true,
        category: true,
        file: true,
      },
    };

    this.title = React.createRef();
    this.author = React.createRef();
    this.date = React.createRef();
    this.category = React.createRef();
    this.isAgree = React.createRef();
    this.file = React.createRef();
    this.gender = 'male';
    this.male = React.createRef();
    this.female = React.createRef();

    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRadioChange() {
    if (this.male.current.checked) {
      this.gender = this.male.current.name;
      this.female.current.checked = false;
    } else if (this.female.current.checked) {
      this.gender = this.female.current.name;
      this.male.current.checked = false;
    }
  }

  handleSubmit(event: React.SyntheticEvent<EventTarget>) {
    event.preventDefault();

    const newCard: CardType = {
      title: this.title.current.value,
      author: this.author.current.value,
      date: this.date.current.value,
      isAgree: this.isAgree.current.checked,
      gender: this.gender,
      genderCheck: this.female.current.checked || this.male.current.checked,
      category: this.category.current.value,
      file: this.file.current.value,
    };

    const valid = validation(newCard);
    this.setState({ ...this.state, valid: valid });

    for (const key in valid) {
      if (key !== 'gender' && key !== 'isAgree') {
        if (valid[key] === false) {
          this[key].current.className = 'wrong';
        } else {
          this[key].current.className = 'inputStyle';
        }
      }
    }
    if (!Object.values(valid).includes(false)) {
      this.setState({ ...this.state, formItem: [...this.state.formItem, newCard], valid: valid });

      /*newCard = {
        title: '',
        author: '',
        date: '',
        isAgree: false,
        gender: '',
        category: '',
        file: '',
      };*/
      this.title.current.value = '';
      this.author.current.value = '';
      this.date.current.value = '';
      this.category.current.value = '';
      this.isAgree.current.checked = false;
      this.file.current.value = '';
      this.gender = 'male';
      this.male.current.checked = false;
      this.female.current.checked = false;
    }
  }
  render() {
    const f: Array<CardType> = this.state.formItem;
    return (
      <>
        <form className="formStyle" onSubmit={this.handleSubmit}>
          <label className="labelStyle">
            Enter title for your foto
            <input
              className="inputStyle"
              defaultValue=""
              name="title"
              type="text"
              ref={this.title}
              placeholder="Title"
            />
            {!this.state.valid.title && <p className="error">Error Title</p>}
          </label>
          <br />
          <label className="labelStyle">
            Enter author&apos;s name for your foto
            <input
              className="inputStyle"
              defaultValue=""
              name="author"
              type="text"
              ref={this.author}
              placeholder="Author"
            />
            {!this.state.valid.author && <p className="error">Error Author</p>}
          </label>
          <br />
          <label className="labelStyle">
            Enter date of create foto
            <input className="inputStyle" defaultValue="" name="date" type="date" ref={this.date} />
            {!this.state.valid.date && <p className="error">Error Date</p>}
          </label>
          <br />
          <label className="labelStyle">
            Categoty of your foto:
            <select className="inputStyle" name="category" defaultValue="" ref={this.category}>
              <option value="people">people</option>
              <option value="city">city</option>
              <option value="nature">nature</option>
            </select>
            {!this.state.valid.category && <p className="error">Error Category</p>}
          </label>
          <br />
          <label className="labelStyle">
            I agree with using this foto
            <input
              className=""
              name="isAgree"
              type="checkbox"
              ref={this.isAgree}
              checked={this.isAgree.checked}
            />
            {!this.state.valid.isAgree && <p className="error">Check it!</p>}
          </label>
          <label className="labelStyle">
            <input className="inputStyle" name="file" type="file" ref={this.file} />
            {!this.state.valid.file && <p className="error">Error File</p>}
          </label>
          <br />
          <label className="labelStyle" onChange={this.handleRadioChange}>
            male
            <input type="radio" name="male" ref={this.male} />
            female
            <input type="radio" name="female" ref={this.female} />
            {!this.state.valid.gender && <p className="error">Check it!</p>}
          </label>
          <input className="buttonStyle" type="submit" value="Submit" />
        </form>
        <CardListForm data={JSON.stringify(f)} />
      </>
    );
  }
}
