import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Cities } from '../../const';
import { fetchFavoritesAction } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/selectors/selectros';
import { store } from '../../store/store';
import FavoriteCard from '../favorite-card/favorite-card';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';

function Favorites():JSX.Element {
  const favoriteOffers = useSelector(getFavoriteOffers);

  useEffect(() => {
    store.dispatch(fetchFavoritesAction());
  }, []);

  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo/>
              </div>
              <Navigation/>
            </div>
          </div>
        </header>

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  Object.keys(Cities).map((city) => {
                    const currentOffers = favoriteOffers.filter((offer) => offer.city.name === city);
                    if (currentOffers.length > 0) {
                      return (
                        <li key={city} className="favorites__locations-items">
                          <div className="favorites__locations locations locations--current">
                            <div className="locations__item">
                              <a className="locations__item-link" href="#todo">
                                <span>{city}</span>
                              </a>
                            </div>
                          </div>
                          <div className="favorites__places">
                            {currentOffers.map((offer) =>
                              <FavoriteCard key={offer.id} offer={offer}/>,
                            )}
                          </div>
                        </li>
                      );
                    }
                    return '';
                  })
                }
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Logo/>
        </footer>
      </div>
    </>
  );
}

export {Favorites};
export default Favorites;
