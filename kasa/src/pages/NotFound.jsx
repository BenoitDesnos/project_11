import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import Navigation from "../components/Navigation";

const NotFound = () => {
  return (
    <main className="notfound">
      <Navigation />
      <h1 className="notfound__title">404</h1>
      <p className="notfound__paragraphe size2">
        Oups! La page que vous demandez n&rsquo;existe pas.
      </p>
      <Link to="/" className="notfound__link sizep">
        Retourner sur la page d&rsquo;accueil
      </Link>
      <Footer />
    </main>
  );
};

export default NotFound;
