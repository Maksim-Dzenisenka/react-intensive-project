import { Row, Col } from 'antd';
import InputSearch from './InputSearch';

const Search: React.FC = (): JSX.Element => {
  return (
    <Row justify='center' align='middle' style={{ height: '100px' }}>
      <Col span={22}>
        <InputSearch />
      </Col>
    </Row>
  );
};

export default Search;
