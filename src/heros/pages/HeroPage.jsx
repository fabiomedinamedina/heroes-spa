import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../';
import { useEffect, useMemo } from 'react';

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo( () => getHeroById( id ), [ id ] );

  if( !hero ) return <Navigate to="/marvel"/>
  
  const { superhero, publisher , alter_ego, first_appearance, characters, description } = hero;
  const publisherSlug = publisher.replace(/\s+/g, '-').toLowerCase();

  const onNavigateBack = () => {
    
    navigate( -1 );
    // if( publisher ===  'Marvel Comics'){
    //   navigate( '/marvel' );
    // }else if( publisher ===  'DC Comics'){
    //   navigate( '/dc' );
    // }

  }


  return (
    <div className="container">
      <div className="card card-hero card-hero-single rounded-4 border-0">
      <div className="row g-0 align-items-center">
        <div className="col-md-4">
          <img
            src={`/assets/heroes/${ id }.jpg`}
            alt={ superhero }
            className="img-fluid rounded-start-2"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className='d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between fw-bold mb-0'>
              <span className='order-1 order-lg-0'>{ superhero }</span>
              <span className={ `order-0 order-lg-1 mb-3 mb-lg-0 badge fs-5 rounded-pill badge-${ publisherSlug }` }>
                <small>{ publisher }</small>
              </span>
            </h1>
            <h2 className='fs-4 mb-3' >{ alter_ego }</h2>
            <p className="card-text">{ description }</p>
            <p className="card-text mb-0 text-color-secondary"><strong>Characters:</strong> { characters }</p>
            <p className="card-text mb-0 text-color-secondary"><strong>First Appearance:</strong> { first_appearance }</p>
            <button
              className='btn btn-login rounded-pill ps-4 pe-4 mt-4'
              onClick={ onNavigateBack }
            >
              Back to publisher
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    // <div className='row mt-5'>
    //   <div className="col-4">
    //     <img
    //       src={`/assets/heroes/${ id }.jpg`}
    //       alt={ superhero }
    //       className="img-fluid rounded shadow"
    //     />
    //   </div>
    //   <div className="col-8 mt-3 ps-5">
    //     <h1 className='d-flex align-items-center justify-content-between'>
    //       { superhero }
    //       <span className="badge rounded-pill text-bg-dark fs-6">
    //         <small>{ publisher }</small>
    //       </span>
    //     </h1>
    //     <hr />
    //     <ul className="list-group list-group-flush mb-3">
    //       <li className="list-group-item">
    //         <strong>Alter Ego:</strong> { alter_ego }
    //       </li>
    //       <li className="list-group-item">
    //         <strong>First Appearance:</strong> { first_appearance }
    //       </li>
    //       <li className="list-group-item">
    //         <strong>Characters:</strong> { characters }
    //       </li>
    //     </ul>

    //     <button
    //       className='btn btn-outline-success rounded-pill btn-sm ps-4 pe-4'
    //       onClick={ onNavigateBack }
    //     >
    //       Back to publisher
    //     </button>
    //   </div>
    // </div>
  );
};
