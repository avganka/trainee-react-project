import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { CITIES_LIST } from '../../const';
import { loadFavoritesFromServer } from '../../store/api-actions';
import { store } from '../../store/store';
import { Offer } from '../../types/offers';
import { State } from '../../types/state';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';


const mapStateToProps = ({favoriteOffers}: State) => ({
  favoriteOffers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function Favorites({favoriteOffers}: PropsFromRedux):JSX.Element {
  // store.dispatch(loadFavoritesFromServer());
  // useEffect(() => {
  //   store.dispatch(loadFavoritesFromServer());
  // }, [favoriteOffers]);

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
                  CITIES_LIST.map((city) => {
                    console.log(favoriteOffers);

                    const currentOffers = favoriteOffers.filter((offer) => offer.city.name === city);
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
                          {currentOffers.map((offer) => {
                            const { title,  price, rating, previewImage, type} = offer;
                            return (
                              <article key={offer.id}className="favorites__card place-card">
                                <div className="favorites__image-wrapper place-card__image-wrapper">
                                  <a href="#todo">
                                    <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place img"/>
                                  </a>
                                </div>
                                <div className="favorites__card-info place-card__info">
                                  <div className="place-card__price-wrapper">
                                    <div className="place-card__price">
                                      <b className="place-card__price-value">&euro;{price}</b>
                                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                                    </div>
                                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                      <svg className="place-card__bookmark-icon" width="18" height="19">
                                        <use xlinkHref="#icon-bookmark"></use>
                                      </svg>
                                      <span className="visually-hidden">In bookmarks</span>
                                    </button>
                                  </div>
                                  <div className="place-card__rating rating">
                                    <div className="place-card__stars rating__stars">
                                      <span style={{width: `${rating * 100 / 5}%`}}></span>
                                      <span className="visually-hidden">Rating</span>
                                    </div>
                                  </div>
                                  <h2 className="place-card__name">
                                    <a href="#todo">{title}</a>
                                  </h2>
                                  <p className="place-card__type">{type}</p>
                                </div>
                              </article>
                            );
                          },
                          )}
                        </div>
                      </li>
                    );})
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
export default connector(Favorites);
