import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Button, Row, Col, Space } from 'antd';
import logo from '../../images/star-wars-logo.jpg';
import { useAppSelector } from '../../app/hooks';

const Navigation: React.FC = (): JSX.Element => {
  const auth = useAppSelector((state) => state.auth.isAuth);

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
            {!auth && (
              <Space size='small'>
                <Link to='/signin'>
                  <Button size='large' ghost>
                    LOG IN
                  </Button>
                </Link>
                <Link to='/signup'>
                  <Button size='large' ghost>
                    SIGN UP
                  </Button>
                </Link>
              </Space>
            )}
            {auth && (
              <Space size='small'>
                <Link to='/favorites'>
                  <Button size='large' ghost>
                    FAVORITES
                  </Button>
                </Link>
                <Link to='/history'>
                  <Button size='large' ghost>
                    HISTORY
                  </Button>
                </Link>
                <Link to='/signout'>
                  <Button size='large' ghost>
                    SIGN OUT
                  </Button>
                </Link>
              </Space>
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Navigation;
