import React, { useState } from 'react';
import axios from 'axios';
import Cards from '../Cards/Cards';

export default function InputSearch() {
  const [state, setState] = useState({
    s: '',
    results: [],
  });

  const search = (e) => {
    if (e.key === 'Enter') {
      axios(`https://swapi.dev/api/films/?search=${state.s}`).then(
        ({ data }) => {
          let results = data.results;
          console.log(results[0]);

          setState((prevState) => {
            return { ...prevState, results: results };
          });
        }
      );
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  return (
    <>
      <input
        type='text'
        placeholder='Search for a movie...'
        className='searchbox'
        onChange={handleInput}
        onKeyPress={search}
      />
      <Cards results={state.results}></Cards>
    </>
  );
}
