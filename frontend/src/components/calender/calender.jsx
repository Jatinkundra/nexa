import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './calender.css';

export default function Calender() {
    const value = [new Date(2023, 10, 14)];
    const [date, setDate] = useState(value);


    return (
        <div className='calendar-container'>
            <Calendar onChange={setDate} value={date}/>
        </div>
    )
}
