import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email) {
      const newData = {
        name,
        email,
      };

      setFormData([...formData, newData]);
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl text-center mb-4">Registration Form</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
      {formData.length > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl text-center mb-4">Entered Data</h2>
          <ul className="max-w-md mx-auto bg-gray-100 p-4 rounded">
            {formData.map((data, index) => (
              <li
                key={index}
                className="border-b border-gray-300 py-2 last:border-b-0"
              >
                <strong>Name:</strong> {data.name}, <strong>Email:</strong>{' '}
                {data.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
