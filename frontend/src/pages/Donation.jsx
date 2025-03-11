import React from "react";

const Donation = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Donation Page</h1>

      {/* Total Donations and Chart */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Total Donations</h2>
        <p className="text-2xl font-bold text-blue-600">$100,000</p>
        <div className="h-40 bg-white mt-4 rounded-lg shadow-sm flex items-center justify-center">
          <p className="text-gray-500">
            Bar chart of daily donations & expenses
          </p>
        </div>
      </div>

      {/* Donation Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Make a Donation</h2>
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
            <label className="block text-gray-700">Donation Amount ($)</label>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 w-full"
          >
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donation;
