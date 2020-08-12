import React from 'react';
import { ClockAndDate } from '../styled/styledClock';


const Clock = ({ time }) => {
  return (
    <ClockAndDate className="clock">
      {time.toLocaleString()}
    </ClockAndDate>
  );
}

export default Clock;