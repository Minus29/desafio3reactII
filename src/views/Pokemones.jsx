import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';



const Pokemones = () => {
    const [idPersonaje, setIdPersonaje] = useState("");
    const [pokemones, setPokemones] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        async function obtenePokemones() {
            const res = await fetch(' https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
            const data = await res.json();
            setPokemones(data.results);
        }
        obtenePokemones();

    }, [])

    const verDetalle = () => {
        navigate(`/pokemons/${idPersonaje}`);
    }


    return (
        <div className="personajeView">
            <h1>Selecciona tu personaje</h1>
            <Form.Select aria-label="Default select example" name="id" id="id" onChange={(e) => setIdPersonaje(e.target.value)}>
                <option value="">Pokemones</option>
                {
                    pokemones.map((pokemon, index) => {
                        return <option key={index} value={index}>{pokemon.name}</option>
                    })
                }
            </Form.Select>
            <Button variant="dark" onClick={(e) => verDetalle(e)}>Detalle</Button>
        </div>
    )
}

export default Pokemones