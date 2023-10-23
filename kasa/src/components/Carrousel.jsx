// used in Lodging.js

import { useState } from "react";
import arrow from "../assets/Vector gauche.svg";

function Carrousel({ picturesArray }) {
  const [clickCount, setClickCount] = useState(0);
  // if more than one pciture return carrousell
  return picturesArray.length > 1 ? (
    <div className="carrousel max__width">
      <span className="picture__order">
        {clickCount + 1 + "/" + picturesArray.length}
      </span>
      <img
        src={arrow}
        alt="clic gauche"
        id="leftClick"
        onClick={() => {
          clickCount <= 0
            ? setClickCount(picturesArray.length - 1)
            : setClickCount(clickCount - 1);
        }}
      />
      <img
        src={picturesArray[clickCount]}
        alt="Images du carrousel"
        className="pictures"
      />
      <img
        src={arrow}
        alt="clic droit"
        id="rightClick"
        onClick={() => {
          clickCount >= picturesArray.length - 1
            ? setClickCount(0)
            : setClickCount(clickCount + 1);
        }}
      />
    </div>
  ) : (
    // else return only one picture
    <div className="carrousel max__width">
      <img
        src={picturesArray[0]}
        alt="Images du carrousel"
        className="pictures"
      />
    </div>
  );
}

export default Carrousel;
