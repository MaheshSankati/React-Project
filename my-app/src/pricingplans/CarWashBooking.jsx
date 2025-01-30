import React, { useState } from "react";

const CarWashBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    date: "",
    time: "",
    plan: "Basic Cleaning",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Booked:", formData);
    alert("Your appointment has been booked!");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Car Wash Booking</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Basic Cleaning">Basic Cleaning</option>
          <option value="Premium Service">Premium Service</option>
          <option value="Express Washing">Express Washing</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default CarWashBooking;
