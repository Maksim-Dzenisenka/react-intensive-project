import React, { useState, useEffect } from 'react';

import { Col, Card, Spin } from 'antd';
import './Cards.css';
import FilmInfo from '../FilmInfo/FilmInfo';

export default function Cards() {
  const [films, setFilms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentFilm, setCurrentFilm] = useState(null);

  useEffect(() => {
    async function fetchFilms() {
      const res = await fetch('https://swapi.dev/api/films/');
      const data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }

    fetchFilms();
  }, []);

  const showMoreInfo = ({ film }) => {
    setFilms([]);
    setCurrentFilm(film);
    return <FilmInfo film={currentFilm} />;
  };

  if (loading) {
    return <Spin className='Loader' tip='Loading...' />;
  }

  return (
    <>
      {films.map((film, i) => {
        console.log('film', film);

        return (
          <Col span={7} key={i}>
            <Card
              onClick={() => showMoreInfo({ film })}
              className='Card'
              title={<strong>{film.title}</strong>}>
              <p>{film.opening_crawl}</p>
            </Card>
          </Col>
        );
      })}
    </>
  );
}
