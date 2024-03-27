import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import SecurityList from "./components/SecurityList"
import SecurityDetail from './components/SecurityDetail'
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<SecurityList />}></Route>
        <Route path="/securities" element={<SecurityList />}></Route>
        <Route path="/securities/:ticker" element={<SecurityDetail />}></Route>
      </Routes>
    </Router>
  )
}

export default App
