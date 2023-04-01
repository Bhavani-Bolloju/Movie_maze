import React, { useEffect } from "react";
import useFetch from "./components/hooks/fetch-hook";
import Movies from "./components/movies/Movies";
import { Route, Routes } from "react-router-dom";
import DetailMovie from "./components/movies/DetailMovie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Movies />}></Route>
      <Route path="/:id" element={<DetailMovie />}></Route>
    </Routes>
  );
}

export default App;
// 98i6ppJULSPdH1nfiUN1V1Q5hkTlbviB
