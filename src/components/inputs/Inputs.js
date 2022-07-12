import './Inputs.css';
import Dropdown from '../dropdown/Dropdown';
import { useEffect, useState } from 'react';

const Inputs = ({ setSearchBy }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearchBy(search);
  }, [search]);

  return (
    <div className='inputs_container'>
      <input type='text' placeholder='Search for a country...' value={search} onChange={e => setSearch(e.target.value)} />
      <Dropdown />
    </div>
  );
};

export default Inputs;
