import React from 'react'

const btnClear = ({clearData, restoreData, le}) => {

    const divBtn = {
        'textAlign': 'center',
        margin: '10px',
        display: 'flex'
    }

    return (
        <div>
        <div style={divBtn}>
            <button id="btnClear" onClick={clearData}>Clear all</button>
            <button id="btnRestore" onClick={restoreData}>Restore</button>
        </div>
            <div className='warmRestore'><h4>Dữ liệu đầy đủ, không cần phục hồi <i className="fa fa-smile-o" aria-hidden="true"></i></h4></div>
        </div>
    )
}

export default btnClear
