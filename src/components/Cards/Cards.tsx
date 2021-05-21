import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import './Cards.css';
import FilmInfo from '../FilmInfo/FilmInfo';

export default function Cards({ data }) {
  return (
    <>
      <Row gutter={16}>
        {data.map((film, i) => {
          return (
            <Col span={8} key={i}>
              <Card onClick={() => console.log(film)}
                className='Card'
                title={<strong>{film.title}</strong>}

                bordered={false}>
                <p>{film.opening_crawl}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
