import React from "react";
import classes from "./MovieItem.module.scss";
import { useNavigate } from "react-router-dom";

function MovieItem({
  id,
  genres,
  image,
  name,
  rating,
  language,
  premiered,
  ended,
}) {
  const navigate = useNavigate();

  const detailMovieHandler = function () {
    navigate(`/${id}`);
  };

  return (
    <>
      {image && (
        <li className={classes.movie}>
          <div className={classes["movie__image"]}>
            <img src={image} alt="" />
          </div>
          <div className={classes["movie__content"]}>
            <h2 className={classes["movie__title"]}>
              <span>{name}</span>
              {/* <span className={classes["movie_lang"]}>({language})</span> */}
            </h2>
            <p className={classes["movie__genre"]}>{genres.join(", ")}</p>
            <p className={classes["movie__premiered"]}>
              (
              <span>
                {premiered ? new Date(premiered).getFullYear() : "-"} -{" "}
              </span>
              <span>{ended ? new Date(ended).getFullYear() : "now"}</span>)
            </p>
            <p>
              <span>Language: </span>
              <span>{language}</span>
            </p>
            <p className={classes["movie__rating"]}>
              <span>Rating: </span>
              <span>{rating ? rating : 0}</span>
            </p>
            <button
              className={classes["movie__detail-btn"]}
              onClick={detailMovieHandler}
            >
              View More
            </button>
          </div>
        </li>
      )}
    </>
  );
}

export default MovieItem;
