import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesData from './countries.json';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              {countries.map((country) => {
                return <CountriesList CountriesList={country} />;
              })}
            </div>
          </div>
          <div className="col-7">
            <Routes>
              {countries.map((country) => (
                <Route
                  path={`/${country.alpha3Code}`}
                  element={<CountryDetails CountryDetails={country} />}
                />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
