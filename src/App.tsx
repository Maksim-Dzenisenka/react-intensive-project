import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import mainBackground from './images/stars.jpg';
import Navigation from './components/Navigation/Navigation';
import Search from './components/Search/Search';
import Container from './components/Container/Container';

const { Header, Content } = Layout;

const App: React.FC = (): JSX.Element => (
  <>
    <Router>
      <Layout style={{ backgroundImage: `url(${mainBackground})` }}>
        <Header style={{ height: '100px', background: 'transparent' }}>
          <Navigation />
        </Header>
        <Content style={{ minHeight: '900px' }}>
          <Search />
          <Container />
        </Content>
      </Layout>
    </Router>
  </>
);

export default App;
