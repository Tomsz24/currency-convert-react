import React from 'react';
import { Wrapper, TableHeader, TableCell, Flags } from '../styled/styledTable';


const Table = ({ nationalAndCurrencys }) => {

  return (
    <Wrapper>
      <thead>
        <tr>
          <TableHeader>Waluta</TableHeader>
          <TableHeader>Sprzedajesz</TableHeader>
          <TableHeader>Kupujesz</TableHeader>
        </tr>
      </thead>

      <tbody>
        {nationalAndCurrencys.map(item => (
          <tr key={item.flag}>
            <TableCell><Flags src={item.flag} alt="national flag" /> {item.code}</TableCell>
            <TableCell>{item.bid} zł</TableCell>
            <TableCell>{item.ask} zł</TableCell>
          </tr>
        ))}
      </tbody>
    </Wrapper>
  );
}

export default Table;