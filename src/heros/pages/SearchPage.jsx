import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../hooks/useForms';
import { getHerosByName } from '../helpers';
import { useMemo } from 'react';
import { HeroItem } from '../components/';
import { NotFoundHeros } from '../components/NotFoundHeros';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  const heros = useMemo(() => getHerosByName( q ), [q]);
  
  const onSearchSubmit = (event) => {
    event.preventDefault();  
    navigate(`?q=${ searchText }`);
  }

  const { searchText, onInputChange }  = useForm({ searchText: q });

  return (
    <>

      <div className="container container-title-publisher  animate__animated animate__fadeIn">
        <div
          className="content-search p-4 p-lg-5 d-flex justify-content-between align-items-end rounded-4 mb-5"
          style={{
            backgroundImage: `url(assets/titles/background-search.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
         <div className="container">
         <div className="row align-items-end">
            <div className="col-12 col-lg-6">
                <div className="info-publisher">
                <img
                  src={ `assets/titles/logos-dc-marvel.svg` } 
                  alt="Logos DC y Marvel"
                  className="img-fluid pb-2"
                />
                <h1>Buscador de héroes</h1>
                <p className='mb-0'>Escribe el nombre del héroe que quieres buscar. Recuerda que debes escribir más de 3 caracteres</p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
                <form className="form-search d-flex flex-column flex-lg-row justify-content-end flex-column pb-2 pt-3 pt-lg-0" onSubmit={ onSearchSubmit }>
                <div className="col-auto mt-0">
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Escribe el nombre de un héroe."
                    name="searchText"
                    autoComplete="off"
                    value={ searchText }
                    onChange={ onInputChange }
                  />
                </div>
                <div className="col-auto mt-0 mb-0">
                  <button
                    type="submit"
                    className="btn rounded-pill px-4 mt-2 mt-lg-0"
                  >
                    Buscar Héroes
                  </button>
                </div>
              </form>
            </div>
          </div>
         </div>
        </div>
      </div>
      <div className="container">
        <div className="row results-heros animate__animated animate__fadeIn g-3">
          {
            ( heros.length === 0 && q !== '' ) && <NotFoundHeros />
          }
          {
            heros.map( (hero) => (
              <HeroItem key={ hero.id } { ...hero } />
            ))
          }
        </div>
      </div>
    </>
  );
};
