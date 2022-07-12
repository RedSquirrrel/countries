import './Card.css';

const Card = ({ country }) => {
  return <div className='card_container'>{country.name}</div>;
};

export default Card;
