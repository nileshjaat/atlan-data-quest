import React from 'react';
import { Grid } from '@mui/material';
import Result from './Result';
import AvailableQueries from './AvailableQueries';
import SqlEditor from './SqlEditor';

const Main = () => (
  <>
    <Grid container sx={{ mt: 2, justifyContent: 'center' }} spacing={1}>
      <Grid item sm={12} xs={11} md={5}>
        <AvailableQueries />
      </Grid>
      <Grid item sm={12} xs={11} md={6}>
        <SqlEditor />
      </Grid>
    </Grid>
    <Grid container sx={{ mt: 2, justifyContent: 'center' }} spacing={2}>
      <Grid item sm={11} xs={11} md={11}>
        <Result />
      </Grid>
    </Grid>
  </>
);

export default Main;
