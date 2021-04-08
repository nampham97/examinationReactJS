import React from 'react';

const Categories = ({category, handle}) => {
  return <div className='btn-container'>
        {category?.length > 0 && category.map( (item, idx) => (
          <button key={idx} className='filter-btn' onClick={() => handle(item)}>{item}</button>
        ) )}
  </div>
};

export default Categories;
