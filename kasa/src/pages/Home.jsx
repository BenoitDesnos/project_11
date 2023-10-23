import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Navigation from "../components/Navigation";

const Home = ({ lodgings }) => {
  return (
    <>
      <main className="home">
        <Navigation />
        <Banner backgroundClass={"background"} />
        <Gallery lodgings={lodgings} />
        <Footer />
      </main>
    </>
  );
};

export default Home;
