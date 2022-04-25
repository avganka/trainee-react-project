import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SortingTypes } from '../../const';
import { sortOffers } from '../../store/offers-data/offers-data';
import { RootState } from '../../store/root-reducer';


function Sort():JSX.Element {
  const sortingType = useSelector(({DATA}: RootState) => DATA.sortingType);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggleSortBlock = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleSortBlock}>
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={isOpen ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom '}>
        {Object.values(SortingTypes).map((sortingOption) => (
          <li
            key={sortingOption}
            className={sortingOption === sortingType ? 'places__option places__option--active':'places__option'}
            tabIndex={0}
            data-sort-type={sortingOption}
            onClick={() => {
              setIsOpen(false);
              return dispatch(sortOffers(sortingOption as `${SortingTypes}`));
            }}
          >
            {sortingOption}
          </li>
        ))}
      </ul>
    </form>
  );
}

export {Sort};
export default memo(Sort);
