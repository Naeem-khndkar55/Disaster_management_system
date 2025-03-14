import React, { useState, useEffect } from "react";
import axios from "axios";

const Crisis = () => {
  const [crises, setCrises] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    severity: "low", // Default value
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState("");

  const API_BASE_URL = "http://localhost:5100"; // Adjust if your backend port differs

  // Fetch crises on component mount
  useEffect(() => {
    const fetchCrises = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/crisis`);
        setCrises(response.data);
      } catch (err) {
        setError("Failed to load crises. Please try again later.");
      } finally {
        setFetchLoading(false);
      }
    };
    fetchCrises();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload = {
        title: formData.title,
        location: formData.location,
        severity: formData.severity,
        description: formData.description,
        // image: Not implemented yet; could be added with file upload
      };

      const response = await axios.post(`${API_BASE_URL}/api/crisis`, payload);
      setCrises([...crises, response.data]); // Add new crisis to list

      // Reset form
      setFormData({
        title: "",
        location: "",
        severity: "low",
        description: "",
      });

      alert(
        "Crisis reported successfully! It will be visible after admin approval."
      );
    } catch (err) {
      setError(
        err.response?.data?.msg || "Failed to report crisis. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Severity color mapping
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-orange-600";
      case "low":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Crisis Page</h1>

      {/* Recent Crises */}
      <div className="bg-red-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Crises</h2>
        {fetchLoading ? (
          <p className="text-gray-600">Loading crises...</p>
        ) : error && !crises.length ? (
          <p className="text-red-500">{error}</p>
        ) : crises.length > 0 ? (
          <ul className="space-y-4">
            {crises.map((crisis) => (
              <li key={crisis._id} className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-bold">{crisis.title}</h3>
                <p>
                  Severity:{" "}
                  <span
                    className={`${getSeverityColor(
                      crisis.severity
                    )} font-medium`}
                  >
                    {crisis.severity.charAt(0).toUpperCase() +
                      crisis.severity.slice(1)}
                  </span>
                </p>
                <p>Location: {crisis.location}</p>
                <p>Description: {crisis.description}</p>
                <p className="text-sm text-gray-500">
                  Status: {crisis.status} - Reported on{" "}
                  {new Date(crisis.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No crises reported yet.</p>
        )}
      </div>

      {/* Add a New Crisis Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Report a Crisis</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Crisis Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter crisis title"
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Severity</label>
            <select
              name="severity"
              value={formData.severity}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Provide crisis details"
              className="w-full p-2 border rounded-lg"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-red-600 text-white px-4 py-2 rounded-lg w-full ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-500"
            }`}
          >
            {loading ? "Submitting..." : "Submit Crisis"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Crisis;
