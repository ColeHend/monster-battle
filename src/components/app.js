// @ts-nocheck
import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header/header";
import Navbar from "./navbar/navbar";
import Home from "./home/home";
const UserContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({});
  return (
    <div>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <div id="header">
          <Header />
        </div>
        <div id="navbar">
          <Navbar />
        </div>
        <div id="main">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
