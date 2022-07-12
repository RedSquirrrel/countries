import { useState } from 'react';

import './Header.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className='header_container'>
      <h1>Where in the world?</h1>

      <div className='toggle_container' onClick={() => setToggle(!toggle)}>
        {toggle ? <img src={sun} alt='sun icon' /> : <img src={moon} alt='moon icon' />}
      </div>
    </header>
  );
};

export default Header;
