import React from 'react';
import { useNavigate } from 'react-router';
import'../assets/header.css'


function Header() {

    const navigate=useNavigate();


    return (
        < div className='headersContainer'>
            <div />
            <div onClick={()=>navigate('/')}>SUPERHEROS</div>
            <div />
        </div>

    );
}


export default Header;
