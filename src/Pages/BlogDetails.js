import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch from an API
    const fetchBlog = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
          const foundBlog = blogs.find(b => b.id === id);
          if (foundBlog) {
            setBlog(foundBlog);
          } else {
            navigate('/');
          }
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching blog:', error);
        navigate('/');
      }
    };

    fetchBlog();
  }, [id, navigate]);

  const handleDelete = () => {
    // In a real app, you would delete from an API
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const updatedBlogs = blogs.filter(b => b.id !== id);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    navigate('/');
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading blog...</div>;
  }

  if (!blog) {
    return <div className="text-center py-8">Blog not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <article>
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <p className="text-gray-600 mb-6">Written by {blog.author}</p>
        <div className="prose max-w-none">
          <p className="whitespace-pre-line">{blog.content}</p>
        </div>
      </article>

      <div className="mt-8 flex space-x-4">
        <button
          onClick={() => navigate(`/edit/${blog.id}`)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;