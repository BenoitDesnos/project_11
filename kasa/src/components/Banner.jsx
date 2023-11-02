// used in Home.js

import { isMobile } from "../utils/globalsVariables";

function Banner({ backgroundClass, title }) {
  return (
    <div className={`banner__container ${backgroundClass} max__width`}>
      {title && (
        <h2 className="size1">
          Chez vous,{isMobile && <br />} partout et ailleurs
        </h2>
      )}

      <div className="banner__filter"></div>
    </div>
  );
}

export default Banner;
