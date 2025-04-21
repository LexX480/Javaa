import { Link } from 'react-router-dom';
import Search from './Search';

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <Search />
      <h2 className="text-2xl mt-11 font-bold mb-6">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {/* Add image preview at the top of each blog card */}
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
                <h3 className="text-xl font-semibold mb-2 hover:text-orange-500">{blog.title}</h3>
              </Link>
              <p className="text-gray-600 mb-4">Written by {blog.author}</p>
              <p className="text-gray-700 line-clamp-3">{blog.content}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="inline-block mt-4 text-blue-600 hover:text-orange-500 font-medium"
              >
                Read more...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;