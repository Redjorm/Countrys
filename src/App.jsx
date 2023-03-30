import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ErrorFetch from "./components/ErrorFetch";

function App() {
  const [country, setcountry] = useState();
  const [nameCountry, setNameCountry] = useState("venezuela");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${nameCountry}`)
      .then((res) => {
        setcountry(res.data[0]);
        setHasError(false);
      })

      .catch((err) => {
        console.log(err);
        setHasError(true);
      });
  }, [nameCountry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameCountry = e.target.nameCountry.value;
    setNameCountry(nameCountry);
  };

  console.log(nameCountry);

  return (
    <div className="App">
      <div className="container">
        {hasError ? <ErrorFetch /> : <Card country={country} />}

        <form className="form" onSubmit={handleSubmit}>
          <input className="input-text" type="text" id="nameCountry" />
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
