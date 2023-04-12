import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../heros/hooks/useForms';
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {

  const navigate = useNavigate();

  const { loginUser } = useContext( UserContext );
  const { name, email, onInputChange } = useForm({ name:'', email:'' });

  const onLogin = () => {
    loginUser( { name: name, email: email } );
    navigate( '/marvel', {
      replace: true
    })
  }

  return (

    <div className="login-row row g-0 ">
      <div className="col-6 left-login h-100 d-flex flex-column justify-content-between">
        <a href="https://fabiomedina.com" target='_blank'>
        <img
          src="/assets/logo-fabiomedina.svg" alt="Logo Fabio Medina"
          className='logo-fm'
        />
        </a>
        <div className="login-form-content">
        <h1>Bienvenid@!</h1>
        <p>Aquí podrás visualizar personajes de Marvel y DC Comics.</p>
        <form onSubmit={ onLogin } className='form-login'>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            className="form-control rounded-pill mb-2 input-login"
            name="name"
            onChange={ onInputChange }
            value={ name }
            required
          />
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className="form-control rounded-pill mb-4 input-login"
            name="email"
            onChange={ onInputChange }
            value={ email }
            required
          />
            <button
            className="btn btn-login rounded-pill w-100"
          >
            Iniciar sesión
          </button>
          <p
            className='text-center pb-0 pt-1 legal-login'
          >
            Este es un sitio demostrativo.<br />
            Por favor ingresa tu nombre y correo electrónico (no se validará)
          </p>
        </form>
        </div>
        <p><small>©2023 Todos los derechos reservados. Fabio Medina Medina</small></p>
      </div>
      <div className="col-6 right-login h-100 d-flex flex-column justify-content-center text-center p-5">
        <img src="/assets/heroes-login.png" alt="Heroes DC y Marvel" />
      </div>
    </div>
  );
};
