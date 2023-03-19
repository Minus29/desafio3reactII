import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const DetallePersonaje = () => {
    const [personaje, setPersonaje] = useState({});
    const { id } = useParams();

    const getPersonaje = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await res.json();
        setPersonaje(data);
        console.log(data);
    }

    useEffect(() => {
        getPersonaje();

    }, [id])

    return (
        <div className='detalleView'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> {personaje.name} </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item> {personaje.especies} </ListGroup.Item>
                    <ListGroup.Item> <strong>habilidad Especial:</strong>  {personaje.id} </ListGroup.Item>
                    <ListGroup.Item> <strong>habilidad Segundaria: </strong> {personaje.order}  </ListGroup.Item>
                    <ListGroup.Item> <strong>Alto </strong> {personaje.height}  </ListGroup.Item>
                    <ListGroup.Item> <strong>Experiencia: </strong> {personaje.base_experience}  </ListGroup.Item>
                </ListGroup>
            </Card>
        </div >
    )
}

export default DetallePersonaje