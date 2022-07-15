import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Inputs from './components/inputs/Inputs';
import Details from './components/details/Details';
import Scroll from './components/scroll/Scroll';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchBy, setSearchBy] = useState('');
  const [backBtn, setBackBtn] = useState(true);
  const [newValue, setNewValue] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then(response => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    const selection = data.filter(country => country.name.toLowerCase().includes(searchBy.toLowerCase()));
    setFilteredData(selection);
  }, [searchBy, data]);

  useEffect(() => {
    const selectionByRegion = data.filter(country => country.region.includes(newValue));
    setFilteredData(selectionByRegion);
  }, [data, newValue]);

  useEffect(() => {
    const searchFromFilteredRegion = data.filter(country => country.region.includes(newValue));

    const test = searchFromFilteredRegion.filter(country => country.name.toLowerCase().includes(searchBy.toLowerCase()));
    setFilteredData(test);
  }, [data, newValue, searchBy]);

  const newSearch = () => {
    setBackBtn(!backBtn);
    setFilteredData(data);
  };

  return (
    <div>
      <Header />
      <Inputs setSearchBy={setSearchBy} setNewValue={setNewValue} newValue={newValue} />
      <Routes>
        <Route
          path='/'
          element={
            data.length ? (
              <Scroll>
                <Main filteredData={filteredData} setFilteredData={setFilteredData} />
              </Scroll>
            ) : (
              <h1>Loading...</h1>
            )
          }
        />
        <Route path='/:name' element={<Details newSearch={newSearch} countryData={filteredData[0]} />} />
      </Routes>
    </div>
  );
};

export default App;

