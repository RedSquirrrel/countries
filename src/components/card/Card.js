import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ country, setFilteredData }) => {
  console.log(country);
  return (
    <Link to={`/${country.name}`} className='card_container' onClick={() => setFilteredData([country])}>
      <div className='card_inner_container'>
        <img src={country.flags.png} alt='country flag' />
        <h2>{country.name}</h2>
        <h3>{country.nativeName === country.name ? '' : country.nativeName}</h3>
      </div>
    </Link>
  );
};

export default Card;
