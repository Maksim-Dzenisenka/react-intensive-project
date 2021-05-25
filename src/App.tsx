import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Image, Button, Row, Col, Space } from 'antd';
import mainBackground from './images/stars.jpg';
import logo from './images/star-wars-logo.jpg';
import Complete from './components/Complete';
import Cards from './components/Cards/Cards';
import SignUp from './components/Entry/SignUp';
import LogIn from './components/Entry/LogIn';
import FilmInfo from './components/FilmInfo/FilmInfo';

const { Header, Content } = Layout;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* const film: Object = {
  director: 'director',
  title: 'title',
  opening_crawl: 'opening_crawl',
  producer: 'producer',
}; */

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Router>
        <Layout style={{ backgroundImage: `url(${mainBackground})` }}>
          <Header style={{ height: '100px', background: 'transparent' }}>
            <Row justify='space-between' align='middle'>
              <Col span={3}>
                <Link to='/'>
                  <Image
                    width={200}
                    height={100}
                    preview={false}
                    style={{ cursor: 'pointer' }}
                    src={logo}
                  />
                </Link>
              </Col>
              <Col span={5}>
                <Row justify='end' align='top'>
                  <Space size='small'>
                    <Link to='/signin'>
                      <Button size='large' ghost={true}>
                        LOG IN
                      </Button>
                    </Link>
                    <Link to='/signup'>
                      <Button size='large' ghost={true}>
                        SIGN UP
                      </Button>
                    </Link>
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
            <Row
              justify='center'
              align='middle'
              gutter={[16, 24]}
              style={{ marginTop: '50px', marginRight: '0', marginLeft: '0' }}>
              <Switch>
                <Route exact path='/'>
                  <Cards />
                </Route>
                <Route path='/signin'>
                  <Col span={22}>
                    <LogIn />
                  </Col>
                </Route>
                <Route path='/signup'>
                  <Col span={22}>
                    <SignUp />
                  </Col>
                </Route>
                <Route path={`/filmInfo`}>
                  <FilmInfo />;
                </Route>
              </Switch>
            </Row>
          </Content>
        </Layout>
      </Router>
    </>
  );
};

export default App;
