import React, { Link } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ReactCalendar.scss';

const ReactCalendar = ({ date, onChange}) => {

  return (
    <div>
        <Calendar className='calendar' onChange={onChange} value={date}/>
    </div>
  )
}

export default ReactCalendar;