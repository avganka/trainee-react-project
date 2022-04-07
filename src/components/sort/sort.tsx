import { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { sorting } from '../../store/actions';
import { Actions } from '../../types/action';
import { State } from '../../types/state';

// export const enum SORTING_TYPES {
//   Popular = 'Popular',
//   PriceLowToHigh = 'Price: low to high',
//   PriceHighToLow = 'Price: high to low',
//   RatingTopRated = 'Top rated first'
// }

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
// type ConnectedComponentProps = PropsFromRedux & MainPageProps;

function Sort({onSortOptionClick, sortingType}:PropsFromRedux):JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
                    Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {SORTING_TYPES.map((sortingOption) => (
          <li
            key={sortingOption}
            className={sortingOption === sortingType ? 'places__option places__option--active':'places__option'}
            tabIndex={0}
            data-sort-type={sortingOption}
            onClick={() => onSortOptionClick(sortingOption)}
          >
            {sortingOption}
          </li>
        ))}
        {/* <li
          className="places__option places__option--active"
          tabIndex={0}
        >
                      Popular
        </li>
        <li className="places__option" tabIndex={0} onClick={onSortOptionClick}>
                      Price: low to high
        </li>
        <li className="places__option" tabIndex={0} >
                      Price: high to low
        </li>
        <li className="places__option" tabIndex={0}>
                      Top rated first
        </li> */}
      </ul>
    </form>
  );
}

export {Sort};
export default connector(Sort);
