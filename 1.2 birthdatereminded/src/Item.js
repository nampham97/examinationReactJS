import React from 'react'

const Item = ({imgSrc, name, yearOld}) => {
    const imgstyle = {
        width: '100px',
        height: '100px',
        borderRadius : '50% 50%'
    }
    const infostyle = {
        width: '100%',
        paddingLeft: '20px',
        alignSelf: 'center'
    }
    const itemsStyle ={
        display: 'flex'
    }
    const divImg ={
        position: 'relative',
        top: '5px',
        left: '5px',
        padding: '10px 10px'
    }
    return (
        <div className="items" style={itemsStyle}>
            <div className="imgs" style={divImg}>
                <img style={imgstyle} src={imgSrc} alt="anhavatar" />
            </div>
            <div className="info" style={infostyle}>
                <h4 style={{'fontFamily' : 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}}> {name}</h4>
                <p style={{'marginTop': '-15px'}}>{yearOld}</p>
            </div>

        </div>
    )
}

export default Item
