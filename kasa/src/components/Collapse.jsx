// used in Lodging.js, About.js

import collapseArrow from "../assets/VectorCollapseArrow.svg";
import { useState } from "react";

function Collapse({ header, content, addClass }) {
  const [isOpen, setIsOpen] = useState(false);

  /* La présence de cette fn est justifiée par le besoin
  d'effectuer une transition sur une height dynamique selon
  le contenu de la collapse, transition sur height auto impossible,
  nous l'utilison aussi au passage pour jouer setisOpen()*/

  function toggleCollapses() {
    let collapseContainer = document.getElementById(header);
    let collapseHeader = document.querySelector(".collapse__header");

    /* if collapseContainer & collapseHeader have different heights then collapse is open else it is closed*/

    if (collapseContainer.clientHeight !== collapseHeader.clientHeight) {
      // if collapse is open
      collapseContainer.style.height = collapseHeader.clientHeight + "px"; // set new height
      setIsOpen(false);
    } else {
      // if collapse is closed
      let collapsesContent = document.querySelector(`#${header} > ul`);
      collapseContainer.style.height = //set new height
        collapsesContent.clientHeight +
        collapseContainer.clientHeight +
        60 + // 60 === margin top + bottom of .collapse__content in .collapse.scss
        "px";
      setIsOpen(true);
    }
  }

  return (
    <div
      className={" collapse__container collapse__container--closed " + addClass}
      id={header} // we use props header to set dynamic id
    >
      <img
        src={collapseArrow}
        alt="collapse toggle"
        className={
          isOpen
            ? "collapse__arrow "
            : " collapse__arrow collapse__arrow--closed"
        }
        onClick={() => toggleCollapses()}
      />
      <div className="collapse__header" onClick={() => toggleCollapses()}>
        <p>{header}</p>
      </div>
      <ul className="collapse__content">
        {/* if props content isnt "string" then it's an array */}
        {typeof content === "string" ? (
          <li className="collapse__content__element sizep">{content}</li>
        ) : (
          content.map((element, index) => (
            <li
              className="collapse__content__element list sizep"
              key={element + index}
            >
              {element}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Collapse;
