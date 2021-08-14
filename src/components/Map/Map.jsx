import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = ({ setCoords, setBounds, coords }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)'); //isMobile is set to false if the device is larger than 600px

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBL94Lu9XsN-mftjjNL7q88L8tUpK6U2e0' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  );
};

export default Map;