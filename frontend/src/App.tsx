import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SecurityList from './components/SecurityList';
import SecurityDetail from './components/SecurityDetail';
import { Container, Box } from '@mui/material';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          backgroundColor: '#131C20',
        }}
      >
        <Header />
        <Container sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<SecurityList />}></Route>
            <Route path="/securities" element={<SecurityList />}></Route>
            <Route
              path="/securities/:ticker"
              element={<SecurityDetail />}
            ></Route>
          </Routes>
        </Container>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
