import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header';
import Home from './Pages/Home';
import CreateBlog from './Pages/CreateBlog';
import BlogDetails from './Pages/BlogDetails';
import EditBlog from './Pages/EditBlog';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/edit/:id" element={<EditBlog />} />
          </Routes>
        </div>
        <div>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;