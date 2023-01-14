import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import Header from "./Header";
import NavBar from "./NavBar";
import '../assets/characterdetails.css'

function Character() {
    const { id } = useParams();
    const [superhero, setSuperhero] = useState([]);
    const server = `http://localhost:3001/superheroes/${id}`;


    useEffect(() => {
        const getSuperhero = async () => {
            const respSuperData = await axios.get(server);
            setSuperhero(respSuperData.data);
        }
        getSuperhero();
    }, [])
    return (
        <>
            <div className="headerContainer">
                <Header />
            </div>
            <div>
                <NavBar />
            </div>

            <div className="characterDetails">
                <div className="imgDetails">
                    <p>{superhero.name}</p>
                    <img src={superhero.image} alt="NOT FOUND" width="300px" />
                </div>
                <div className="info">
                    <p>Publisher: {superhero.publisher}</p>
                    <p>First appearance: {superhero.first_appearance}</p>
                    <p>Characters: {superhero.characters}</p>
                    <p>Alter ego: {superhero.alter_ego}</p>
                </div>
            </div>
            <div />

        </>

    );
}

export default Character;
