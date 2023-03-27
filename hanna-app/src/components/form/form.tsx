import React from 'react';
import './form.css';

type MyProps = {
  value?: string;
  key?: string;
  index?: string;
};
type CardType = {
  title: string;
  author: string;
  date: string;
  isAgree: boolean;
  gender: string;
  genderCheck: boolean;
  category: string;
  file: string;
}
type ResultType = {
  title: boolean;
  author: boolean;
  date: boolean;
  isAgree: boolean;
  gender: boolean;
  category: boolean;
  file: boolean;
}

function validation(card:CardType) {
  let result:ResultType={
    title: true,
    author: true,
    date: true,
    isAgree: true,
    gender: true,
    category: true,
    file: true,
  };
  if((!card.title)||(card.title.length<3)) { 
    console.log('wrong title');
     result.title=false
  }
  if((!card.author)||
     (card.author.length<3)||
     (card.author[0].toLocaleLowerCase()===card.author[0])) { 
      console.log('wrong author');
       result.author=false
    }
  if (!(card.date.split('-').length===3)||
      ((new Date(Date.now()))<(new Date(card.date)))) {
        console.log('wrong date');
         result.date=false
      }
  if ((!card.isAgree)) { 
    console.log(card.isAgree);
     result.isAgree=false
  }
  if (!(card.genderCheck)) { 
    console.log('wrong file');
    result.gender=false
  }
  if (!(card.file)) { 
    console.log('wrong file');
     result.file=false
  }
         return result
}

export class Form extends React.Component<MyProps> {
  constructor(props: MyProps) {
    super(props);
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

  handleSubmit(event: React.SyntheticEvent<EventTarget>, ) {
    event.preventDefault();

    const newCard:CardType = {
      title: this.title.current.value,
      author: this.author.current.value,
      date: this.date.current.value,
      isAgree: this.isAgree.current.checked,
      gender: this.gender,
      genderCheck:this.female.current.checked||this.male.current.checked,
      category: this.category.current.value,
      file: this.file.current.value,
    };

    const valid=validation(newCard);

    for (let key in valid){
        if ((key!=='gender')&&(key!=='isAgree')){
          if ((valid[key]===false)) {
                this[key].current.className='wrong'
             } else  {
               this[key].current.className='inputStyle'
             }
            }
          }
      if (!Object.values(valid).includes(false)) {
      console.log(newCard);
     }
  
    }
  render() {
   
    return (
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
        </label>
        <br />
        <label className="labelStyle">
          Enter date of create foto
          <input
            className="inputStyle"
            defaultValue={Date.now()}
            name="date"
            type="date"
            ref={this.date}
          />
        </label>
        <br />
        <label className="labelStyle">
          Categoty of your foto:
          <select className='inputStyle' name="category" defaultValue="" ref={this.category}>
            <option value="people">people</option>
            <option value="city">city</option>
            <option value="nature">nature</option>
          </select>
        </label>
        <br />
        <label className="labelStyle">
          I agree with using this foto
          <input className='' name="isAgree" type="checkbox" ref={this.isAgree} checked={this.isAgree.checked} />
        </label>
        <label className="labelStyle">
          <input className="inputStyle" name="file" type="file" ref={this.file} />
        </label>
        <br />
        <label className="labelStyle" onChange={this.handleRadioChange}>
          male
          <input type="radio" name="male" ref={this.male} />
          female
          <input type="radio" name="female" ref={this.female} />
        </label>
        <input className="buttonStyle" type="submit" value="Submit" />
      </form>
    );
  }
}
