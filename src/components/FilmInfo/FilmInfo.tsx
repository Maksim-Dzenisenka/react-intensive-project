import React from 'react';
import { Card } from 'antd';

export default function FilmInfo({ data }) {
  return (
    <div className='container'>
      <Card title={<strong>{data.title}</strong>}>
        <h5>{data.director}</h5>
        <p>{data.opening_crawl}</p>
        <p>{data.producer}</p>
      </Card>
    </div>
  );
}
