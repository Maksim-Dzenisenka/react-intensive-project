import React from 'react';
import { Card, Button } from 'antd';
import '../Cards/Cards.css';

export default function FilmInfo({ film }) {
  return (
    <div className='container'>
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
      <Button>Close</Button>
    </div>
  );
}
