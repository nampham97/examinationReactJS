import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  //eslint-disable-next-line
  const [info, setInfo] = useState(data);
  const [current, setCurrent] = useState(0);

 
  const checkIndex = (num) => {
    if(num > data.length - 1){
      return 0;
    }
    if(num < 0 ){
      return data.length -1;
    }
    return num;
  }
  const handlePrev = () => setCurrent(checkIndex(current - 1));
  const handleNext = () => setCurrent(checkIndex(current + 1));  
  
  const isClass = (position_current, position_article) => {
    if(position_current === position_article){
      return "activeSlide";
    }
    if(position_article === position_current - 1 || (position_current === 0 && position_article === info.length - 1)) return "lastSlide";

    return "nextSlide";
  }

  useEffect( () =>{
      //auto slide
      let slideInterval = setInterval( () => {
        setCurrent( (oldCurrent)=> {
          let newCurrent = oldCurrent + 1;
          if(newCurrent > data.length - 1){
            newCurrent = 0;
          }
          return newCurrent;
        });
      }, 3000);

      return () => clearInterval(slideInterval);
  }, [current]);
  


  return <main className='section'>
            <div className='title'>
                <h2><span>/</span> Reviews</h2>
            </div>

            <div className='section-center'>

                  {info.map( (item, idx) => {
                        const {image, name, title, quote} = item;
                        return <article key={idx} className={isClass(current,idx)}>
                                <img src={image} alt={name}  className='person-img' />
                                <h4>{name}</h4>
                                <p className='title'>{title}</p>
                                <p className='quote'>{quote}</p>
                                <FaQuoteRight className='icon'/>
                              </article>
                  })}

                  <button  className="prev" onClick={() => handlePrev()}> <FiChevronLeft /></button>
                  <button  className="next" onClick={() => handleNext()}><FiChevronRight /></button>
            </div>
  </main>
}

export default App;
