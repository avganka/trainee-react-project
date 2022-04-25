import { useDispatch } from 'react-redux';
import { postFavoriteOfferAction } from '../../store/api-actions';
import { Offer } from '../../types/offers';

type BookmarkProps = Pick<Offer, 'isFavorite'|'id'> & {
  detailed?: boolean
}

function Bookmark ({isFavorite, id, detailed = false}: BookmarkProps):JSX.Element {
  const dispatch = useDispatch();

  const onFavoriteClickHandler = () => {
    dispatch(postFavoriteOfferAction(id, isFavorite));
  };

  if (detailed) {
    return (
      <button className={isFavorite ? 'property__bookmark-button property__bookmark-button--active button': 'property__bookmark-button button'}
        type="button" onClick={onFavoriteClickHandler}
      >
        <svg className="property__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  }

  return (
    <button
      className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button': 'place-card__bookmark-button button'}
      type="button"
      onClick={onFavoriteClickHandler}
    >
      <svg
        className="place-card__bookmark-icon"
        width="18"
        height="19"
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default Bookmark;
