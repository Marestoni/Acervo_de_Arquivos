import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './home.css'
import NavBar from '../../components/navbar'
import {useSelector} from 'react-redux'

function Home(){
    return(
        <>
            <NavBar/>
            <h1>{useSelector(state => state.usuarioEmail)}</h1>
        </>
    );
}

export default Home;