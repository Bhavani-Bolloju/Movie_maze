import React, { useEffect, useState } from "react";

const useFetch = function (url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async function () {
      const req = await fetch(`https://api.tvmaze.com/${url}`);
      const res = await req.json();
      setData(res);
    };

    if (url) {
      getData();
    }
  }, []);

  return { data };
};

export default useFetch;
