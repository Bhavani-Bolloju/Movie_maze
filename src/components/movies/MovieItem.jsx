import React from "react";
import classes from "./MovieItem.module.scss";

function MovieItem({ id, image }) {
  return (
    <li className={classes.movie}>
      <div className={classes["movie__image"]}>
        <img src={image} alt="" />
      </div>
    </li>
  );
}

export default MovieItem;
