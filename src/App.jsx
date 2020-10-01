import React, { useState, useEffect } from 'react';
import Axios from 'axios'

import './App.css';

const SingleCountry = ({info, showByDefault}) => {
  const { name, languages, flag, population, capital } = info
  const [showInfo, setShowInfo] = useState(false)

  return (<div style={{marginBottom:'0.7rem'}}>
    <span>{name} </span>
    {
      showByDefault || showInfo
      ?
      (<>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <ul>
          {
            languages.map((lang, langIndex) => <li key={`${name}-lang-${langIndex}`}>{lang.name}</li>)
          }
        </ul>
        <img src={flag} style={{ width: '7rem' }} alt="country" />
        </>)
      : !showByDefault && !showInfo? <button onClick={()=> setShowInfo(true)}>Show</button> : ''
    }
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

  console.log(matches)
  return (
   <div>
     Find countries <input value={query} style={{margin:'0.5rem'}} onChange={e => setQuery(e.target.value)} />

     {
      matches.length === 1
      ? <SingleCountry info={matches[0]}  showByDefault={true}/>
      : matches.length > 10
         ? <p>Too many matches, specity more filters</p>
         : matches.map((country, countryIndex) => <SingleCountry info={country} />)
     }

     </div>
  );
}

export default App