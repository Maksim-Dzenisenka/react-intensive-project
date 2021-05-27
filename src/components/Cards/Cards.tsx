import React, { useState, useEffect } from 'react';
import { Spin, Row } from 'antd';
import './Cards.css';
import Item from '../Card/Card';

export default function Cards({ results, loading }) {
  if (loading) {
    return <Spin className='Loader' tip='Loading...' />;
  }

  return (
    <>
      <Row
        justify='center'
        align='middle'
        gutter={[16, 24]}
        style={{ marginTop: '50px', marginRight: '0', marginLeft: '0' }}>
        {results.map((film, i) => {
          return <Item film={film} i={i} />;
        })}
      </Row>
    </>
  );
}
