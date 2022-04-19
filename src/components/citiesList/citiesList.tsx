import { CITIES_LIST } from '../../const';

type CityListProps = {
  activeCity: string
  onCityClick: (city:string) => void
}

function CitiesList({activeCity, onCityClick}:CityListProps):JSX.Element {
  return (
    <>
      {CITIES_LIST.map((city) => (
        <li key={city} className="locations__item">
          <a className={city === activeCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href={'/'}
            onClick={(e) => {
              e.preventDefault();
              onCityClick(city);
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
