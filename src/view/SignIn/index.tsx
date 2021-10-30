import React, { FormEvent } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import registerApi from '../../service/authApi';

import { ISignIn } from '../../interface'
 

const SignIn: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ISignIn>();
  const history = useHistory()
  const onSubmit: SubmitHandler<ISignIn> = (data) => {
    registerApi.post('session', data).then(
      response => {
        localStorage.setItem('@MeliuzSession', JSON.stringify(response.data))
        toast.success('Login realizado com sucesso!', {
          onClose: () => history.push('/dash')
        })
      }
    ).catch( () => toast.error('Ops falha no engano!'))
  }

  return(
    <div className="container">
      <h1>Formulário de login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          value="Logar" 
        />

      </form>
    </div>
  );
}

export default SignIn;