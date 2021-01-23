
import './App.css';
import {useState} from "react";

function App() {
  const [weight, setWeight] = useState(89);
  const [bottles, setBottles] = useState(3);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState("male");
  const [ABLevel, setABLevel] = useState(0.4);

    function calculate(e) {
      e.preventDefault();
      let alcoholLevel = 0;
      let litres = bottles * 0.33;
      let grams = litres * 8 * 4.5;
      let burning = weight / 10;
      let gramsLeft = grams - (burning * time); 

      if (gender === "male") {
        alcoholLevel = gramsLeft / (weight * 0.7);
      } else {
        alcoholLevel = gramsLeft / (weight * 0.6);
      }
      setABLevel(alcoholLevel);
    }

  return (
    <section>
    <h2>Calculating alcohol blood level</h2>
    <form onSubmit={calculate}>
    <div className="form-row text-center">
      <div className="col-md-4">
        <label>Weight(KG)</label>
        <input className="form-control text-center" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>

      <div className="col-md-4">
        <label>Bottles</label>
        <input className="form-control text-center" type="number" step="1" value={bottles} onChange={e => setBottles(e.target.value)}/>
      </div>

      <div className="col-md-4">
        <label>Time(Hours)</label>
        <input className="form-control text-center" type="number" step="1" value={time} onChange={e => setTime(e.target.value)}/>
      </div>
    </div>
    <div>
      <label className="col-12 text-center">Gender</label>
      <div className="text-center">
      <label style={{marginRight: 20}}><input type="radio" value="male" name="gender" defaultChecked onChange={e => setGender(e.target.value)}/>Male</label>
      <label><input type="radio" value="female" name="gender" onChange={e => setGender(e.target.value)}/>Female</label>
      </div>
    </div>

    <div className="font-weight-bold text-center">
      <output className="borders">{ABLevel.toFixed(1)}</output>
    </div>

    <div className="col-12 text-center mt-2">
    <button className="btn btn-primary">Calculate</button>
    </div>
    </form>
    </section>
  );
}

export default App;
