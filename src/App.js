import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/App.css';
import Clock from './components/Clock';
import Form from './components/Form';
import Table from './components/Table';
import Footer from './components/Footer';
import chf from './img/chf.png';
import aud from './img/aud.png';
import usd from './img/usd.png';
import cad from './img/cad.png';
import eur from './img/eur.png';
import huf from './img/huf.png';
import gbp from './img/gbp.png';
import jpy from './img/jpy.png';
import czk from './img/czk.png';
import dkk from './img/dkk.png';
import nok from './img/nok.png';
import sek from './img/sek.png';

function App() {
  const [time, setTime] = useState(new Date());
  const [currencys, setCurrencys] = useState([]);
  const api = 'http://api.nbp.pl/api/exchangerates/tables/c/?format=json';


  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);

    return function cleanUp() {
      clearInterval(timerId)
    };
  });

  function tick() {
    setTime(new Date());
  }

  useEffect(() => {
    axios.get(api)
      .then(res => {

        const array = res.data[0].rates;
        const rigthArray = array.slice(0, 12);
        setCurrencys(rigthArray);


      })
      .catch(err => console.log(err));
  }, []);


  const nationalAndCurrencys = [
    {
      ...currencys[0],
      flag: usd,
      // code: "USD",
      // bid: 3.6946,
      // ask: 3.7692,
    },
    {
      ...currencys[1],
      flag: aud,
      // code: "AUD",
      // bid: 2.6529,
      // ask: 2.7065
    },
    {
      ...currencys[2],
      flag: cad,
      // code: "CAD",
      // bid: 2.7701,
      // ask: 2.8261
    },
    {
      ...currencys[3],
      flag: eur,
      // code: "EUR",
      // bid: 4.3552,
      // ask: 4.4432,
    },
    {
      ...currencys[4],
      flag: huf
    },
    {
      ...currencys[5],
      flag: chf
    },
    {
      ...currencys[6],
      flag: gbp
    },
    {
      ...currencys[7],
      flag: jpy
    },
    {
      ...currencys[8],
      flag: czk
    },
    {
      ...currencys[9],
      flag: dkk
    },
    {
      ...currencys[10],
      flag: nok
    },
    {
      ...currencys[11],
      flag: sek
    },
  ];


  return (
    <div className="App">
      <Clock time={time} />
      <Form currencys={currencys} />
      <Table nationalAndCurrencys={nationalAndCurrencys} />
      <Footer />
    </div>
  );
}

export default App;
