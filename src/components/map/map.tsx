import { Icon, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { City } from '../../types/cities';
import { Offer } from '../../types/offers';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City,
  offers: Offer[],
  activePoint: string
}

const defaultCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


function Map ({city, offers, activePoint }:MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.coords[0],
          lng: offer.coords[1],
        });
        marker.setIcon(
          activePoint !== undefined && offer.id === activePoint
            ? currentCustomIcon
            : defaultCustomIcon,
        )
          .addTo(map);
      });
    }

  }, [map, offers, activePoint, city]);

  return <div style = {{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
