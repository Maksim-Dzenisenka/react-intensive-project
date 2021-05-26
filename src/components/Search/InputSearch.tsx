import React, { useState } from 'react';
import axios from 'axios';
import Item from '../Card/Card';

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
      <section className='searchbox-wrap'>
        <input
          type='text'
          placeholder='Search for a movie...'
          className='searchbox'
          onChange={handleInput}
          onKeyPress={search}
        />
        {/* <Item film={state.results[0]} i={0} /> */}
      </section>
    </>
  );
}
