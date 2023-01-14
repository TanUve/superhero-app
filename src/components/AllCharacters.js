import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";
import '../assets/characters.css'
import NavBar from "./NavBar";


function AllCharacters() {

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

    const deleteCharacter = async (id) => {
        await axios.delete(`http://localhost:3001/superheroes/${id}`);
        setSuperheros(superheros.filter((superhero) => superhero.id !== id));

    }


    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="characterContainer">

                <div />

                <div className="characters">
                    {superheros.map((superhero) =>
                        <div className="character">
                            <div className="btns">
                                <img className="modifyBtn" onClick={ ()=>navigate(`/modify/${superhero.id}`)} src="https://cdn-icons-png.flaticon.com/512/9351/9351482.png" width="30px" />
                                <img className="deleteBtn" onClick={() => deleteCharacter(superhero.id)} src="https://cdn-icons-png.flaticon.com/512/6916/6916028.png" width="30px" alt="not found" />
                            </div>
                            <div key={superhero.id} onClick={() => { navigate(`/${superhero.id}`) }}>
                                <img className="superImg" src={superhero.image} alt="NOT FOUND" />
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


export default AllCharacters;
