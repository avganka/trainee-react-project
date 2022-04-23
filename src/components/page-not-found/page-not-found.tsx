import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';

export default function PageNotFound(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <Navigation/>
          </div>
        </div>s
      </header>

      <main className="page__main page__main--index">
        <div className='container'>
          <section>
            <h2>404</h2>
            <b className="places__found">Page Not Found</b>
            <Link to={AppRoutes.Main}>Go to Main</Link>
          </section>
        </div>
      </main>
    </div>

  );
}
