import './Dropdown.css';

import down from '../../assets/down.svg';
import up from '../../assets/up.svg';
import { useState } from 'react';

const Dropdown = ({ newValue, setNewValue }) => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = e => {
    setNewValue(e.target.textContent);
    setToggle(!toggle);
  };

  return (
    <div className='dropdown_container'>
      <div className='filter_container' onClick={() => setToggle(!toggle)}>
        <p>{newValue ? newValue : ' Filter by Region'}</p>
        {toggle && <img src={down} alt='down sign' />}
        {!toggle && <img src={up} alt='down sign' />}
      </div>
      {toggle && (
        <ul className='list_container' onClick={clickHandler}>
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
