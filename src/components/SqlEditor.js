import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useDispatch } from 'react-redux';
import { setEnteredQuery } from '../redux/actions/query';
import TerminalIcon from '@mui/icons-material/Terminal';

const SqlEditor = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setEnteredQuery(query));
  };
  const handleOnChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
        <TerminalIcon />
        <Typography>Editor</Typography>
      </div>
      <div style={{ display: 'flex' }}>
        <TextField
          name="query"
          fullWidth
          multiline
          rows={3}
          onChange={handleOnChange}
          placeholder="Please enter a query from list of available queries"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Button
            type="submit"
            sx={{ ml: 1 }}
            startIcon={<PlayCircleIcon />}
            variant="contained"
          >
            Execute
          </Button>
          <Button type="reset" sx={{ ml: 1 }}>
            Reset
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SqlEditor;
