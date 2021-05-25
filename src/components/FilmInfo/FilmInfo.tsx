import React from 'react';
import { Card, Button } from 'antd';
import '../Cards/Cards.css';
import { useHistory } from 'react-router-dom';

export default function FilmInfo({ film }) {
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <Card className='Card' title={<strong>{film.title}</strong>}>
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
