import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";
import NavBar from "./NavBar";
import AllCharacters from "./AllCharacters";
import Header from "./Header";



function Home() {

    return (
        <>
        <Header/>
    
        <AllCharacters/>
        </>

    );
}


export default Home;
