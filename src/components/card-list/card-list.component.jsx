import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => (
    <div className='card-list'>
        {props.sgooding.map(sg => (
            <Card key={Math.floor(Math.random() * 10000000000000)} sg={sg} />
        ))
        }
    </div>
);