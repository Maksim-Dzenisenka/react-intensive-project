import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'antd';

import Cards from '../Cards/Cards';
import SignUp from '../Entry/SignUp';
import LogIn from '../Entry/LogIn';
import FilmInfo from '../FilmInfo/FilmInfo';
import NotFound from '../NotFound';
import Search from '../Search/Search';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
//object test
const film: Object = {
  director: 'director',
  title: 'title',
  opening_crawl: 'opening_crawl',
  producer: 'producer',
};

const Container: React.FC = (): JSX.Element => {
  return (
    <Row
      justify='center'
      align='middle'
      gutter={[16, 24]}
      style={{ marginTop: '50px', marginRight: '0', marginLeft: '0' }}>
      <Switch>
        <Route exact path='/'></Route>
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
          <FilmInfo film={film} />;
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Row>
  );
};

export default Container;
