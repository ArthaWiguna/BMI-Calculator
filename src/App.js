import { useState } from "react";
import "./App.css";
import underweight from "./asset/underweight.png";
import healthyweight from "./asset/healthy.png";
import overweight from "./asset/overweight.png";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [massage, setMassage] = useState("");
  let imgBMI;

  const calculateBMI = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please Complate The Form Field");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMassage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMassage("You are in healthy weight");
      } else {
        setMassage("You are overweight");
      }
    }
  };

  if (bmi < 1) {
    imgBMI = null;
  } else if (bmi < 25) {
    imgBMI = underweight;
  } else if (bmi >= 25 && bmi < 30) {
    imgBMI = healthyweight;
  } else {
    imgBMI = overweight;
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="card col-10 col-md-4 h-50 p-4 shadow-lg rounded-3">
            <h3 className="text-center fs-4 fw-bold">BMI Calculator</h3>
            <form onSubmit={calculateBMI}>
              <div className="mb-3">
                <label for="weight" className="form-label fw-lighter">
                  Weight (libs)
                </label>
                <input
                  onChange={(e) => setWeight(e.target.value)}
                  value={weight}
                  type="text"
                  className="form-control"
                  id="weight"
                />
              </div>
              <div class="mb-3">
                <label for="height" className="form-label fw-lighter">
                  Height (inc)
                </label>
                <input
                  onChange={(e) => setHeight(e.target.value)}
                  value={height}
                  type="text"
                  class="form-control"
                  id="height"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  class="btn btn-dark d-block w-75 mt-4 m-auto fw-bold"
                >
                  Submit
                </button>
                <button
                  onClick={reload}
                  type="submit"
                  class="btn btn-outline-dark w-75 mt-3 m-auto fw-bold"
                >
                  Reload
                </button>
              </div>
              <div className="text-center">
                <h4 className="mt-4 fs-6 fw-bold">BMI Value : {bmi}</h4>
                <p className="fs-6 fw-light">{massage}</p>
              </div>
              <div className="text-center">
                <img className="w-25" src={imgBMI} alt="avatar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
