import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Card, Spin } from 'antd';
import './Cards.css';
import './Checkbox.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getEpisodes, movieId } from '../Episodes/episodesSlice';
import { IFilm } from '../Episodes/episodesTypes';

const Cards: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const films: IFilm[] | undefined = useAppSelector(
    (state) => state.episodes.ep
  );
  const status = useAppSelector((state) => state.episodes.status);

  useEffect(() => {
    dispatch(getEpisodes());
  }, [dispatch]);

  if (status === 'loading') {
    return <Spin className='Loader' tip='Loading...' />;
  }

  return (
    <>
      {films?.map((film: IFilm) => (
        <Col span={7} key={film.episode_id}>
          <Card className='Card' title={<strong>{film.title}</strong>}>
            <p>{film.opening_crawl}</p>
            <Link to='filmInfo'>
              <Button
                size='large'
                onClick={() => dispatch(movieId(film.episode_id))}>
                MORE DETAILS
              </Button>
            </Link>
            <input className='star' type='checkbox' title='Favorite' />
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Cards;
