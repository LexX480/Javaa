import { useState } from 'react';

const BlogForm = ({ initialData = {}, onSubmit }) => {
  const [blog, setBlog] = useState({
    title: initialData.title || '',
    author: initialData.author || '',
    content: initialData.content || '',
    image: initialData.image || null, // Added image state
  });

  const [previewImage, setPreviewImage] = useState(null); // For image preview

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setBlog(prev => ({ ...prev, image: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(blog);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Image Upload & Preview Card (Left Side) */}
      <div className="w-full md:w-1/3">
        <div className="bg-white p-6 rounded-lg shadow-md h-full">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Blog Cover Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {previewImage && (
            <div className="mt-4 border rounded-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${previewImage})` }}
              ></div>
              <div className="p-3 bg-gray-50">
                <p className="text-sm text-gray-600">Image Preview</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Blog Form (Right Side) */}
      <div className="w-full md:w-2/3">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={blog.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="author" className="block text-gray-700 font-medium mb-2">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              value={blog.author}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-medium mb-2">Content</label>
            <textarea
              id="content"
              name="content"
              value={blog.content}
              onChange={handleChange}
              rows="8"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;