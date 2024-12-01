import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto relative">
            <Navbar></Navbar>
            <div className='min-h-[50vh]'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;