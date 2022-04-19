import { Icon, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offers';
import { connect, ConnectedProps } from 'react-redux';
import { Actions, Dispatch } from '@reduxjs/toolkit';
import { State } from '../../types/state';

type MapProps = {
  activePoint: number
}

const defaultCustomIcon = new Icon({
  iconUrl: './img/pin.svg',
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: './img/pin-active.svg',
  iconAnchor: [20, 40],
});


const mapStateToProps = ({activeCity, offers}: State) => ({
  activeCity,
  offers,
});


const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MapProps;


function Map ({activePoint, offers, activeCity}:ConnectedComponentProps):JSX.Element {

  const city = offers.filter((offer) => offer.city.name === activeCity)[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
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
      });
    }

  }, [offers, map, activePoint]);

  return <div style = {{height: '100%'}} ref={mapRef}></div>;
}

export {Map};
export default connector(Map);
// export default Map;
