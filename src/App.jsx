// App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Portfolio from './Portfolio.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}
