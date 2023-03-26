import { check } from 'prettier';
import React, { useRef, useState } from 'react';
import './form.css';


type MyProps = {
  value?: string;
  key?: string;
  index?: string;
};




export class Form extends React.Component<MyProps> {
  constructor(props:MyProps) {
    super(props);
    this.title=React.createRef();
    this.author=React.createRef();
    this.date=React.createRef();
    this.category=React.createRef();
    this.isAgree=React.createRef();
    this.file=React.createRef();
    this.gender="male";
    this.male=React.createRef();
    this.female=React.createRef();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange(event:React.SyntheticEvent<EventTarget>) {
      const input = this[event.target.name]
  }

  handleRadioChange(event:React.SyntheticEvent<EventTarget>) {
   if(this.male.current.checked){
    this.gender=this.male.current.name 
    this.female.current.checked=false
   } else  if (this.female.current.checked){
    this.gender=this.female.current.name 
    this.male.current.checked=false
   }
  }

  handleSubmit(event:React.SyntheticEvent<EventTarget>){
    event.preventDefault();
    const newCard={
      title:this.title.current.value,
      author:this.author.current.value,
      date:this.date.current.value,
      isAgree:this.date.current.value,
      gender: this.gender,
      category: this.category.current.value,
      file:this.file.current.value
    }
    console.log(newCard)
  }

  render() {
    const male=React.createRef();
    const female=React.createRef();
    return (
      <form className="formStyle" onSubmit={this.handleSubmit}>
        <label className="labelStyle">
          Enter title for your foto
          <input className="inputStyle"  
                 defaultValue=""
                 name="title"
                 type="text" 
                 ref={this.title}
                 placeholder="Title" 
                 onChange={this.handleInputChange} />
        </label>
        <br/>
       <label className="labelStyle">
          Enter author's name for your foto
          <input className="inputStyle"
                 defaultValue=""
                 name="author"
                 type="text" 
                 ref={this.author}
                 placeholder="Author" 
                 onChange={this.handleInputChange} />
        </label>
        <br/>
        <label className="labelStyle">
          Enter date of create foto
          <input className="inputStyle" 
                 defaultValue={Date.now()}
                 name= "date"
                 type="date" 
                 ref={this.date}
                 onChange={this.handleInputChange} />
        </label>
        <br/>
        <label className="labelStyle" >
          Categoty of your foto:  
          <select name="category" 
                  defaultValue=""
                  ref={this.category}
                  onChange={this.handleInputChange} >
            <option value="people">people</option>
            <option value="city">city</option>
            <option value="nature">nature</option>
          </select>
        </label>
        <br/>
        <label className="labelStyle">
          I agree with using this foto
          <input
              name="isAgree"
              type="checkbox"
              ref={this.isAgree}
              checked={this.isAgree.checked}
              onChange={this.handleInputChange} />
        </label>
        <label className="labelStyle">
          <input className="inputStyle" 
                 name='file'
                 type="file"
                 ref={this.file} 
                 />
        </label>
          <br/>
          <label className="labelStyle"
          
                  onChange={this.handleRadioChange}>
          male
          <input type="radio"
                 name='male'
                 ref={this.male}
                 />
          female
          <input type="radio"  
                 name='female'
                 ref={this.female}
                 />
        </label>   
          <input className="buttonStyle" 
                 type="submit" 
                 value="Submit" 
                 />
      </form>
    );
  }
}