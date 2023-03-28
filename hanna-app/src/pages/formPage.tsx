import React from 'react';
import './form.css';
import { Form } from '../components/form/form';
export class FormPage extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h2>Form</h2>
        <Form />
      </>
    );
  }
}
