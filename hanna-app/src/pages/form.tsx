import { check } from 'prettier';
import React, { useRef, useState } from 'react';
import './form.css';


type MyProps = {
  value?: string;
  key?: string;
  index?: string;
};
type MyState = {
  titleValue?: string;
  authorValue?: string;
  dateValue?: string;
  countryValue?: string;
  isAgree?: boolean;
};




export class Form extends React.Component<MyProps,MyState> {
  constructor(props:MyProps) {
    super(props);
    this.state = {
      isAgree: true,
      authorValue: "",
      dateValue: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
    handleInputChange(event:React.SyntheticEvent<EventTarget>) {
      const target= (event.target as HTMLInputElement) ;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
       [name]: value
  });
}

handleSubmit(){
}




  render() {
    return (
      <form className="formStyle" onSubmit={this.handleSubmit}>
        <label className="labelStyle">
          Enter title for your foto
          <input className="inputStyle"  type="text" value={this.state.titleValue} placeholder="Title" onChange={this.handleInputChange} />
        </label>
        <br/>
        <label className="labelStyle">
          Enter author's name for your foto
          <input className="inputStyle"  type="text" value={this.state.authorValue} placeholder="Author" onChange={this.handleInputChange} />
        </label>
        <br/>
        <label className="labelStyle">
          Enter date of create foto
          <input className="inputStyle" type="date" value={this.state.dateValue} onChange={this.handleInputChange} />
        </label>
        <br/>
        <label className="labelStyle">
          Categoty of your foto:  
          <select>
            <option value="people">people</option>
            <option value="city">city</option>
            <option selected value="nature">nature</option>
          </select>
        </label>
        <br/>
        <label className="labelStyle">
          I agree with using this foto
          <input
              name="isAgree"
              type="checkbox"
              checked={this.state.isAgree}
              onChange={this.handleInputChange} />
        </label>   
          <br/>
        <label className="labelStyle">
          <input className="inputStyle" type="file" />
        </label>
          <br/>
        <label className="labelStyle">
          male
          <input type="radio" />
          female
          <input type="radio" />
        </label>
        <br/>
          <input className="buttonStyle" type="submit" value="Submit" />
      </form>
    );
  }
}