import { Grid , Container} from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';
import Papers from '../Paper/Papers';
import us from '../../../../images.jpg'
import './Dashboard.css'

const Dashboard = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Container>
        <Grid container spacing={2} className="m-5">
        <Grid item xs={12} md={5}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md={7}>
          <img className="image" src={us} alt="" />
        </Grid>
        </Grid>
        <Papers date={date} ></Papers>
        </Container>
    );
};

export default Dashboard;