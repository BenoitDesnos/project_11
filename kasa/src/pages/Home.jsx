import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Navigation from "../components/Navigation";
import { isMobile } from "../utils/globalsVariables";

const Home = () => {
  return (
    <>
      <main className="home">
        <Navigation />
        <Banner
          backgroundClass={"background"}
          title={`Chez vous, ${isMobile && <br />} partout et ailleurs`}
        />
        <Gallery />
        <Footer />
      </main>
    </>
  );
};

export default Home;
