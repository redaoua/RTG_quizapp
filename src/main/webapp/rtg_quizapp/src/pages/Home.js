import React from 'react';
import Button from '@mui/material-next/Button';
import TextField from '@mui/material/TextField';

const Home = () => {
  return (
        <>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button color="primary" size="medium" variant="elevated">
          Start
        </Button>
        </>
  );
};

export default Home;