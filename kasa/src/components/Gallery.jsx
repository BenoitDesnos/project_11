// used Home.js

import { Link } from "react-router-dom";

function Gallery({ lodgings }) {
  return (
    <ul className="thumbs__container max__width ">
      {lodgings.map((lodging) => (
        <li key={lodging.id} className="thumbs">
          <Link
            to={`/Lodging/${lodging.id}`} /* onClick={setLodging(lodging)} */
          >
            <img src={lodging.cover} alt={"miniature de " + lodging.title} />
            <div className="thumbs__filter"></div>
            <h3 className="sizep">{lodging.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default Gallery;
