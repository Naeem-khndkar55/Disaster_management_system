import React from "react";

const Volunteer = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Volunteer Page</h1>

      {/* Available Volunteers */}
      <div className="bg-green-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Available Volunteers</h2>
        <ul className="list-disc pl-4 space-y-2">
          <li>John Doe - Medical Assistance</li>
          <li>Jane Smith - Logistics</li>
          <li>Michael Lee - Food Distribution</li>
        </ul>
      </div>

      {/* Volunteer Registration Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Become a Volunteer</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Skills / Area of Help</label>
            <input
              type="text"
              placeholder="e.g. Medical Aid, Logistics"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 w-full"
          >
            Register as a Volunteer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
