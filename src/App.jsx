import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes path="/">
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
