import React from 'react';
import './form.css';
import { Form } from '../components/form/form';
export const FormPage: FC<ChildProps> = (): ReactElement => {
  return (
    <>
      <h2>Form</h2>
      <Form />
    </>
  );
};
