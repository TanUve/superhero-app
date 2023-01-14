import { useEffect, useState } from "react";
import React from 'react';
import Header from "./Header";
import NavBar from "./NavBar";
import axios from 'axios';
import '../assets/newcharacter.css'
import { useParams } from "react-router";


function NewCharacter() {

    const [superhero, setSuperhero] = useState([]);
    const [alter_ego, setAlter_ego] = useState();
    const [first_appearance, setFirst_appearance] = useState("");
    const [image, setImage] = useState("");
    const [characters, setCharacters] = useState("");
    const { id } = useParams();
    const server = `http://localhost:3001/superheroes/${id}`;

    useEffect(() => {
        const getSuperhero = async () => {
            const respSuperData = await axios.get(server);

            setSuperhero(respSuperData.data);
            setAlter_ego(respSuperData.data.alter_ego);
            setFirst_appearance(respSuperData.data.first_appearance);
            setImage(respSuperData.data.image);
            setCharacters(respSuperData.data.characters);
        }
        getSuperhero();
    }, [])

    const modifyCharacter = async () => {

        const newChar = {
            alter_ego: alter_ego,
            first_appearance: first_appearance,
            image: image,
            characters: characters
        };
        const response = await axios.patch(server, newChar);

        if (response.status === 201) {
            let currentSuperhero = superhero;
            currentSuperhero.push(response.data);
            setSuperhero(currentSuperhero);
            document.getElementById("saveBtn").disabled = true;

        }
    }

    return (
        <>
            <div className="headerContainer">
                <Header />
            </div>
            <div>
                <NavBar />
            </div>
            <div className="newContainer">
                <div />
                <div className="newDetails">
                    <p className="title">Edit character</p>
                    <div className="divDetails">
                        <div className="pContainer">
                            <p>NAME: </p>
                            <p>PUBLISHER: </p>
                            <p>ALTER EGO:  </p>
                            <p>FIRST APPEARANCE:  </p>
                            <p>IMAGE:  </p>
                            <p>CHARACTERS: </p>
                        </div>
                        <div className="inputs">
                            <p className="pInputs"> {superhero.name}</p>
                            <p className="pInputs">{superhero.publisher}</p>
                            <input type="text" defaultValue={superhero.alter_ego} onChange={(e) => setAlter_ego(e.target.value)} />
                            <input type="text" defaultValue={superhero.first_appearance} onChange={(e) => setFirst_appearance(e.target.value)} />
                            <input type="text" defaultValue={superhero.image} onChange={(e) => setImage(e.target.value)} />
                            <input type="text" defaultValue={superhero.characters} onChange={(e) => setCharacters(e.target.value)} />
                        </div>
                    </div>
                    <button id="saveBtn" onClick={modifyCharacter}> SAVE</button>
                </div>
                <div />
            </div>


        </>

    );
}


export default NewCharacter;
