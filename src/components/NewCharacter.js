import { useEffect, useState } from "react";
import React from 'react';
import Header from "./Header";
import NavBar from "./NavBar";
import axios from 'axios';
import '../assets/newcharacter.css'


function NewCharacter() {

    const [superheros, setSuperheros] = useState([]);
    const [name, setName] = useState("");
    const [publisher, setPublisher] = useState("");
    const [alter_ego, setAlter_egoame] = useState("");
    const [first_appearance, setFirst_appearance] = useState("");
    const [image, setImage] = useState("");
    const [characters, setCharacters] = useState("");
    const server = `http://localhost:3001/superheroes`;

    const addNewCharacter = async () => {

        const newChar = {
            name: name,
            publisher: publisher,
            alter_ego: alter_ego,
            first_appearance: first_appearance,
            image: image,
            characters: characters
        };

        const response = await axios.post(server, newChar);


        if (response.status === 201) {
            let oldSuperheros = superheros;
            oldSuperheros.push(response.data);
            setSuperheros(oldSuperheros);
            document.getElementById("createBtn").disabled = true;
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
                    <p className="title">Add a new character</p>
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
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
                            <input type="text" value={alter_ego} onChange={(e) => setAlter_egoame(e.target.value)} />
                            <input type="text" value={first_appearance} onChange={(e) => setFirst_appearance(e.target.value)} />
                            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                            <input type="text" value={characters} onChange={(e) => setCharacters(e.target.value)} />
                        </div>
                    </div>

                    <button id="createBtn" onClick={addNewCharacter}>ADD CHARACTER</button>
                </div>
                <div />
            </div>


        </>

    );
}


export default NewCharacter;
