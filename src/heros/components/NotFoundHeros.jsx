export const NotFoundHeros = () => {
  return (
    <>
      <div className="not-found-heros row justify-content-center text-center">
        <div className="col-12 col-lg-5">
          <img src="/assets/icon-not-found.png" alt="" />
          <h2><strong>¡Disculpa!</strong> no hay resultados :(</h2>
          <p>No se encuntraron héroes con XXXX, te pedimos que lo intentes con otro nombre.</p>
        </div>
      </div>
    </>
  );
};
