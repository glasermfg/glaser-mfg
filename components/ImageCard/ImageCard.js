import { Link } from "gatsby";
import React from "react";

const ImageCard = ({ bgImage, btnText, btnLink }) => {
  return (
    <>
      <div
        className="img-card img-fluid"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Link to={btnLink}>
          {btnText} <i class="fas fa-chevron-right"></i>
        </Link>
      </div>
    </>
  );
};

export default ImageCard;
