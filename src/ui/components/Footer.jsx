export const Footer = () => {
  return (
    <footer className="mt-5 mb-4 mx-3">
      <small>
        ©2023 Todos los derechos reservados.
        <a href="https://fabiomedina.com" target="blank" className="ms-2 copyright-link d-inline-flex">
          Fabio Medina Medina
        </a>
      </small>
      <div className="social-media mt-3">
        <a href="https://www.linkedin.com/in/fabio-medina-medina/" target="blank"
          className="link-secondary"
        >
          LinkedIn
        </a>
        <a href="https://github.com/fabiomedinamedina" target="blank"
          className="link-secondary"
        >
          GitHub
        </a>
        <a href="https://github.com/fabiomedinamedina/heroes-spa" target="blank"
          className="link-secondary"
        >
          Source code
        </a>
      </div>
    </footer>
  );
};
