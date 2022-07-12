import './Inputs.css';
import Dropdown from '../dropdown/Dropdown';

const Inputs = () => {
  return (
    <div className='inputs_container'>
      <input type='text' placeholder='Search for a country...' />
      <Dropdown />
    </div>
  );
};

export default Inputs;
