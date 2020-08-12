import React from 'react';
import { TableforTable, TableHeader, TableCell, Flags } from '../styled/styledTable';


const Table = ({ nationalAndCurrencys }) => {

  return (
    <TableforTable>
      <thead>
        <tr>
          <TableHeader>Waluta</TableHeader>
          <TableHeader>Sprzedajesz</TableHeader>
          <TableHeader>Kupujesz</TableHeader>
        </tr>
      </thead>

      <tbody>
        {nationalAndCurrencys.map(item => (
          <tr key={item.code}>
            <TableCell key={item.currency}><Flags src={item.flag} alt="national flag" /> {item.code}</TableCell>
            <TableCell key={item.bid}>{item.bid} zł</TableCell>
            <TableCell key={item.ask}>{item.ask} zł</TableCell>
          </tr>
        ))}
      </tbody>
    </TableforTable>
  );
}

export default Table;