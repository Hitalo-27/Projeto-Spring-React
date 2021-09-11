import styles from './styles.module.css';
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className="jumbotron">
          <h1 className="display-4 py-3">DSVendas</h1>
          <p className="lead py-1">
            Analise o desempenho das suas vendas por diferentes perspectivas
          </p>
          <hr />
          <p className={styles.text}>
            Esta aplicação consiste em exibir um dashboard a partir de dados
            fornecidos por um back end construído com Spring Boot.
          </p>
          <Link className="btn btn-outline-success btn-lg" to="/dashboard">
            Acessar o Deshboard
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
