import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cities } from '../../const';
import { fetchOffersAction } from '../../store/api-actions';
import { changeCity } from '../../store/offers-data/offers-data';
import { getActiveCity } from '../../store/selectors/selectros';
import { store } from '../../store/store';


function CitiesList():JSX.Element {
  const activeCity = useSelector(getActiveCity);
  const dispatch = useDispatch();

  const onCityClickHandler = (city: string) => {
    dispatch(changeCity(city as `${Cities}`));
    store.dispatch(fetchOffersAction());
  };

  return (
    <>
      {Object.keys(Cities).map((city) => (
        <li key={city} className="locations__item">
          <a className={city === activeCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href={'/'}
            onClick={(evt) => {
              evt.preventDefault();
              onCityClickHandler(city as `${Cities}`);
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </>
  );
}

export default memo(CitiesList);
