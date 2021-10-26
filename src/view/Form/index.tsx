import React, { FormEvent } from 'react';


const Form: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Alert')
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="nome"/>
        <input type="text" placeholder="email"/>
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default Form;