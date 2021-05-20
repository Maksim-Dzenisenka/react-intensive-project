import React, { useState, useEffect, Fragment } from 'react';

import 'antd/dist/antd.css';
import { Layout, Image, Button, Row, Col, Space, Spin } from 'antd';
import mainBackground from './images/stars.jpg';
import logo from './images/star-wars-logo.jpg';
import Complete from './components/Complete';
import Cards from './components/Cards/Cards';
import './App.css';

const { Header, Content } = Layout;

function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFilms() {
      const res = await fetch('https://swapi.dev/api/films/');
      const data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }

    fetchFilms();
  }, []);

  return (
    <>
      <Layout style={{ backgroundImage: `url(${mainBackground})` }}>
        <Header style={{ height: '100px', background: 'transparent' }}>
          <Row justify='space-between' align='middle'>
            <Col span={3}>
              <Image
                width={200}
                height={100}
                preview={false}
                style={{ cursor: 'pointer' }}
                src={logo}
              />
            </Col>
            <Col span={5}>
              <Row justify='end' align='top'>
                <Space size='small'>
                  <Button size='large' ghost={true}>
                    Вход
                  </Button>
                  <Button size='large' ghost={true}>
                    Регистрация
                  </Button>
                </Space>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content style={{ minHeight: '900px' }}>
          <Row justify='center' align='middle' style={{ height: '100px' }}>
            <Col span={22}>
              <Complete />
            </Col>
          </Row>
          <div className='CardsContainer'>
            {loading ? (
              <Fragment>
                <Spin>Loading</Spin>
              </Fragment>
            ) : (
              <Cards data={films} />
            )}
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default App;
