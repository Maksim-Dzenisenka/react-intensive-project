import { Link } from 'react-router-dom';
import { Button, Col, Card } from 'antd';
import './Cards.css';
import './Checkbox.css';
import { useAppDispatch } from '../../app/hooks';
import {  movieId } from '../Episodes/episodesSlice';

const ResultSearchCard = ({ episodeToShow }: any): JSX.Element => {
  const dispatch = useAppDispatch();
  const [episode] = episodeToShow;

  return (
    <>
      {episode && (
        <Col span={7} key={episode.episode_id}>
          <Card className='Card' title={<strong>{episode.title}</strong>}>
            <p>{episode.opening_crawl}</p>
            <Link to='filmInfo'>
              <Button
                size='large'
                onClick={() => dispatch(movieId(episode.episode_id))}>
                MORE DETAILS
              </Button>
            </Link>
            <input className='star' type='checkbox' title='Favorite' />
          </Card>
        </Col>
      )}
    </>
  );
};

export default ResultSearchCard;
