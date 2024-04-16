import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { InputBox } from "./component/index";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("ngn");
  const [convertedAmount, setConvertedAmount] = useState("");

  // using the custom hook useCurrencyInfo we created to call the data using the api collected
  const currencyInfo = useCurrencyInfo(from);
  // getting the values of the key inputed
  const options = Object.keys(currencyInfo);

  // swapping the values on the frontend
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // converting the currency multiplying the amount inputed by the value of the key inputed in the currencyInfo[to]
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="home d-flex justify-content-center align-items-center">
        <div className="bg-white border-0 rounded p-4 bg-opacity-50 bod">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="d-flex justify-content-center position-relative">
            <button 
            className="w-25 border border-2 bg-primary rounded p-1 text-white border-white swap fw-bold"
            onClick={()=> swap()}
            >
              Swap
            </button>
          </div>
          <div className="my-1">
            <InputBox
              label="to"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              // onAmountChange={(convertedAmount) => setAmount(amount)}
              selectedCurrency={to}
              amountDisabled
            />
          </div>
          <button 
          type="submit"
          className="w-100 border border-0 bg-primary p-2 rounded mt-1 text-white fw-bold submit"
          >Submit {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
          
        </div>
      </div>
    </>
  );
}

export default App;
