import React from 'react';
import { Card, Button } from 'antd';
import '../Cards/Cards.css';

export default function FilmInfo({ id }) {
  return (
    <div className='container'>
      <Card className='Card' title={<strong>{id.title}</strong>}>
        <h5>
          <strong>Film Director: </strong>
          {id.director}
        </h5>
        <p>
          <strong>Description:</strong>
          <br />
          {id.opening_crawl}
        </p>
        <h5>
          <strong>Film Producer:</strong> {id.producer}
        </h5>
      </Card>
      <Button>Close</Button>
    </div>
  );
}
