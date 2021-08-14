import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api/index';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


const App = () => {
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    })
  }, []);

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne)
    .then((data) => {
      setPlaces(data);
    })
  }, [coords, bounds]); //if we dont supply the dependency array or leave it empty, the code inside our useEffect block will only run at the start of the application. Eg the geolocation useEffect above.

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;