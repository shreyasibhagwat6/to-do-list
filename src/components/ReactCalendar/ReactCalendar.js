import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ReactCalendar = ({ date, onChange}) => {

  return (
    <div>
      <Calendar onChange={onChange} value={date}/>
    </div>
  )
}

export default ReactCalendar;