import React from 'react';
import Card from "../Card/Card"

import "./card-list.styles.css"

const CardList = props => 
        <div className="card-list">
            {
                props.monsters.map((monster,i) =>
                    <Card key={i} monster={monster}/>
                )
            }
        </div>



export default CardList