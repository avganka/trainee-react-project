import { Link } from 'react-router-dom';
import { AppRoutes } from '../../types/const';


export default function PageNotFound(): JSX.Element {
  return (
    <div>
      <h1>404
        <small>Not found</small>
      </h1>
      <Link to={AppRoutes.Main}></Link>
    </div>
  );
}
