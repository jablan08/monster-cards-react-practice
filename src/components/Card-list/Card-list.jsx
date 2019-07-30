import React from 'react';
import "./card-list.styles.css"

const CardList = props => 
        <div className="card-list">
            {
                props.monsters.map((monster,i) =>
                    <h1 key={i}>{monster.name}</h1>
                )
            }
        </div>



export default CardList