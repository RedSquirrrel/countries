import { useNavigate } from 'react-router-dom';

import './Details.css';

const Details = ({ countryData, newSearch }) => {
  const navigate = useNavigate();

  if (!countryData?.name) {
    navigate(0);
    return navigate('/');
  }

  const { name, flags, capital, nativeName, population, area, region, subregion, currencies, languages, topLevelDomain } = countryData;

  return (
    <div className='details_container'>
      <div className='btn-name_container'>
        <div className='back_btn' onClick={newSearch}>
          Back
        </div>
        {/* <Link className='back_btn' to='/' onClick={newSearch}>
          Back
        </Link> */}
        <h1 className='country_name'>{name} </h1>
      </div>
      <h2 className='capital'>
        Capital:
        <span>{capital}</span>
      </h2>
      <div className='country_details'>
        <img src={flags.png} alt='country flag' />

        <div className='details_text'>
          <p>
            Native Name: <span>{nativeName}</span>
          </p>
          <p>
            Population: <span>{population.toLocaleString()}</span>
          </p>
          <p>
            Area: <span>{area}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Sub Region: <span>{subregion}</span>
          </p>
          {currencies && (
            <p>
              Currency: <span>{currencies[0].code}</span>
            </p>
          )}
          <p>
            Languages:{' '}
            {languages.map(lan => (
              <span key={lan.name}>{lan.name.toLocaleString()}</span>
            ))}
          </p>
          <p>
            Internet Domain: <span>{topLevelDomain}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
