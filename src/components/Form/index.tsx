import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPerson } from '../../store/modules/actions'
import { IPerson } from '../../store/modules/types';

const Form: React.FC = () => {
  const [ data, setData ] = useState<IPerson>({} as IPerson);
  const dispatch = useDispatch()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('@name', JSON.stringify(data))
    dispatch(addNewPerson(data));
  }

  return (
    <div>
      <h1>Form component</h1>
      { data?.name }<br/>
      { data?.email }
      <hr />
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="nome"
          onChange={ e => setData({...data, name: e.target.value})}
        />
        <input 
          type="text" 
          placeholder="email"
          onChange={ e => setData({...data, email: e.target.value})}
        />
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}

export default Form;