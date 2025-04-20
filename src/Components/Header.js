import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MyBlog</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/create" className="hover:text-blue-200">Create Post</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;