import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'antd';
import './FilmInfo.css';

export default function FilmInfo({ film }) {
  const history = useHistory();
  return (
    <div>
      <Card className='FilmInfo'>
        <h2>
          <strong>Title</strong>
          {film.title}
        </h2>
        <h5>
          <strong>Director: </strong>
          {film.director}
        </h5>
        <p>
          <strong>Description:</strong>
          <br />
          {film.opening_crawl}
        </p>
        <h5>
          <strong>Producer:</strong> {film.producer}
        </h5>
      </Card>
      <Button onClick={() => history.push('/')}>Close</Button>
    </div>
  );
}
