import { memo } from 'react';
import { Cities } from '../../const';

type CityListProps = {
  activeCity: `${Cities}`,
  onCityChangeHandler: (city: `${Cities}`) => void;
}

function CitiesList({activeCity, onCityChangeHandler}:CityListProps):JSX.Element {
  // const dispatch = useDispatch();

  // const onCityClickHandler = (city: string) => {
  //   dispatch(changeCity(city as `${Cities}`));
  //   store.dispatch(fetchOffersAction());
  // };

  return (
    <>
      {Object.keys(Cities).map((city) => (
        <li key={city} className="locations__item">
          <a className={city === activeCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href={'/'}
            onClick={(evt) => {
              evt.preventDefault();
              onCityChangeHandler(city as `${Cities}`);
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
