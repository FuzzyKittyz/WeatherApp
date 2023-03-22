import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityWeather from "./components/cityWeather";
import Home from "./components/home"

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/weather/:id" element={<CityWeather />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
