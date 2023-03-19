import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetallePersonaje = () => {
    const [personaje, setPersonaje] = useState({});
    const { id } = useParams();

const getPersonaje = async() =>{
    const res = await fetch(` https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await res.json();
    setPersonaje(data);
    console.log(setPersonaje);
}

    useEffect(() => {
      getPersonaje();

    }, [])


    return (
        <div className='detalleView'>
          {/*   <div>
                <img src={""} alt="imagen personaje" />
            </div>
            <div className='datosPersonajes'>
                <p>
                    <strong>Nombre:</strong> {personaje.name}
                </p>
                <p>
                    <strong>Nombre:</strong> {personaje.name}
                </p>
                <p>
                    <strong>Nombre:</strong> {personaje.name}
                </p>
                <p>
                    <strong>Nombre:</strong> {personaje.name}
                </p>
            </div> */}
        </div>
    )
}

export default DetallePersonaje