import React, { FormEvent } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import registerApi from '../../service/authApi';

import { ISignUp } from '../../interface'
 

const SignUp: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ISignUp>();
  const history = useHistory()
  const onSubmit: SubmitHandler<ISignUp> = (data) => {
    registerApi.post('users', data).then(
      response => {
        console.log('response', response);
        toast.success('Cadastro realizado com sucesso!', {
          onClose: () => history.push('/login')
        })
      }
    ).catch( () => toast.error('Ops falha no engano!'))
  }

  return(
    <div className="container">
      <h1>Formulário de cadastro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="text" 
          placeholder="nome"
          { ...register('name', { required: true }) }
        />
        <span style={{ color: 'red'}}>
          { errors?.name && "Oops o campo nome é obrigatório!" }
        </span>

        <input 
          type="text" 
          placeholder="email"
          { ...register('email', { required: true }) } 
        />
        <span style={{ color: 'red'}}>
          { errors?.email && "Oops o campo email é obrigatório!" }
        </span>

        <input 
          type="password" 
          placeholder="password" 
          { ...register('password', { required: true }) }
        />
        <span style={{ color: 'red'}}>
          { errors?.password && "Oops o campo senha é obrigatório!" }
        </span>

        <input 
          type="submit" 
          value="Cadastrar" 
        />

      </form>
    </div>
  );
}

export default SignUp;