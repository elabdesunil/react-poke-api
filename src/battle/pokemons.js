import React from 'react';


const pokemons = props =>{

    let name = props.name;
    const ability = props.ability;
    const id = props.id

    const style = {
        textTransform: 'uppercase',
        padding: '5px',
        border: '1px solid white',
        margin: '5px',
    }


    return (
        <div style={style}>
            <p>
            <strong>Name: </strong> {name[id].name} {' '}
            </p>
            <p>
            <strong>Ability: </strong> {ability[id].name} {'  '}
            </p>
            <p>
            <strong>Base Experience: </strong> {props.base_experience}{'  '}

            </p>

            <p>
            <strong>Height: </strong> {props.height} {'  '}

            </p>

            <p>
            <strong>Weight: </strong> {props.weight} {'  '}

            </p>
            <p>
            <strong>Species: </strong> {props.species} {'   '}

            </p>
            <p>
            <strong>Moves: </strong> {props.moves} {'   '}

            </p>
            {console.log('pokeons.js', name[id].name)}
           
        </div>
    )
}

export default pokemons;