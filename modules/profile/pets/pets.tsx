import Head from 'next/head';
import { Container, Layout,  Button } from '@components';
import { Fragment, useEffect, useState } from 'react';
import { profileService } from '@api';

import styles from './pets.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text, lat, lng }) => <div className={styles.marker}>{text}</div>;

const Pets = () => {
  // const dispatch = useDispatch();

  const center = {
    lat: 49.846486489566395,
    lng: 24.028026800377354
  }

  const zoom = 25;

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAPS }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent
          lat={49.846486489566395}
          lng={24.028026800377354}
          text="Я тут!"
        />
      </GoogleMapReact>
    </div>
  )
}

export { Pets };