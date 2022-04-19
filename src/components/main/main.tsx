import { Dispatch, useState } from 'react';
import Logo from '../logo/logo';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import { connect, ConnectedProps } from 'react-redux';
import { Actions } from '../../types/action';
import { State } from '../../types/state';
import { changeCity} from '../../store/actions';
import { CitiesList } from '../citiesList/citiesList';
import { loadOffersFromServer, logoutAction } from '../../store/api-actions';
import PageNotFound from '../page-not-found/page-not-found';
import { store } from '../../store/store';


const mapStateToProps = ({activeCity, offers, sortingType, isDataLoaded}: State) => ({
  activeCity,
  offers,
  sortingType,
  isDataLoaded,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityClick(city:string) {
    dispatch(changeCity(city));
    store.dispatch(loadOffersFromServer());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
// type ConnectedComponentProps = PropsFromRedux & MainPageProps;


function Main({activeCity, offers, onCityClick, sortingType, isDataLoaded}: PropsFromRedux): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);

  const onListItemHover = (activeOffer:number) => {
    setActiveCard(activeOffer);
  };

  const logoutHandler = () => {
    store.dispatch(logoutAction());
  };

  if (!offers) {
    return <PageNotFound/>;
  }

  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
            >
            </path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            >
            </path>
          </symbol>
        </svg>
      </div>

      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo/>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a
                      className="header__nav-link header__nav-link--profile"
                      href="#todo"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href='/' onClick={(evt) => {
                      evt.preventDefault();
                      logoutHandler();
                    }}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <CitiesList activeCity={activeCity} onCityClick={onCityClick}/>
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <OffersList offers={offers} activeCity={activeCity} onListItemHover={onListItemHover} sortingType={sortingType}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map activePoint={activeCard}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export {Main};
export default connector(Main);


