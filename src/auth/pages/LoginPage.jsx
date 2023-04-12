import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../heros/hooks/useForms';
import { AuthContext } from '../context/AuthContext';
import { Footer } from '../../ui/components/Footer';

export const LoginPage = () => {

  const { loginUser } = useContext( AuthContext );
  // console.log(cont);
  const { name, email, onInputChange } = useForm({ name:'', email:'' });
  
  const navigate = useNavigate();


  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || "/";
    loginUser( name, email );
    navigate( lastPath, {
      replace: true
    })
  }

  return (

    <div className="login-row row g-0 ">
      <div className="col-12 col-lg-6  order-1 order-lg-0 left-login h-100 d-flex flex-column justify-content-between">
        <a href="https://fabiomedina.com" target='_blank'>
        <img
          src="/assets/logo-fabiomedina.svg" alt="Logo Fabio Medina"
          className='logo-fm pb-5 pb-lg-0'
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
       <Footer />
        
      </div>
      <div className="col-12 col-lg-6 order-0 order-lg-1 right-login h-100 d-flex flex-column justify-content-center text-center p-3 p-lg-5 px-5">
        <img src="/assets/heroes-login.png" alt="Heroes DC y Marvel" />
      </div>
    </div>
  );
};
