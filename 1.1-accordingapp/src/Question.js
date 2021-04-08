import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {

  const [expand, setExpand] = useState(false);

  const handleExpand = () =>{
    setExpand(!expand);
  }

  return <article className='question'>
            <header>
              <h4>{title}</h4>
              <button className='btn' onClick={() => handleExpand()}>{expand ? <AiOutlineMinus/> : <AiOutlinePlus />}</button>
            </header>
              {expand && <p> {info} </p>}
    </article>

};

export default Question;
