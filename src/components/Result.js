import React, { useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchQuery1Data,
  fetchQuery2Data,
  fetchQuery3Data,
  fetchQuery4Data,
} from '../redux/actions/tableData';
import { Typography } from '@mui/material';
import ShowToastMessage from './ShowToastMessage';
import columns from '../utils/columns';

const Result = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.tabledata);
  const q = useSelector((state) => state.query);

  useEffect(() => {
    if (q === '') {
      dispatch(fetchQuery1Data());
    } else if (q.query === 'SELECT * from users;') {
      ShowToastMessage('success', 'Query compiled successfully');
    } else if (q.query === 'SELECT * from users where gender="Male";') {
      dispatch(fetchQuery2Data());
      ShowToastMessage('success', 'Query compiled successfully');
    } else if (q.query === 'SELECT * from users where gender="Female";') {
      dispatch(fetchQuery3Data());
      ShowToastMessage('success', 'Query compiled successfully');
    } else if (
      q.query === 'SELECT * from users where id BETWEEN 250 AND 475;'
    ) {
      dispatch(fetchQuery4Data());
      ShowToastMessage('success', 'Query compiled successfully');
    } else {
      ShowToastMessage(
        'error',
        'Cannot execute! Please select a query from the list of available queries'
      );
    }
  }, [dispatch, q]);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <div style={{ display: 'flex', marginBottom: '15px', gap: '5px' }}>
        <Typography>USERS</Typography>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        slots={{
          toolbar: GridToolbar,
        }}
        initialState={{}}
      />
    </div>
  );
};

export default Result;
