import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/fetch-hook";
import classes from "./DetailMovie.module.scss";
import MovieCast from "./MovieCast";

function DetailMovie() {
  const params = useParams();
  const { data } = useFetch(`shows/${params.id}`);
  const { data: castData } = useFetch(`shows/${params.id}/cast`);
  const summary = data?.summary;
  console.log(castData);

  const navigate = useNavigate();

  return (
    <div className={classes.movieCast}>
      <button className={classes.back} onClick={() => navigate("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
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
      {castData && <MovieCast castData={castData} />}

      <button className={classes["book-now"]}>Book Now</button>
    </div>
  );
}

export default DetailMovie;
