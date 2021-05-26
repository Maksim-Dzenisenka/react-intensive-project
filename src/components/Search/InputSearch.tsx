import React, { useState } from 'react';
import axios from 'axios';
import Cards from '../Cards/Cards';
import Complete from './Complete';
import { Alert } from 'antd';

export default function InputSearch() {
  const [state, setState] = useState({
    s: '',
    results: [],
    loading: false,
  });

  const search = (e) => {
    setState((prevState) => {
      return { ...prevState, loading: true };
    });
    axios(`https://swapi.dev/api/films/?search=${state.s}`).then(({ data }) => {
      let results = data.results;
      console.log(results);

      setState((prevState) => {
        return { ...prevState, results: results, loading: false };
      });
    });
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  /*   if (state.results.length === 0) {
    return (
      <Alert
        message='Did not find any movie'
        type='warning'
        showIcon
        closable
      />
    );
  } */

  return (
    <>
      <input
        type='text'
        placeholder='Search for a movie...'
        className='searchbox'
        onChange={handleInput}
        onKeyPress={search}
      />

      <Cards results={state.results} loading={state.loading}></Cards>
    </>
  );
}
