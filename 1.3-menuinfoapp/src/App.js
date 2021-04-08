import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//Handle get Unique category from a list data
const uniCategory = ['all', ...new Set(items.map( (item) =>( item.category) ))];

function App() {

  const [listMenu, setListMenu] = useState(items);
// eslint-disable-next-line
  const [category, setCategory] = useState(uniCategory);
  

  const handle = (cate) =>{

      const menuByCate = cate === 'all' ? items : items.filter( (item) =>(
          item.category === cate
      ));

      setListMenu(menuByCate);

  }

  return <main className='menu'>
          <div className='title'>
              <h2>Our Menu</h2>
              <div className='underline'></div>
          </div>
          <Categories category={category} handle={handle} />
          <section className='section-center'>
              {listMenu?.length > 0 && listMenu.map( (item) =>(
                  <Menu key={item.id} {...item} />
              ))}
          </section>
  </main>
}

export default App;
