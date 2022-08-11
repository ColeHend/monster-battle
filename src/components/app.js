// @ts-nocheck
import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header/header";
import Navbar from "./navbar/navbar";
import Home from "./home/home";
import Monsters from "./monsters/monsters";
import Moves from "./moves/moves";
import Battles from "./battles/battles";
const UserContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({});
  return (
    <div>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <div id="header">
          <Header />
          <Navbar />
        </div>
        <div id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moves" element={<Moves />} />
            <Route path="/battles" element={<Battles />} />
            <Route path="/monsters" element={<Monsters />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
