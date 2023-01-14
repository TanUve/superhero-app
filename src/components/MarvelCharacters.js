import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";
import NavBar from "./NavBar";
import Header from "./Header";

function MarvelCharacters() {

    const server = `http://localhost:3001/superheroes`;
    const navigate = useNavigate();
    const [superheros, setSuperheros] = useState([]);

    useEffect(() => {
        const getSuperheros = async () => {
            const respSuperData = await axios.get(server);
            setSuperheros(respSuperData.data);
        }
        getSuperheros();
    }, [])
    return (
        <>
            <div className="headerContainer">
                <Header />
            </div>
            <div>
                <NavBar />
            </div>
            <div className="characterContainer">

                <div className="characters">

                    {superheros.filter((superhero) => superhero.publisher !== "DC Comics" && superhero.publisher === "Marvel Comics").map((superhero) =>
                        <div className="character">
                            <img className="modifyBtn" onClick={() => navigate(`/modify/${superhero.id}`)} src="https://cdn-icons-png.flaticon.com/512/9351/9351482.png" width="30px" />

                            <img className="deleteBtn" src="https://cdn-icons-png.flaticon.com/512/6711/6711543.png" width="30px" alt="not found" />
                            <div onClick={() => { navigate(`/${superhero.id}`) }}>
                                <img className="superImg" src={superhero.image} alt="NOT FOUND" width="250px" />
                                <p>{superhero.name}</p>
                                <p>{superhero.first_appearance}</p>
                            </div>
                        </div>
                    )}


                </div>
                <div />

            </div>
        </>

    );
}


export default MarvelCharacters;
