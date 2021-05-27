import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Card, Spin } from 'antd';
import './Cards.css';
import './Checkbox.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getEpisodes } from '../Episodes/episodesSlice';

export default function Cards() {
  const dispatch = useAppDispatch();
  const films: any = useAppSelector((state) => state.episodes.ep);
  const status = useAppSelector((state) => state.episodes.status);

  useEffect(() => {
    dispatch(getEpisodes());
  }, [dispatch]);

  const showMoreInfo = ({ film }) => {
    //console.log(film);
  };

  if (status === 'loading') {
    return <Spin className='Loader' tip='Loading...' />;
  }

  return (
    <>
      {films.map((film, i) => {
        return (
          <Col span={7} key={i}>
            <Card className='Card' title={<strong>{film.title}</strong>}>
              <p>{film.opening_crawl}</p>
              <Link to={`filmInfo`}>
                <Button size='large' onClick={() => showMoreInfo({ film })}>
                  MORE DETAILS
                </Button>
              </Link>
              <input className='star' type='checkbox' title='Favorite' />
            </Card>
          </Col>
        );
      })}
    </>
  );
}
