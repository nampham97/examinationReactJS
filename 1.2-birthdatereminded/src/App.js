import React, { useState } from 'react'
import Birhdate from './Birhdate'
import data from './data.json'
const App = () => {




    const getImg = (name) =>{
        return `https://ui-avatars.com/api/?name=${name}`;
    }
    
    const verData = data?.map( (item) =>{
        
        return {
            ...item,
            "yearOld" : item.yearOld + " years",
            "imgSrc" : getImg(`${item.firstName} + ${item.lastName}`)
        };
    });
    const [state, setstate] = useState(verData);



    console.log(state);

    const clearData = () =>{
        setstate([]);
        document.getElementsByClassName('warmRestore')[0]?.classList.remove('showWarn');
    }
    
    const restoreData = () =>{
        let warRes = document.getElementsByClassName('warmRestore')[0];
        if(state.length === 0){
            setstate(verData);
            warRes?.classList.remove('showWarn');
        }else{
            warRes?.classList.add('showWarn');
        }
        console.log();
    }

    return (
        <div id="mainSide">
            <Birhdate listData={state} clearData={clearData} restoreData={restoreData}/>
        </div>
    )
}

export default App
