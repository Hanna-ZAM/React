import React from 'react';
import './form.css';
import { Form, formItem } from '../components/form/form';
import CardListForm from '../components/form/cardListForm';

export class FormPage extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h2>Form</h2>
        <Form />
        <CardListForm data={JSON.stringify(formItem)}/>
      </>
    );
  }
}
