import React from "react";

const SingleMovie = ({ img }) => (
  <img
    src={img}
    className="poster"
    alt="movie poster"
    style={{ width: "95%", height: "110px", objectFit: "cover", objectPosition: "50% 50%" }}
  />
);


export default SingleMovie;
