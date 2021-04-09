import React, { useState, useEffect } from 'react';
import data from './data';
function App() {
  
  const [para, setPara] = useState(0);
  const [text, setText] = useState([]);

  const [info, setInfo] = useState(false);

  const handleOnChange = (e) =>{
    const newPara = e.target.value;
    setPara(newPara);
  }

  const limitPara = (para) =>{
    if(para < 0)  return 0;

    if(para > data.length - 1) return data.length - 1;

    return para;
  }
  
  let timeOutOff = () => {
    setTimeout( () => setInfo(false), 3000);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const textPara = data.slice(0, limitPara(para));
    setText(textPara);

    para < 0 && setInfo(true);
    para > data.length - 1 && setInfo(true);

  }

  useEffect(() => {
    clearTimeout(timeOutOff);
    timeOutOff();
  }, [info])

  return (
      <section className='section-center'>
          <h3>Tired of boring</h3>
          <form className="lorem-form" onSubmit={handleSubmit}>
              <label htmlFor='para'>
                Paragraphs
              </label>
              <input type="number" name='para' value={para} onChange={(e) => handleOnChange(e)} />
              <button type='submit' className='btn'>generate</button>
          </form>
          {info && <p>Warning</p>}
        <article>
            {
              text.map((item, index) =>(
                <p className='result' key={index}>
                  {item}
                </p>
              ))
            }
        </article>
      </section>
    );
}

export default App;
