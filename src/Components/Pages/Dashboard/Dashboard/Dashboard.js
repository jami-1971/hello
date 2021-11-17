import { Grid , Container} from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';
import Papers from '../Paper/Papers';

const Dashboard = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Container>
        <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md={7}>

        </Grid>
        </Grid>
        <Papers date={date}></Papers>
        </Container>
    );
};

export default Dashboard;