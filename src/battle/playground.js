import React from 'react';


const playground = props =>{
    
    const layoutStyle = {
        // border: '1px solid black',
        // margin: '0px 20px',
        // padding: '20px',
        background: '#D80700',
        display: 'flex',
        // flexDirection: 'row',
        justifyContent:'center'

    }

    const wholeStyle = {
        border: '1px solid black',
        margin: '0px 20px',
        padding: '20px',
        background: '#D80700',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'white'
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent:'center'
    }
    
    return(
        <div style={wholeStyle}>
        <h1>Welcome to the BattleGround!</h1>
            <hr />
            <div style={layoutStyle}>
                {props.children}
            </div>
        </div>
    )
}

export default playground;