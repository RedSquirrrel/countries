// import { Link } from 'react-router-dom'
import './Main.css';

import Card from '../card/Card';
import Details from '../details/Details';

const Main = ({ filteredData, setFilteredData }) => {
  const displayCountries = filteredData.map(country => {
    return <Card key={country.name} country={country} setFilteredData={setFilteredData} />;
  });

  return (
    <div>
      {filteredData.length === 1 && <Details countryData={filteredData[0]} />}
      <div className='main_container'>
        {filteredData.length > 1 && displayCountries}
        {filteredData.length === 0 && <h1>Please enter a valid country name</h1>}
      </div>
    </div>
  );
};

export default Main;
