import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Row, Col, Button, Space } from 'antd';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { exit } from '../Entry/authSlise';
import Cards from '../Cards/Cards';
import SignUp from '../Entry/SignUp';
import LogIn from '../Entry/LogIn';
import FilmInfo from '../FilmInfo/FilmInfo';
import NotFound from '../NotFound';
import { IFilm } from '../Episodes/episodesTypes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
//object test
const film: Object = {
  director: 'director',
  title: 'title',
  opening_crawl: 'opening_crawl',
  producer: 'producer',
};

const Container: React.FC = (): JSX.Element => {
  const auth = useAppSelector((state) => state.auth.isAuth);
  const [loggedOut, setLoggedOut] = useState(false);
  const [isGoBack, setGoBack] = useState(false);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const showMoreEp = useAppSelector((state) => state.episodes.currentEpisode);
  const allEpisodes = useAppSelector((state) => state.episodes.ep);

  const episodeToShow: IFilm[] | undefined = allEpisodes?.filter(
    (ep) => ep.episode_id === showMoreEp
  );

  const handleSignOut = () => {
    setLoggedOut(true);
    localStorage.clear();
    dispatch(exit());
  };

  const handleBack = () => {
    setGoBack(true);
    history.push('/');
  };

  if (loggedOut || isGoBack) {
    history.push('/');
  }

  return (
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
          <FilmInfo episodeToShow={episodeToShow} />;
        </Route>
        {auth && (
          <>
            <Route path='/favorites'>
              <Col>
                <h1 style={{ color: 'white' }}>favorites</h1>
              </Col>
            </Route>
            <Route path='/history'>
              <Col>
                <h1 style={{ color: 'white' }}>history</h1>
              </Col>
            </Route>
            <Route path='/signout'>
              <Col>
                <h1 style={{ color: 'white' }}>Sign out of your account?</h1>
                <Space size='large'>
                  <Button size='large' ghost={true} onClick={handleSignOut}>
                    SIGN OUT
                  </Button>
                  <Button size='large' ghost={true} onClick={handleBack}>
                    BACK
                  </Button>
                </Space>
              </Col>
            </Route>
          </>
        )}
        <Route component={NotFound} />
      </Switch>
    </Row>
  );
};

export default Container;
