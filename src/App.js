import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [val, setValue] = useState("");
  const backspace = () => {
    try {
      setValue(val.slice(0, -1));
      // here it removes the last ele but if
    } catch (error) {
      setValue("");
    }
  };
  const Calculate = () => {
    try {
      setValue(eval(val));
    } catch (error) {
      setValue("Error");
    }
  };

  return (
    <div align="center">
      <h1 className="title">Calculator</h1>
      <div className="container" align="center">
        <input
          type="text"
          className="ip"
          placeholder="press the keys to calculate"
          value={val}
        />
        <div className="row">
          <div className="col-3">
            <button
              className="btn  "
              value="1"
              onClick={(e) => setValue(val + e.target.value)}
            >
              1
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn"
              value="2"
              onClick={(e) => setValue(val + e.target.value)}
            >
              2
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn"
              value="3"
              onClick={(e) => setValue(val + e.target.value)}
            >
              3
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-light text-primary shadow py-4 px-2 fs-4 bg-danger"
              value="C"
              onClick={() => backspace()}
            >
              C/CE
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <button
              className="btn "
              value="4"
              onClick={(e) => setValue(val + e.target.value)}
            >
              4
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn "
              value="5"
              onClick={(e) => setValue(val + e.target.value)}
            >
              5
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn"
              value="6"
              onClick={(e) => setValue(val + e.target.value)}
            >
              6
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-light text-primary shadow p-4  fs-4 "
              value="/"
              onClick={(e) => setValue(val + e.target.value)}
            >
              /
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <button
              className="btn "
              value="7"
              onClick={(e) => setValue(val + e.target.value)}
            >
              7
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn "
              value="8"
              onClick={(e) => setValue(val + e.target.value)}
            >
              8
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn"
              value="9"
              onClick={(e) => setValue(val + e.target.value)}
            >
              9
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-light text-primary shadow p-4  fs-4 "
              value="+"
              onClick={(e) => setValue(val + e.target.value)}
            >
              +
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <button
              className="btn "
              value="."
              onClick={(e) => setValue(val + e.target.value)}
            >
              .
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn "
              value="0"
              onClick={(e) => setValue(val + e.target.value)}
            >
              0
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn bg-info "
              value="="
              id="equal"
              onClick={() => Calculate()}
            >
              =
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-light text-primary shadow p-4  fs-4 "
              value="-"
              onClick={(e) => setValue(val + e.target.value)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
