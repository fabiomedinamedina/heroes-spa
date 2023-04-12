import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../';
import { useMemo } from 'react';

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  
  const hero = useMemo( () => getHeroById( id ), [ id ] );
 

  if( !hero ) return <Navigate to="/marvel"/>
  
  const { superhero, publisher , alter_ego, first_appearance, characters } = hero;

  const onNavigateBack = () => {

    if( publisher ===  'Marvel Comics'){
      navigate( '/marvel' );
    }else if( publisher ===  'DC Comics'){
      navigate( '/dc' );
    }

  }


  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img
          src={`/assets/heroes/${ id }.jpg`}
          alt={ superhero }
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="col-8 mt-3 ps-5">
        <h1 className='d-flex align-items-center justify-content-between'>
          { superhero }
          <span className="badge rounded-pill text-bg-dark fs-6">
            <small>{ publisher }</small>
          </span>
        </h1>
        <hr />
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item">
            <strong>Alter Ego:</strong> { alter_ego }
          </li>
          <li className="list-group-item">
            <strong>First Appearance:</strong> { first_appearance }
          </li>
          <li className="list-group-item">
            <strong>Characters:</strong> { characters }
          </li>
        </ul>

        <button
          className='btn btn-outline-success rounded-pill btn-sm ps-4 pe-4'
          onClick={ onNavigateBack }
        >
          Back to publisher
        </button>
      </div>
    </div>
  );
};
