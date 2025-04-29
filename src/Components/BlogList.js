import { Link } from 'react-router-dom';
import Search from './Search';
import { useState } from 'react';

const StarRating = ({ blogId }) => {
  const [rating, setRating] = useState(
    parseInt(localStorage.getItem(`blog_${blogId}_rating`)) || 0
  );
  const [hover, setHover] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
    localStorage.setItem(`blog_${blogId}_rating`, newRating);
  };

  return (
    <div className="mt-3 flex items-center">
      <p className="text-sm text-gray-600 mr-2">Rate this:</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="text-xl focus:outline-none transition-all duration-150 transform hover:scale-125"
        >
          <span className={
            star <= (hover || rating)
              ? "text-yellow-500 drop-shadow-[0_0_4px_rgba(234,179,8,0.5)]"
              : "text-gray-300"
          }>
            {star <= (hover || rating) ? '★' : '☆'}
          </span>
        </button>
      ))}
      {rating > 0 && (
        <span className="ml-2 text-sm text-gray-500 animate-pulse">
          (Rated: {rating})
        </span>
      )}
    </div>
  );
};

const BlogList = ({ blogs, title }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow p-4">
        <Search />
        <h2 className="text-2xl mt-11 font-bold mb-6">{title}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {blog.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <Link to={`/blog/${blog.id}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-orange-500 flex justify-center">{blog.title}</h3>
                </Link>
                <div className='flex gap-3 items-center'>
                  <i className="fa-regular fa-user"></i>
                  <p>||</p>
                  <p className="text-gray-600 mb-0">Written by {blog.author}</p>
                </div>
                <br />

                <p className="text-gray-700 line-clamp-3">{blog.content}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block mt-4 text-orange-500 hover:text-orange-500 font-medium"
                >
                  Read more...
                </Link>

                <StarRating blogId={blog.id} />
                <div className='flex justify-between'>
                  <i className="fa-solid fa-thumbs-up hover:text-blue-500 hover:scale-110 transition-all duration-200 cursor-pointer" ></i>
                  <i className="fa-solid fa-comment hover:text-green-500 hover:scale-110 transition-all duration-200 cursor-pointer"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Standard Footer */}
      <footer className="bg-black text-white py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">BlogHub</h3>
              <p className="text-gray-400">Discover and share amazing stories</p>
            </div>
            <div className="flex space-x-4">
              <Link to="/about" className="hover:text-orange-500 transition">About Us</Link>
              <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
              <Link to="/privacy" className="hover:text-orange-500 transition">Privacy Policy</Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
            <div className="flex justify-center space-x-4 mb-2">
              <a href="#" className="hover:text-orange-500"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-orange-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-orange-500"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-orange-500"><i className="fab fa-linkedin"></i></a>
            </div>
            <p>© {new Date().getFullYear()} BlogHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogList;