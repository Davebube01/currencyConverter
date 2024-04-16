import { useId } from "react";

export default function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false,
    className = ''
    
}) {

    const id = useId()

  return (
    <div className={`bg-white rounded d-flex p-2 ${className}`}>
      <div className=" w-50">
        <label 
        htmlFor={id}
        className="text-opacity-50 text-black "
        >{label}</label>

        <input 
        id={id}
        type="number"
        style={{border: 'none'}} 
        className="w-100 bg-transparent py-1 mt-1 fs-sm"
        value={amount} 
        placeholder="Amount"
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        disabled={amountDisabled}
        />

      </div>
      <div className="d-flex justify-content-end flex-column text-end w-50">
        <p className="text-opacity-50 text-black mb-2 w-100 ">Currency Type</p>
        <div >
            <select 
            name="" 
            id=""
            value={selectedCurrency}
            className="rounded px-1 py-1 bg-secondary cursor-pointer mb-2 border-0 bg-opacity-25 fs-sm"
            onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
            disabled={currencyDisabled}
            >
            {
                currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))
            }
            </select>
        </div>
        
      </div>
    </div>
  );
}
