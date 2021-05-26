import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import './Cards.css';
import Item from '../Card/Card';

export default function Cards() {
  const [films, setFilms] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFilms() {
      setLoading(true);
      const res = await fetch('https://swapi.dev/api/films/');
      const data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }

    fetchFilms();
  }, []);

  if (loading) {
    return <Spin className='Loader' tip='Loading...' />;
  }

  /*   if (results.length > 0) {
    return setFilms(results);
  } */

  return (
    <>
      {films.map((film, i) => {
        return <Item film={film} i={i} />;
      })}
    </>
  );
}
