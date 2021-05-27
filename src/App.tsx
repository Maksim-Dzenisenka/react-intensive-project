import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Image, Button, Row, Col, Space, Card } from 'antd';
import mainBackground from './images/stars.jpg';
import logo from './images/star-wars-logo.jpg';
import Complete from './components/Complete';
import './App.css';

const { Header, Content } = Layout;
const App: React.FC = (): JSX.Element => (
  <>
    <Layout
      style={{
        backgroundImage: `url(${mainBackground})`,
      }}>
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
                <Button size='large' ghost>
                  LOG IN
                </Button>
                <Button size='large' ghost>
                  SIGN UP
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
        <Row justify='center' align='middle' gutter={[16, 24]}>
          <Col>
            <Card
              title='Default size card'
              // Удалить правило. Не забыть!!!
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              extra={<a href='#'>More</a>}
              style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  </>
);
export default App;
