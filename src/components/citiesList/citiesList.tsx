import { useDispatch } from 'react-redux';
import { Cities } from '../../const';
import { fetchOffersAction } from '../../store/api-actions';
import { changeCity } from '../../store/offers-data/offers-data';
import { store } from '../../store/store';

type CityListProps = {
  activeCity: `${Cities}`
}

function CitiesList({activeCity}:CityListProps):JSX.Element {
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
              onCityClickHandler(city);
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </>
  );
}

export {CitiesList};
