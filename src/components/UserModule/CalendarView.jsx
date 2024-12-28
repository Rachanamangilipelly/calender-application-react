import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import '../../styles/UserModule.css';

const CalendarView = () => {
  const [date, setDate] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="calendar-view">
        <h2>Calendar View</h2>
        <StaticDatePicker value={date} onChange={(newDate) => setDate(newDate)} />
      </div>
    </LocalizationProvider>
  );
};

export default CalendarView;