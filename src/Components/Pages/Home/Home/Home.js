import React from 'react';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
// import UsMoments from '../../Drawer/Drawer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Dashboard></Dashboard>
            {/* <UsMoments></UsMoments> */}
        </div>
    );
};

export default Home;
