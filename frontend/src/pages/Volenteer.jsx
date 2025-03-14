import React, { useState, useEffect } from "react";
import axios from "axios";

const Volunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    password: "volunteer123", // Default password for simplicity; adjust as needed
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);

  const API_BASE_URL = "http://localhost:5100"; // Adjust if your backend port differs

  // Fetch available volunteers on component mount
  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/volunteer`);
        setVolunteers(response.data);
      } catch (err) {
        setError("Failed to load volunteers. Please try again later.");
      } finally {
        setFetchLoading(false);
      }
    };
    fetchVolunteers();
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
        username: formData.email, // Using email as username to match backend
        password: formData.password,
        name: formData.name,
        phone: formData.phone,
        role: "volunteer", // Explicitly set role as volunteer
        assignedTask: formData.skills, // Using skills as assignedTask
      };

      const response = await axios.post(
        `${API_BASE_URL}/api/auth/register`,
        payload
      );
      const { token } = response.data;

      // Optionally store token if you want to log them in immediately
      localStorage.setItem("token", token);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        skills: "",
        password: "volunteer123",
      });

      // Refetch volunteers to update the list
      const updatedVolunteers = await axios.get(
        `${API_BASE_URL}/api/volunteer`
      );
      setVolunteers(updatedVolunteers.data);

      alert("Successfully registered as a volunteer!");
    } catch (err) {
      setError(
        err.response?.data?.msg || "Failed to register. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Volunteer Page</h1>

      {/* Available Volunteers */}
      <div className="bg-green-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Available Volunteers</h2>
        {fetchLoading ? (
          <p className="text-gray-600">Loading volunteers...</p>
        ) : error && !volunteers.length ? (
          <p className="text-red-500">{error}</p>
        ) : volunteers.length > 0 ? (
          <ul className="list-disc pl-4 space-y-2">
            {volunteers.map((volunteer) => (
              <li key={volunteer._id}>
                {volunteer.name} -{" "}
                {volunteer.assignedTask || "No task assigned"}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No volunteers available yet.</p>
        )}
      </div>

      {/* Volunteer Registration Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Become a Volunteer</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Skills / Area of Help</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g. Medical Aid, Logistics"
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-green-600 text-white px-4 py-2 rounded-lg w-full ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-500"
            }`}
          >
            {loading ? "Registering..." : "Register as a Volunteer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
