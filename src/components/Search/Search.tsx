import { Row, Col } from 'antd';
import Complete from './Complete';

const Search: React.FC = (): JSX.Element => {
  return (
    <Row justify='center' align='middle' style={{ height: '100px' }}>
      <Col span={22}>
        <Complete />
      </Col>
    </Row>
  );
};

export default Search;
