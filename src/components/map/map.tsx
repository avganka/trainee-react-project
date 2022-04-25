import { Icon, Marker } from 'leaflet';
import { memo, useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offers';

type MapProps = {
  activePoint: number,
  offers: Offer[],
}

const defaultCustomIcon = new Icon({
  iconUrl: './img/pin.svg',
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: './img/pin-active.svg',
  iconAnchor: [20, 40],
});


function Map ({activePoint, offers}:MapProps):JSX.Element {
  const city = offers[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers = [];
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker.setIcon(
          activePoint !== undefined && offer.id === activePoint
            ? currentCustomIcon
            : defaultCustomIcon,
        )
          .addTo(map);
        markers.push(marker);
      });
    }
  }, [offers, map, activePoint]);

  return <div style = {{height: '100%'}} ref={mapRef}></div>;
}

export default memo(Map);

