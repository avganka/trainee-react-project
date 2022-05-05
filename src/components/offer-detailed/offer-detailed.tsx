import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { AuthStatus } from '../../const';
import { store } from '../../store/store';
import ReviewForm from '../form-review/form-review';
import Logo from '../logo/logo';
import  Navigation  from '../navigation/navigation';
import { Preloader } from '../preloader/preloader';
import Map from '../map/map';
import { fetchDetailedOfferAction, fetchReviewsAction } from '../../store/api-actions';
import Bookmark from '../bookmark/boormark';
import { restoreDetailedOffer } from '../../store/offers-data/offers-data';
import Reviews from '../reviews/reviews';
import NearbyOffers from '../nearby-offers/nearby-offers';
import { getAuthStatus, getDetailedOffer, getNearbyOffers, getReviews } from '../../store/selectors/selectros';

function OfferDetailed():JSX.Element {
  const dispatch = useDispatch();
  const detailedOffer = useSelector(getDetailedOffer);
  const nearbyOffers = useSelector(getNearbyOffers);
  const reviews = useSelector(getReviews);
  const authorizationStatus = useSelector(getAuthStatus);

  const [activeCard, setActiveCard] = useState(0);

  const onListItemHover = (activeOffer:number) => {
    setActiveCard(activeOffer);
  };

  const id = Number(useParams().id);

  useEffect(() => {
    store.dispatch(fetchDetailedOfferAction(id));
    store.dispatch(fetchReviewsAction(id));
    return () => {
      dispatch(restoreDetailedOffer());
    };
  }, [id, dispatch]);

  if (!detailedOffer) {
    return <Preloader/>;
  }

  const {title, price, images, rating, description, isPremium, maxAdults, goods, host, type, bedrooms, isFavorite} = detailedOffer;

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

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((photo: string, i: number) => {
                  if (i < 6) {
                    return(
                      <div key={`${id}-${photo}`} className="property__image-wrapper">
                        <img className="property__image" src={photo} alt="Studio"/>
                      </div>
                    );}
                  return '';
                },
                )}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  {
                    isPremium
                      ? <span>Premium</span>
                      : ''
                  }
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <Bookmark isFavorite={isFavorite} id={id} detailed/>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type[0].toUpperCase()+type.slice(1)}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms === 1 ? `${bedrooms} Bedroom` : `${bedrooms} Bedrooms`}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {maxAdults === 1 ? `Max ${maxAdults} adult` : `Max ${maxAdults} adults`}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {
                      goods.map((good) => (
                        <li key={`${id}-${good}`} className="property__inside-item">
                          {good}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    {
                      host.isPro
                        ? <span className="property__user-status">Pro</span>
                        : ''
                    }
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  {
                    reviews
                      ? <Reviews reviews={reviews}/>
                      : <Preloader/>
                  }
                  {
                    authorizationStatus === AuthStatus.Auth ? <ReviewForm/> : ''
                  }
                </section>
              </div>
            </div>
            <section className="property__map map">
              {
                nearbyOffers
                  ? <Map activePoint={activeCard} offers={nearbyOffers}/>
                  : <Preloader/>
              }
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {
                  nearbyOffers
                    ? <NearbyOffers offers={nearbyOffers} onListItemHover={onListItemHover}/>
                    : <Preloader/>
                }
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export {OfferDetailed};
export default OfferDetailed;

