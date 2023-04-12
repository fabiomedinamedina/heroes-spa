export const TitlePublisher = ({publisher}) => {

  const slugPublisher = publisher.replace(/\s+/g, '-').toLowerCase();

  return (
    <>
      <div className="container-title-publisher">
        <div
          className="content-publisher p-2 p-lg-5 d-flex justify-content-end align-items-center rounded-4 mb-4 mb-lg-5"
          style={{
            backgroundImage: `url(assets/titles/background-title-${ slugPublisher }.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <div className="info-publisher p-3 pe-lg-5 d-flex flex-column align-items-center align-items-lg-end w-100">
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
