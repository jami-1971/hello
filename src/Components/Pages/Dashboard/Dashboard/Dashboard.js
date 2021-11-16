import { Grid , Container} from '@mui/material';
import React from 'react';

const Dashboard = () => {
    return (
        <Container>
        <Grid container spacing={2}>
        <Grid item xs={12} md={5}>

        </Grid>
        <Grid item xs={12} md={7}>

        </Grid>
        </Grid>
        </Container>
    );
};

export default Dashboard;