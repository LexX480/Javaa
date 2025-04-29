import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50 ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold ">BlogHub</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/create" className="hover:cursor-auto"><button className='bg-orange-500 px-6 py-2 font-medium rounded-lg'>Create Post</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;