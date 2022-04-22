import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        {/* <img alt="apples" src={`https://picsum.photos/id/${Math.floor(Ma.tolower()th.random() * 10)}/200/300`} /> */}
        <img class="center" width='200px' height='75px' alt="flags" src={`https://flagcdn.com/${props.sg.alpha2Code.toLowerCase()}.svg`} />
        <h2>{props.sg.name}</h2>
        {/* <p>{props.sg.flag}</p> */}
        <p>Demonym: {props.sg.demonym}</p>
        <p>Native Name: {props.sg.nativeName}</p>
        <p>Population = {props.sg.population}</p>
        <p>Sub-Region : {props.sg.subregion}</p>
        <p>Capital : {props.sg.capital}</p>

        {/* <p>{props.sg.alpha2Code}</p> */}
    </div>
)