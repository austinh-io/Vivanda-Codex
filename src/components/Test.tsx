import { Button, Typography } from '@mui/material';

export default function Test() {
  return (
    <>
      <Typography variant='h1'>Hello, world!</Typography>
      <Button
        variant='contained'
        sx={{ mt: '1rem' }}>
        Click Me!
      </Button>
    </>
  );
}
