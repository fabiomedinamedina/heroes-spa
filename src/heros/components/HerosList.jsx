import PropTypes from 'prop-types';
import { HeroItem, TitlePublisher, getHerosByPublisher } from '../';
import { useMemo } from 'react';

export function HerosList( {publisher} ) {
  const heros = useMemo( () =>  getHerosByPublisher( publisher ), [ publisher ] )

  return (
    <>
      <div className="container animate__animated animate__fadeIn">
        <div className="row">
          <div className="col">
            <TitlePublisher  publisher={publisher} />
          </div>
        </div>
      </div>
      <div className="container  animate__animated animate__fadeInUp">
        <div className="row">
          {
            heros.map( ( hero ) =>(
            <HeroItem
              key={hero.id}
              {...hero}
            />
            ))
          }
        </div>
      </div>
    </>
  );
}

HerosList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
