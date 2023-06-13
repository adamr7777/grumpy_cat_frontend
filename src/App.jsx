import React, {useContext} from 'react';

import {ContextObj} from './AiContext';
import Navbar from './Navbar';
import Footer from './Footer';
import MainContent from './MainContent';


export default function App() {
    const context = useContext(ContextObj);
    const {message} = context;
    return (
        <>
            <Navbar/>
            <MainContent/>
            <Footer/>
        </> 
    );
};