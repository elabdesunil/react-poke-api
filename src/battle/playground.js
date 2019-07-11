import React from 'react';


const playground = props =>{
    
    const layoutStyle = {
        border: '1px solid black',
        margin: '0px 20px',
        padding: '20px',

    }
    
    return(
        <div style = {layoutStyle}>
        <h1>Welcome to the BattleGround!</h1>
        <hr/>
            {props.children}
        </div>
    )
}

export default playground;