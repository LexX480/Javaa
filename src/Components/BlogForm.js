import { useState } from 'react';

const BlogForm = ({ initialData = {}, onSubmit }) => {
  const [blog, setBlog] = useState({
    title: initialData.title || '',
    author: initialData.author || '',
    content: initialData.content || '',
    image: initialData.image || '', // Now stores either URL or base64
  });

  const [previewImage, setPreviewImage] = useState(initialData.image || null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setPreviewImage(base64String);
        setBlog(prev => ({ ...prev, image: base64String }));
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
      <div className="w-full">
        <div className="bg-white p-6 rounded-lg shadow-md h-full w-full">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Blog Cover Image</label>
            <input
              id='image'
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {(previewImage || blog.image) && (
            <div className="mt-4 border rounded-lg overflow-hidden">
              <img
                src={previewImage || blog.image}
                alt="Preview"
                className="w-full h-64 object-cover"
              />
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
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;