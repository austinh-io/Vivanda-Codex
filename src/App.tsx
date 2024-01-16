import { Container } from '@mui/material';
import './App.css';
import Test from './components/test';

function App() {
  return (
    <Container sx={{ bgcolor: 'gray', height: '100vh' }}>
      <Test />
    </Container>
  );
}

export default App;
