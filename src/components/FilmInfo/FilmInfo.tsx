import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'antd';
import './FilmInfo.css';

export default function FilmInfo(currentFilm) {
  const history = useHistory();
  return (
    <div>
      <Card className='FilmInfo'>
        <h2>
          <strong>Title</strong>
          {currentFilm.title}
        </h2>
        <h5>
          <strong>Director: </strong>
          {currentFilm.director}
        </h5>
        <p>
          <strong>Description:</strong>
          <br />
          {currentFilm.opening_crawl}
        </p>
        <h5>
          <strong>Producer:</strong> {currentFilm.producer}
        </h5>
      </Card>
      <Button onClick={() => history.push('/')}>Close</Button>
    </div>
  );
}
