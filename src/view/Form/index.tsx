import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../../components/Form';
import { IAllPersons } from '../../store/modules/types';


const FormView: React.FC = () => {
  const state = useSelector((state: IAllPersons) => state.persons);
  return(
    <div>
      <Form />
      <br />
      <hr />
      <br />
      { state.map( (person, index) => (
        <div key={index}>
          <span> Nome: {person.name}</span>
          <span> Email: {person.email}</span>
        </div>
      )) }
    </div>
  )
}

export default FormView;