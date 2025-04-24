import { useState, useEffect } from 'react';
import BlogList from '../Components/BlogList';
import Footer from '../Components/Footer';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch from an API
    const fetchBlogs = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
          setBlogs(storedBlogs);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {isLoading ? (
          <div className="text-center py-8">
            <p>Loading blogs...</p>
          </div>
        ) : blogs.length > 0 ? (
          <BlogList blogs={blogs} title="All Blog Posts" />
        ) : (
          <div className="text-center py-8">
            <p>No blogs found. Create one!</p>
          </div>
        )}
      </main>

    </div>
  );
};

export default Home;