import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useParams} from 'react-router-dom';
import { AuthStatus, MOUNTHS } from '../../const';
import { loadDetailedOfferFromServer, loadNearbyOffersFromServer, loadReviewsFromServer } from '../../store/api-actions';
import { store } from '../../store/store';
import { State } from '../../types/state';
import ReviewForm from '../form-review/form-review';
import Logo from '../logo/logo';
import { Navigation } from '../navigation/navigation';
import PageNotFound from '../page-not-found/page-not-found';
import { Preloader } from '../preloader/preloader';
import Map from '../map/map';


const mapStateToProps = ({detailedOffer, reviews, nearbyOffers, authorizationStatus}: State) => ({
  detailedOffer,
  nearbyOffers,
  reviews,
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function OfferDetailed({detailedOffer, reviews, nearbyOffers, authorizationStatus}:PropsFromRedux):JSX.Element {
  const id = Number(useParams().id);

  useEffect(() => {
    store.dispatch(loadDetailedOfferFromServer(id));
    store.dispatch(loadReviewsFromServer(id));
    store.dispatch(loadNearbyOffersFromServer(id));
  }, [id]);

  if (!detailedOffer) {
    return <PageNotFound/>;
  }

  if (!nearbyOffers) {
    return <Preloader/>;
  }

  const {title, price, images, rating, description, isPremium, maxAdults, goods, host, type, bedrooms} = detailedOffer;

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
              <Navigation authStatus={authorizationStatus}/>
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
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
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
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ul className="reviews__list">
                    {
                      reviews.map((review) => {
                        const date = new Date(reviews[0].date);
                        const result = `${date.getDate()} ${MOUNTHS[date.getMonth()]} ${date.getFullYear()}`;
                        return (
                          <li key={review.id} className="reviews__item">
                            <div className="reviews__user user">
                              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                                <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
                              </div>
                              <span className="reviews__user-name">
                                {review.user.name}
                              </span>
                            </div>
                            <div className="reviews__info">
                              <div className="reviews__rating rating">
                                <div className="reviews__stars rating__stars">
                                  <span style={{width: '80%'}}></span>
                                  <span className="visually-hidden">{review.rating}</span>
                                </div>
                              </div>
                              <p className="reviews__text">
                                {review.comment}
                              </p>
                              <time className="reviews__time" dateTime={review.date}>{result}</time>
                            </div>
                          </li>
                        );})
                    }

                  </ul>
                  {
                    authorizationStatus === AuthStatus.Auth ? <ReviewForm/> : ''
                  }

                </section>
              </div>
            </div>
            <section className="property__map map">
              {
                nearbyOffers ? <Map activePoint={id} offers={nearbyOffers}/> : ''
              }

            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {nearbyOffers.map((offer) =>
                  (
                    <article key={offer.id} className="near-places__card place-card">
                      <div className="near-places__image-wrapper place-card__image-wrapper">
                        <a href="#todo">
                          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place img"/>
                        </a>
                      </div>
                      <div className="place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">&euro;{offer.price}</b>
                            <span className="place-card__price-text">&#47;&nbsp;night</span>
                          </div>

                          <button className={offer.isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button': 'place-card__bookmark-button button'} type="button">
                            <svg className="place-card__bookmark-icon" width="18" height="19">
                              <use xlinkHref="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">In bookmarks</span>
                          </button>

                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span style={{ width: `${offer.rating * 100 / 5}%` }}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <a href="#todo">{offer.title}</a>
                        </h2>
                        <p className="place-card__type">{offer.type[0].toUpperCase()+offer.type.slice(1)}</p>
                      </div>
                    </article>
                  ),
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export {OfferDetailed};
export default connector(OfferDetailed);

