import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Spin } from 'antd';
import './Cards.css';
import FilmInfo from '../FilmInfo/FilmInfo';
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

  /* const showMoreInfo = (film) => {
    setCurrentFilm(film);
    console.log(film);
    console.log(currentFilm);
  }; */

  if (loading) {
    return <Spin className='Loader' tip='Loading...' />;
  }

  return (
    <>
      {films.map((film, i) => {
        return <Item film={film} i={i} />;
      })}
    </>
  );
}
