import React from "react";
import classes from "./MovieCast.module.scss";

function MovieCast({ castData }) {
  console.log(castData);
  return (
    <div className={classes["movie-casts"]}>
      <h2>Cast</h2>
      {castData && (
        <div className={classes["movie-casts-info"]}>
          {castData?.map((cast) => {
            console.log(cast?.person?.image?.medium);
            return (
              <div key={cast?.character.id} className={classes["movie-cast"]}>
                <div>
                  <img
                    src={
                      cast?.character?.image?.original ||
                      cast?.person?.image?.medium
                    }
                    alt=""
                  />
                </div>
                <p className={classes["cast-name"]}>
                  <span className={classes["person-name"]}>
                    {cast?.person?.name}
                  </span>
                  <span>as</span>
                  <span className={classes["character-name"]}>
                    {cast?.character?.name}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MovieCast;
