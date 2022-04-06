import { cities } from '../../mocks/cities';
import { City } from '../../types/cities';

type CityListProps = {
  city: City
  onCityClick: (city:City) => void
}

function CitiesList({city, onCityClick}:CityListProps):JSX.Element {
  return (
    <>
      {cities.map((item) => (
        <li key={item.title} className="locations__item">
          <a className={city.title === item.title ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href={'#'} onClick={(event) => {
            onCityClick(item);
          }}
          >
            <span>{item.title}</span>
          </a>
        </li>
      ))}
    </>
  );
}

export {CitiesList};
