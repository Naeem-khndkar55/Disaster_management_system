import React, { useState } from "react";

const Dashboard = () => {
  const [role, setRole] = useState(true);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4"> Dashboard</h1>

      {role ? (
        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500">
            Manage Volunteers
          </button>
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500">
            Approve Crises
          </button>
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500">
            Generate Reports
          </button>
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500">
            Manage Inventory
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-500">
            Respond to Crises
          </button>
          <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-500">
            View Assigned Tasks
          </button>
          <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-500">
            Manage Inventory
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
