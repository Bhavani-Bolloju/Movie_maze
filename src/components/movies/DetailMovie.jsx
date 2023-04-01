import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/fetch-hook";
import classes from "./DetailMovie.module.scss";

function DetailMovie() {
  const params = useParams();

  const { data } = useFetch(`shows/${params.id}`);
  const { data: castData } = useFetch(`shows/${params.id}/cast`);
  const summary = data?.summary;
  console.log(castData);

  return (
    <div className={classes.movieCast}>
      {data && (
        <div className={classes["movie__detail"]}>
          <div className={classes["movie__detail-img"]}>
            <img src={data?.image?.original} alt="" />
          </div>
          <div className={classes["movie__detail-content"]}>
            <h2>
              <span>{data?.name}</span>(
              <span className={classes["movie__detail-date"]}>
                {data?.premiered
                  ? new Date(data?.premiered).getFullYear()
                  : "_"}{" "}
                -
              </span>
              <span className={classes["movie__detail-date"]}>
                {data?.ended
                  ? new Date(data?.ended).getFullYear()
                  : new Date().getFullYear()}
              </span>
              )
            </h2>
            <p dangerouslySetInnerHTML={{ __html: `${summary}` }}></p>
            <p className={classes["movie__detail-genre"]}>
              -- {data?.genres.join(", ")}
            </p>

            <div className={classes["movie__detail-info"]}>
              <div>
                <span>Timings: </span>
                <span>Every {data?.schedule?.days} at </span>
                <span>{data?.schedule?.time}</span>
              </div>
              <div>
                <span>Duration: </span>
                <span>{data?.averageRuntime} mins</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={classes["movie-cast-content"]}>
        <h2>Cast</h2>
        {castData && (
          <div className={classes["movie-casts"]}>
            {castData?.map((cast) => (
              <div key={cast.character.id} className={classes["movie-cast"]}>
                <div>
                  <img src={cast?.character?.image?.original} alt="" />
                </div>
                <p>{cast?.person?.name} as</p>
                <p>{cast?.character?.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailMovie;
