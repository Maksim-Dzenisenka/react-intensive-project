import React from 'react';
import { Row, Col, Card } from 'antd';


export default function Cards({ data }) {
    return (
        <>
            <Row gutter={16}>
                {data.map((film, i) => {
                    return (
                        <Col span={8} key={i}>
                            <Card 
                            style={{marginBottom: 15}}
                            hoverable
                            title={<strong>{film.title}</strong>} 
                            extra={<a href="#">More</a>} 
                            bordered={false}>
                                <p>{film.opening_crawl}</p>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}