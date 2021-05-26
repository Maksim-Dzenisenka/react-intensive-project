import { Switch, Route, Link } from 'react-router-dom';
import { Image, Button, Row, Col, Space } from 'antd';
import logo from '../../images/star-wars-logo.jpg';

const Navigation: React.FC = (): JSX.Element => {
  return (
    <>
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
            <Switch>
              <Route exact path={`/`}>
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
              </Route>

              <Route path='/account'>
                <Space size='small'>
                  <Link to='/favorites'>
                    <Button size='large' ghost={true}>
                      FAVORITES
                    </Button>
                  </Link>
                  <Link to='/history'>
                    <Button size='large' ghost={true}>
                      HISTORY
                    </Button>
                  </Link>
                  <Link to='/signout'>
                    <Button size='large' ghost={true}>
                      SIGN OUT
                    </Button>
                  </Link>
                </Space>
              </Route>
            </Switch>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Navigation;
