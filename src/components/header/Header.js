import globe from '../../assets/flags_globe.gif';

import './Header.css';

const Header = () => {
  return (
    <header className='header_container'>
      <h1>Where in the world?</h1>

      <div className='globe_container'>
        <img src={globe} alt='globe' />
      </div>
    </header>
  );
};

export default Header;
