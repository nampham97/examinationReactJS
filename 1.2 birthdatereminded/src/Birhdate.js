import React from 'react'
import BtnClear from './btnClear';
import Item from './Item'

const Birhdate = ({listData, clearData, restoreData}) => {
    console.log('dau');
    let ren = listData?.map( ((item, idx) =>{
        return <Item key={idx} {...item} />
    }) );

    return (
        <div id="birhdatemain">
            <div id="bellinfo">
                <h2>{ren.length} Birth date Remind <i className="fa fa-bell-o" aria-hidden="true"></i></h2>
            </div>
            {ren}
            <BtnClear clearData ={clearData} restoreData={restoreData} le={ren.length}/>
        </div>
    )
}

export default Birhdate
