import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const Calender = ({date, setDate}) => {
    
    return (
        <div className="rounded-5">
            <LocalizationProvider dateAdapter={AdapterDateFns} >
    <StaticDatePicker
        orientation="landscape"
        openTo="day"
        date={date}
        shouldDisableDate={isWeekend}
        onChange={(newdate) => {
        setDate(newdate);
        }}
        renderInput={(params) => <TextField {...params} />}
    />
    </LocalizationProvider>
        </div> 
    );
};

export default Calender;