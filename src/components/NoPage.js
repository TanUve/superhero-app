
import React from 'react';
import '../assets/nopage.css'
import '../assets/characters.css'
import Header from './Header';
import NavBar from "./NavBar";


function AllCharacters() {


    return (
        <>
            <div className="headerContainer">
                <Header />
            </div>
            <div>
                <NavBar />
            </div>
            <div className="noPageContainer">

                <p className='noPage'>PAGE NOT FOUND</p>


            </div>
        </>

    );
}


export default AllCharacters;
