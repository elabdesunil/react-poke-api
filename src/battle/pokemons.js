import React from 'react';


const pokemons = props =>{

    let name = props.name;
    const ability = props.ability;
    const id = props.id

    const style = {
        textTransform: 'uppercase'
    }


    return (
        <div style ={style}>
            <strong>Name:</strong> {name[id].name} {' '}
            <strong>Ability:</strong> {ability[id].name}
            {console.log('pokeons.js', name[id].name)}
           
        </div>
    )
}

export default pokemons;