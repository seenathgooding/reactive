import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="apples" src={`https://picsum.photos/id/${Math.floor(Math.random() * 10)}/200/300`} />
        <h2>{props.sg.name}</h2>
        <p>{props.sg.email}</p>
    </div>
)