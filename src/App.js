import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Inputs from './components/inputs/Inputs';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchBy, setSearchBy] = useState('af');

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then(response => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    const selection = data.filter(country => country.name.toLowerCase().includes(searchBy.toLowerCase()));
    setFilteredData(selection);
  }, [searchBy, data]);

  return (
    <div>
      <Header />
      <Inputs setSearchBy={setSearchBy} />
      {data.length ? <Main filteredData={filteredData} /> : <h1>Loading...</h1>}
    </div>
  );
};

export default App;

