import React from "react";
import useFetch from "../hooks/fetch-hook";
import MovieItem from "./MovieItem";
import classes from "./Movies.module.scss";

function Movies() {
  const { data } = useFetch("search/shows?q=all");
  console.log(data);

  return (
    <div className={classes.movies}>
      <ul>
        {data &&
          data.map((item) => {
            return (
              <MovieItem
                key={item?.show?.id}
                id={item?.show?.id}
                image={item?.show?.image?.original}
                name={item?.show?.name}
                summary={item?.show?.summary}
                rating={item?.show?.rating?.average}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default Movies;
