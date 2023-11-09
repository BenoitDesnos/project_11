/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Carrousel from "../components/Carrousel";
import starFull from "../assets/VectorStarFull.svg";
import starEmpty from "../assets/VectorStarEmpty.svg";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

// props from App.js
const Lodging = ({ lodgings }) => {
  const { id } = useParams();
  if (id !== undefined) {
    var lodging = lodgings.find((lodging) => lodging.id === id);
    if (lodging === false || lodging === undefined) {
      return <Navigate to="/404" />;
    }
  } else {
    return <Navigate to="/404" />;
  }

  const {
    tags,
    equipments,
    rating,
    title,
    location,
    host,
    description,
    pictures,
  } = lodging;

  const splittedName = host?.name.split(" ");
  const rangeStars = [1, 2, 3, 4, 5];

  // create array of elements needed in Collapses maping
  function collapseContentArray() {
    let collapseArray = [description];
    collapseArray.push(equipments);
    return collapseArray;
  }

  return (
    <>
      <main className="lodging ">
        <Navigation />
        <Carrousel picturesArray={pictures} />
        <div className="lodging__details max__width">
          <h1 className="lodging__details__title size2">{title}</h1>
          <p className="lodging__details__adress">{location}</p>
          <div className="lodging__details__host">
            <p className="lodging__details__host__name">
              {splittedName[0]} <br /> {splittedName[1]}
            </p>
            <img
              src={host.picture}
              alt="host photo"
              className="lodging__details__host__picture"
            ></img>
          </div>
          <ul className="lodging__details__tags sizeb">
            {tags.map((tag, index) => (
              <li key={tag + index}>{tag}</li>
            ))}
          </ul>
          <ul className="lodging__details__stars">
            {rangeStars.map((rangeElem, index) =>
              rating >= rangeElem ? (
                <li key={rangeElem + index}>
                  <img src={starFull} alt="star full" />
                </li>
              ) : (
                <li key={rangeElem + index}>
                  <img src={starEmpty} alt="star empty" />
                </li>
              )
            )}
          </ul>
        </div>
        <div className="lodging__collapses max__width">
          {collapseContentArray().map((element, index) => (
            <Collapse
              key={element + index}
              header={
                typeof element === "string" ? "Description" : "Equipments"
              }
              content={element}
              addClass={null}
            />
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Lodging;
