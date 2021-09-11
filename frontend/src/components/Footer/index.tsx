const Footer = () => {
  return (
    <div>
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <p className="text-light">
            App desenvolvido por:
            <a
              href="https://github.com/Hitalo-27"
              className="text-success"
              target="_blank"
              rel="noreferrer"
            >
              Hitalo Chaves
            </a>
          </p>
          <p className="text-light">
            <small>
              <strong>Semana Spring React</strong>
              <br />
              Evento promovido pela escola DevSuperior:{" "}
              <a
                href="https://instagram.com/devsuperior.ig"
                className="text-success"
                target="_blank"
                rel="noreferrer"
              >
                @devsuperior.ig
              </a>
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
