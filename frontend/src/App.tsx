import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import SecurityList from "./components/SecurityList"
import SecurityDetail from './components/SecurityDetail'
import { Container } from '@mui/material'
function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<SecurityList />}></Route>
          <Route path="/securities" element={<SecurityList />}></Route>
          <Route path="/securities/:ticker" element={<SecurityDetail />}></Route>
        </Routes>
      </Container>
    </Router>
  )
}

export default App
