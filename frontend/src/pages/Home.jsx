import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Fund Section */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Total Fund Raised</h2>
        <p className="text-2xl font-bold text-blue-600">$100,000</p>
        <div className="h-40 bg-white mt-4 rounded-lg shadow-sm flex items-center justify-center">
          {/* Placeholder for Bar Chart */}
          <p className="text-gray-500">
            Bar chart (Daily Expenses & Donations)
          </p>
        </div>
        <Link to="/donation">
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
            Donate Now
          </button>
        </Link>
      </div>

      {/* Crisis Section */}
      <div className="bg-red-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Recent Crises</h2>
        <ul className="list-disc pl-4">
          <li>Flood in XYZ region - Urgent help needed</li>
          <li>Earthquake relief - Volunteers required</li>
          <li>Fire outbreak - Emergency supplies needed</li>
        </ul>
        <Link to="/crisis">
          <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500">
            View Crises
          </button>
        </Link>
      </div>

      {/* Volunteer Section */}
      <div className="bg-green-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Available Volunteers</h2>
        <ul className="list-disc pl-4">
          <li>John Doe - Medical Assistance</li>
          <li>Jane Smith - Logistics</li>
          <li>Michael Lee - Food Distribution</li>
        </ul>
        <Link to="/volunteer">
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500">
            Join as a Volunteer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
