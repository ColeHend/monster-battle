import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import "./monsters.css";
const url = "http://localhost:4000";
function Monsters() {
  let initialValues = {
    monName: "",
    monAtk: 10,
    monDef: 10,
    monSPAtk: 10,
    monSPDef: 10,
    speed: 10,
    moves: [],
    movesKnown: [],
  };
  const onSubmit = (values, { resetForm }) => {
    axios.post(url + "/api/addMonsters", values).then((res) => {
      resetForm();
    });
  };
  const validate = (props) => {};
  console.log(`monster: ${JSON.stringify(initialValues)}`);
  const formik = useFormik({ initialValues, onSubmit, validate });
  return (
    <div id="monster" className="monster">
      <form
        action="/api/addMonster"
        method="post"
        onSubmit={formik.handleSubmit}
      >
        <div id="monHead">Monster Creator</div>
        <div className="monTitle">
          <label className="stat" htmlFor="monName">
            Name:{" "}
          </label>
          <input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.monName}
            className="stat"
            name="monName"
            id="monName"
          />
        </div>
        <div className="speed">
          <label className="stat" htmlFor="speed">
            Speed:{" "}
          </label>
          <input
            value={formik.values.speed}
            onChange={formik.handleChange}
            className="stat"
            type="text"
            name="monSpeed"
            id="monSpeed"
          />
        </div>
        <div className="monStats">
          <div className="monAtk">
            <label className="stat" htmlFor="monAtk">
              Attack:{" "}
            </label>
            <input
              value={formik.values.monAtk}
              onChange={formik.handleChange}
              className="stat"
              type="text"
              name="monAtk"
              id="monAtk"
            />
          </div>
          <div className="monDef">
            <label className="stat" htmlFor="monDef">
              Defense:{" "}
            </label>
            <input
              value={formik.values.monDef}
              onChange={formik.handleChange}
              className="stat"
              type="text"
              name="monDef"
              id="monDef"
            />
          </div>
          <div className="monSPAtk">
            <label className="stat" htmlFor="monSPAtk">
              Special Attack:{" "}
            </label>
            <input
              value={formik.values.monSPAtk}
              onChange={formik.handleChange}
              className="stat"
              type="text"
              name="monSPAtk"
              id="monSPAtk"
            />
          </div>
          <div className="monSPDef">
            <label className="stat" htmlFor="monSPDef">
              Special Defense:{" "}
            </label>
            <input
              value={formik.values.monSPDef}
              onChange={formik.handleChange}
              className="stat"
              type="text"
              name="monSPDef"
              id="monSPDef"
            />
          </div>
          <div className="submit">
            <button type="submit">Create!</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Monsters;
