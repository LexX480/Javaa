import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BlogForm from '../Components/BlogForm';

const EditBlog = () => {
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

  const handleSubmit = (updatedBlog) => {
    // In a real app, you would put to an API
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const updatedBlogs = blogs.map(b =>
      b.id === id ? { ...updatedBlog, id } : b
    );
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    navigate(`/blog/${id}`);
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading blog...</div>;
  }

  if (!blog) {
    return <div className="text-center py-8">Blog not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Blog Post</h1>
      <BlogForm initialData={blog} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditBlog;