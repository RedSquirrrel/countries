import './Dropdown.css';

import down from '../../assets/down.svg';
import up from '../../assets/up.svg';
import { useState } from 'react';

const Dropdown = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='dropdown_container'>
      <div className='filter_container'>
        <p>Filter by Region</p>
        {toggle && <img src={down} alt='down sign' onClick={() => setToggle(!toggle)} />}
        {!toggle && <img src={up} alt='down sign' onClick={() => setToggle(!toggle)} />}
      </div>
      {toggle && (
        <ul className='list_container'>
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
