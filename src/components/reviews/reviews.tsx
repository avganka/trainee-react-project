import { memo } from 'react';
import { MOUNTHS } from '../../const';
import { Review } from '../../types/reviews';

type ReviewsProps = {
  reviews: Review[]
}

function Reviews ({reviews}: ReviewsProps):JSX.Element {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        { reviews.map((review) => {
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
          );
        })}
      </ul>
    </>

  );
}

export default memo(Reviews);
