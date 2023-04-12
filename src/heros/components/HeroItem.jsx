import { Link } from "react-router-dom";

export const HeroItem = ( {id, publisher, superhero, alter_ego, first_appearance} ) => {

  const urlHero = `/assets/heroes/${ id }.jpg`;
  const publisherSlug = publisher.replace(/\s+/g, '-').toLowerCase();

  return (
    <>
      <div className="col-3 mb-4">
        <Link className="link-hero" to={ `/hero/${id}` }>
          <div className="card-hero rounded-3">
            <div className="content-hero-card">
              <img src={ urlHero } className="img-fluid rounded-3" alt={ superhero } />
              <div className="info-hero">
                <h2 className="hero-name mb-0">
                  { superhero }
                </h2>
                <p className="hero-text mt-0 mb-1">{ alter_ego }</p>
              </div>
              <span className={ `badge rounded-pill badge-${ publisherSlug }` }>
                  { publisher }
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
