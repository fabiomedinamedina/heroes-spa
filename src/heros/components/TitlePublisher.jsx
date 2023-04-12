export const TitlePublisher = ({publisher}) => {

  const slugPublisher = publisher.replace(/\s+/g, '-').toLowerCase();

  return (
    <>
      <div className="container-title-publisher">
        <div
          className="content-publisher p-5 d-flex justify-content-end align-items-center rounded-4 mb-5"
          style={{
            backgroundImage: `url(assets/titles/background-title-${ slugPublisher }.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <div className="info-publisher p-3 pe-5 d-flex flex-column align-items-end">
            <img
              src={ `assets/titles/logo-${ slugPublisher }.svg` } 
              alt=""
              className="img-fluid"
            />
            <h1>{publisher}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
