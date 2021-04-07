import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
 
  const [question, setQuestion] = useState(data);

  return <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section>
            {question.map((item) =>{
              return <SingleQuestion key={item.id} {...item} />
            })}
        </section>
      </div>
  </main>
}

export default App;
