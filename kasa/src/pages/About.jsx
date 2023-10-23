import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import collapsesContentArray from "../data/about.json";

const About = () => {
  return (
    <main className="about">
      <Navigation />
      <Banner backgroundClass={"background2"} />
      <div className="about__collapses max__width">
        {collapsesContentArray.map((collapse, index) => (
          <Collapse
            key={collapse.header + index}
            header={collapse.header}
            content={collapse.description}
            addClass="about"
          />
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default About;
