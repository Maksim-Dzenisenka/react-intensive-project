import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'antd';
import '../Cards/Cards.css';
import { IFilm } from '../Episodes/episodesTypes';

export const FilmInfo = ({ episodeToShow }: any): JSX.Element => {
  const history = useHistory();
  const [episode] = episodeToShow;

  return (
    <div>
      <Card className='Card' title={<strong>{episode.title}</strong>}>
        <h5>
          <strong>Director: {episode.director} </strong>
        </h5>
        <p>
          <strong>Description:</strong>
          <br />
          openingCrawl:{episode.opening_crawl}
        </p>
        <h5>
          <strong>Producer:</strong> Producer:{episode.producer}
        </h5>
      </Card>
      <Button onClick={() => history.push('/')}>Close</Button>
    </div>
  );
};
