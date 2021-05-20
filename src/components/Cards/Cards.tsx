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
              <Card
                className='Card'
                title={<strong>{film.title}</strong>}
                extra={
                  <Button onClick={() => console.log(film)}>
                    Show detailed info
                  </Button>
                }
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
