import React from 'react';
import { useState } from 'react';
import { Settings, GetRecive, Span, Input, Select, Score, Button } from '../styled/styledOptions';


const Options = ({ currencys }) => {
  const [amount, setAmount] = useState('');
  const [currencyToConvert, setCurrencyToConvert] = useState("EUR");
  const [finalCurrency, setFinalCurrency] = useState("GBP");
  const [result, setResult] = useState(0);

  const currencysWithPln = [
    ...currencys,
    {
      ask: 1,
      bid: 1,
      code: "PLN",
      currency: "złoty"
    }
  ]


  const calculateResult = () => {
    const firstRate = currencysWithPln.find((currency) => currency.code === currencyToConvert);
    const secondRate = currencysWithPln.find((currency) => currency.code === finalCurrency);

    setResult(
      ((amount * firstRate.bid) / secondRate.ask).toFixed(2)
    )
  }

  return (

    <Settings>
      <GetRecive>
        <Span>Mam:</Span>
        <Input required type="number" placeholder="podaj kwotę" value={amount} onChange={event => setAmount(event.target.value)} />

        <Select id="one" value={currencyToConvert} onChange={({ target }) => setCurrencyToConvert(target.value)} >
          {currencysWithPln.map(option => (
            <option key={option.code} value={option.code}>{option.code}</option>
          ))}
        </Select>
      </GetRecive>

      <GetRecive>
        <Span>Otrzymam:</Span>
        <Score>{result} {finalCurrency}</Score>
        <Select id="two" value={finalCurrency} onChange={({ target }) => setFinalCurrency(target.value)}>
          {currencysWithPln.map(option => (
            <option key={option.code} value={option.code}>{option.code}</option>
          ))}

        </Select>
      </GetRecive>

      <Button onClick={calculateResult}>Przelicz !</Button>

    </Settings>
  );
}

export default Options;