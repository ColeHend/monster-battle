import React, { useState } from "react";
import "./monsters.css";
function Monsters() {
  let [monName, setMonName] = useState("");
  let [monAtk, setMonAtk] = useState(10);
  let [monDef, setMonDef] = useState(10);
  let [monSPAtk, setMonSPAtk] = useState(10);
  let [monSPDef, setMonSPDef] = useState(10);
  let [speed, setMonSpeed] = useState(10);
  let monster = {
    monName,
    monAtk,
    monDef,
    monSPAtk,
    monSPDef,
    speed,
  };
  console.log(`monster: ${JSON.stringify(monster)}`);
  return (
    <div id="monster">
      <div className="monHead">Monster Creator</div>
      <div className="monTitle">
        <label htmlFor="monName">Name: </label>
        <input
          type="text"
          onChange={(e) => setMonName(e.target.value)}
          value={monster.monName}
          name="monName"
          id="monName"
        />
      </div>
      <div className="speed">
        <label htmlFor="speed">Speed: </label>
        <input
          value={monster.speed}
          onChange={(e) => setMonSpeed(Number(e.target.value))}
          type="text"
          name="monSpeed"
          id="monSpeed"
        />
      </div>
      <div className="monStats">
        <div className="monAtk">
          <label htmlFor="monAtk">Attack: </label>
          <input
            value={monster.monAtk}
            onChange={(e) => setMonAtk(Number(e.target.value))}
            type="text"
            name="monAtk"
            id="monAtk"
          />
        </div>
        <div className="monDef">
          <label htmlFor="monDef">Defense: </label>
          <input
            value={monster.monDef}
            onChange={(e) => setMonDef(Number(e.target.value))}
            type="text"
            name="monDef"
            id="monDef"
          />
        </div>
        <div className="monSPAtk">
          <label htmlFor="monSPAtk">Special Attack: </label>
          <input
            value={monster.monSPAtk}
            onChange={(e) => setMonSPAtk(Number(e.target.value))}
            type="text"
            name="monSPAtk"
            id="monSPAtk"
          />
        </div>
        <div className="monSPDef">
          <label htmlFor="monSPDef">Special Defense: </label>
          <input
            value={monster.monSPDef}
            onChange={(e) => setMonSPDef(Number(e.target.value))}
            type="text"
            name="monSPDef"
            id="monSPDef"
          />
        </div>
        <div className="submit">
          <button type="submit">Create!</button>
        </div>
      </div>
    </div>
  );
}

export default Monsters;
