import { Link } from "react-router-dom";
// import "./OrderForm.scss";
import React, { useState } from "react";

const Dashboard = () => {
  const [donations, setDonations] = useState([
    {
      id: 1,
      foodType: "Hot Meals",
      quantity: "50",
      status: "Available",
      pickupDeadline: "2024-10-08 5:00 PM",
    },
    {
      id: 2,
      foodType: "Packaged Goods",
      quantity: "100",
      status: "Claimed",
      pickupDeadline: "2024-10-07 3:00 PM",
    },
  ]);

  const [newDonation, setNewDonation] = useState({
    foodType: "",
    quantity: "",
    pickupDeadline: "",
  });

  const handleInputChange = (e) => {
    setNewDonation({ ...newDonation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = donations.length + 1;
    setDonations([...donations, { ...newDonation, id, status: "Available" }]);
    setNewDonation({ foodType: "", quantity: "", pickupDeadline: "" });
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Dining Hall Dashboard</h1>
      </header>

      {/* Summary Section */}
      <section className="summary-section">
        <div className="summary-card">
          <h3>Total Donations</h3>
          <p>{donations.length}</p>
        </div>
        <div className="summary-card">
          <h3>Meals Saved</h3>
          <p>{donations.reduce((sum, d) => sum + parseInt(d.quantity), 0)}</p>
        </div>
      </section>

      {/* New Donation Form */}
      <section className="donation-form-section">
        <h2>Post a New Donation</h2>
        <form onSubmit={handleSubmit} className="donation-form">
          <label>
            Food Type:
            <input
              type="text"
              name="foodType"
              value={newDonation.foodType}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={newDonation.quantity}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Pickup Deadline:
            <input
              type="datetime-local"
              name="pickupDeadline"
              value={newDonation.pickupDeadline}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Post Donation</button>
        </form>
      </section>

      {/* Existing Donations Table */}
      <section className="donations-section">
        <h2>Existing Donations</h2>
        <table className="donations-table">
          <thead>
            <tr>
              <th>Food Type</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Pickup Deadline</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.id}>
                <td>{donation.foodType}</td>
                <td>{donation.quantity}</td>
                <td>{donation.status}</td>
                <td>{donation.pickupDeadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;

// Notes:
