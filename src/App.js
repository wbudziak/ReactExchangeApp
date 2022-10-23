import "./App.css";
import { useEffect, useState } from "react";
import Select from "./components/Select";
import InputNumber from "./components/InputNumber";

const BASE_URL = "https://api.exchangerate.host/latest";

function App() {
  const [rates, setRates] = useState("");
  const [ratesValue, setRatesValue] = useState("");

  const [firstCurrency, setFirstCurrency] = useState("EUR");
  const [secondCurrency, setSecondCurrency] = useState("PLN");

  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setSecondValue] = useState(1);

  const [flag, setFlag] = useState(true);

  // FETCH DATA FROM API

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setRates([Object.keys(data.rates)]);
        setRatesValue(data.rates);
      });
  }, []);

  useEffect(() => {
    if (flag) {
      setSecondValue(
        (
          (firstValue * ratesValue[secondCurrency]) /
          ratesValue[firstCurrency]
        ).toFixed(2)
      );
    } else if (flag === false) {
      setFirstValue(
        (
          (secondValue * ratesValue[firstCurrency]) /
          ratesValue[secondCurrency]
        ).toFixed(2)
      );
    }
  }, [
    firstCurrency,
    firstValue,
    secondCurrency,
    secondValue,
    flag,
    ratesValue,
  ]);

  //  CURRENCY HANDLER

  const firstCurrencyHandler = (e) => {
    setFirstCurrency(e.target.value);
    setFlag(true);
  };
  const secondCurrencyHandler = (e) => {
    setSecondCurrency(e.target.value);
    setFlag(false);
  };

  // CURRENCY VALUES HANDLER

  const firstValueHandler = (value) => {
    setFirstValue(value);
    setFlag(true);
  };
  const secondValueHandler = (value) => {
    setSecondValue(value);
    setFlag(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <InputNumber
            value={firstValue}
            valueCallBack={firstValueHandler}
            onChange={firstValueHandler}
          />
          <Select
            onChange={firstCurrencyHandler}
            rates={rates}
            options={firstCurrency}
          />
        </div>
        <div>
          <InputNumber
            value={secondValue}
            valueCallBack={secondValueHandler}
            onChange={firstValueHandler}
          />

          <Select
            onChange={secondCurrencyHandler}
            rates={rates}
            options={secondCurrency}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
