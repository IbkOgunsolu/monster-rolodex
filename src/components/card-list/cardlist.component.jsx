import * as React from 'react';
import './cardlist.style.css';
import {Card} from '../card/card.component.jsx';


export const CardList = (props) => {
    return <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}></Card>
        ))}
    </div>
}
