import React from 'react';
import Options from './Options';
import { Wrapper, Fieldset, Legend } from '../styled/styledForm';



const Form = ({ currencys }) => {

  const onFormSubmit = event => {
    event.preventDefault();


  }
  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kalkulator walutowy</Legend>
        <Options currencys={currencys} />
      </Fieldset>
    </Wrapper>
  );
}

export default Form;