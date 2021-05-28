import { useHistory } from 'react-router-dom';
import { Card, Button } from 'antd';
import '../Cards/Cards.css';

const FilmInfo = ({ episodeToShow }: any): JSX.Element => {
  const history = useHistory();
  const [episode] = episodeToShow;

  return (
    <>
      <Card
        className='Card'
        style={{ width: '700px' }}
        title={<strong>{episode.title}</strong>}>
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
        <Button onClick={() => history.push('/')}>Close</Button>
      </Card>
    </>
  );
};

export default FilmInfo;
