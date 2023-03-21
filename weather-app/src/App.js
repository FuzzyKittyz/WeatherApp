import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityWeather from "./components/cityWeather";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/weather/:id" element={<CityWeather />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
