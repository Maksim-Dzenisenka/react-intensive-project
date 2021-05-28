import { Link } from 'react-router-dom';
import { Image } from 'antd';
import notFound from '../images/not-found.png';

const NotFound = () => {
  return (
    <Link to='/'>
      <Image
        width={700}
        height={500}
        preview={false}
        style={{ cursor: 'pointer' }}
        src={notFound}
      />
    </Link>
  );
};

export default NotFound;
