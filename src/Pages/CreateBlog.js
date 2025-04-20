import { useNavigate } from 'react-router-dom';
import BlogForm from '../Components/BlogForm';

const CreateBlog = () => {
  const navigate = useNavigate();

  const handleSubmit = (newBlog) => {
    // In a real app, you would post to an API
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const newBlogWithId = { ...newBlog, id: Date.now().toString() };
    localStorage.setItem('blogs', JSON.stringify([...blogs, newBlogWithId]));
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
      <BlogForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateBlog;