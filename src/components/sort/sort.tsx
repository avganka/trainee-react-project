import { Dispatch, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { sorting } from '../../store/actions';
import { Actions } from '../../types/action';
import { State } from '../../types/state';

export const SORTING_TYPES = ['Popular', 'Price: low to high', 'Price: high to low' ,'Top rated first'];

const mapStateToProps = ({sortingType}: State) => ({
  sortingType,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSortOptionClick (sortingOption: string) {
    dispatch(sorting(sortingOption));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Sort({onSortOptionClick, sortingType}:PropsFromRedux):JSX.Element {
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
        {SORTING_TYPES.map((sortingOption) => (
          <li
            key={sortingOption}
            className={sortingOption === sortingType ? 'places__option places__option--active':'places__option'}
            tabIndex={0}
            data-sort-type={sortingOption}
            onClick={() => {
              setIsOpen(false);
              return onSortOptionClick(sortingOption);
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
export default connector(Sort);
