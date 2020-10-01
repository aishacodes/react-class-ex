import React, { useState, useEffect } from 'react';
import Axios from 'axios'

import './App.css';

const SingleCountry = ({info}) => {
  const { name, languages, flag, population, capital } = info

  return (<div>
    <h2>{name}</h2>
    <p>Capital: {capital}</p>
    <p>Population: {population}</p>
    <ul>
      {
        languages.map((lang, langIndex) => <li key={`${name}-lang-${langIndex}`}>{lang.name}</li>)
      }
    </ul>
    <img src={flag} style={{ width: '7rem' }} alt="country" />
  </div>)
}

function App() {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')

  const getCountries = () => {
      Axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          setCountries(response.data)
        })
        .catch(err=>console.log(err))
  }

  useEffect(() => {
    getCountries()
    }, [])

  const matches = query.trim()
  ? countries.filter(country => country.name.toLowerCase().indexOf(query.toLowerCase().trim()) >-1)
  : []

  return (
   <div>
     Find countries <input value={query} onChange={e => setQuery(e.target.value)} />

     {
       matches.length === 1
       ? <SingleCountry info={matches[0]} />
       : matches.length > 10
          ? <p>Too many matches, specity more filters</p>
          : matches.map((country, countryIndex) => <div key={`country-${countryIndex}`}> {country.name}</div>)
     }

     </div>
  );
}

export default App