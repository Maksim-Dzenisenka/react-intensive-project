import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'antd';
import FilmInfo from '../FilmInfo/FilmInfo';

export default function Item({ film, i }) {
  return (
    <Col span={7} key={i}>
      <Link to={`filmInfo/${i + 1}`}>
        <Card
          onClick={() => console.log(film)}
          className='Card'
          title={<strong>{film.title}</strong>}>
          <p>{film.opening_crawl}</p>
        </Card>
      </Link>
    </Col>
  );
}
