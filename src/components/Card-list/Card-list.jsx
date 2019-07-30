import React from 'react';

const CardList = (props) => {
    return(
        <>
            {
                props.monsters.map((monster,i) =>
                    <div key={i}>
                        <h1>{monster.name}</h1>
                        <h2>{monster.email}</h2>
                    </div> 
                )
            }
        </>
    )
}


export default CardList