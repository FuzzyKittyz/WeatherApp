import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityWeather from "./components/cityWeather";
import Home from "./components/home"
import Login from "./components/login";
import Register from "./components/register";
import About from "./components/about";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/weather/:id" element={<CityWeather />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/register" element={<Register />}></Route>
    <Route path="/about" element={<About />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
