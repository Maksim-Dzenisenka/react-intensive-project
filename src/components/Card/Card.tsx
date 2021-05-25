import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'antd';

export default function Item({ film, i }) {
  const [currentFilm, setCurrentFilm] = useState({});
  return (
    <Col span={7} key={i}>
      <Link to={`filmInfo/${i + 1}`}>
        <Card
          onClick={() => setCurrentFilm(film)}
          className='Card'
          title={<strong>{film.title}</strong>}>
          <p>{film.opening_crawl}</p>
        </Card>
      </Link>
    </Col>
  );
}
