import React from "react";

const Crisis = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Crisis Page</h1>

      {/* Recent Crises */}
      <div className="bg-red-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Crises</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-bold">Flood in XYZ region</h3>
            <p>
              Severity: <span className="text-red-600 font-medium">High</span>
            </p>
            <p>Description: Immediate help required for evacuation.</p>
          </li>
          <li className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-bold">Earthquake Relief Needed</h3>
            <p>
              Severity:{" "}
              <span className="text-orange-600 font-medium">Moderate</span>
            </p>
            <p>Description: Medical supplies and food needed urgently.</p>
          </li>
          <li className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-bold">Fire Outbreak in ABC City</h3>
            <p>
              Severity: <span className="text-yellow-600 font-medium">Low</span>
            </p>
            <p>Description: Volunteers required for damage assessment.</p>
          </li>
        </ul>
      </div>

      {/* Add a New Crisis Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Report a Crisis</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Crisis Title</label>
            <input
              type="text"
              placeholder="Enter crisis title"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Severity</label>
            <select className="w-full p-2 border rounded-lg">
              <option value="high">High</option>
              <option value="moderate">Moderate</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              rows="4"
              placeholder="Provide crisis details"
              className="w-full p-2 border rounded-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 w-full"
          >
            Submit Crisis
          </button>
        </form>
      </div>
    </div>
  );
};

export default Crisis;
