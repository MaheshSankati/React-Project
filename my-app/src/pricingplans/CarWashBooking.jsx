import React, { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const CarServiceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    date: "",
    serviceType: "Basic Cleaning",
    serviceAmount: "1000",
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-assign service amount
    let updatedAmount = formData.serviceAmount;
    if (name === "serviceType") {
      if (value === "Basic Cleaning") updatedAmount = "1000";
      else if (value === "Premium Service") updatedAmount = "1500";
      else if (value === "Express Washing") updatedAmount = "2000";
    }

    setFormData({ ...formData, [name]: value, serviceAmount: updatedAmount });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.mobile ||
      !formData.address ||
      !formData.date ||
      !formData.serviceType
    ) {
      setError("All fields are required!");
      return;
    }

    setError("");
    axios
      .post(
        "https://car-washing-89214-default-rtdb.firebaseio.com/appointments.json",
        formData
      )
      .then(() => {
        alert("Car Service Booking Confirmed!");
        generatePDF(); // Call function to generate PDF
      });
  };

  // Function to generate PDF
  const generatePDF = () => {
    const input = document.getElementById("booking-summary"); // Target the booking details
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 180, 160);
      pdf.save("Car_Service_Booking.pdf");
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 mt-16">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Car Servicing Booking
        </h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Address
            </label>
            <textarea
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Service Type
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Basic Cleaning">Basic Cleaning</option>
              <option value="Premium Service">Premium Service</option>
              <option value="Express Washing">Express Washing</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Service Amount (₹)
            </label>
            <input
              type="text"
              name="serviceAmount"
              value={formData.serviceAmount}
              readOnly
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Book Appointment
          </button>
        </form>

        {/* Booking Summary (for PDF generation) */}
        <div
          id="booking-summary"
          className="mt-6 p-4 border rounded bg-gray-50"
        >
          <center><h1 className="text-lg font-bold text-red-600">Bunny's Car Servicing</h1></center>
          <h3 className="text-lg font-bold text-gray-700">Booking Summary</h3>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Mobile:</strong> {formData.mobile}
          </p>
          <p>
            <strong>Address:</strong> {formData.address}
          </p>
          <p>
            <strong>Date:</strong> {formData.date}
          </p>
          <p>
            <strong>Service Type:</strong> {formData.serviceType}
          </p>
          <p>
            <strong>Service Amount:</strong> ₹{formData.serviceAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarServiceForm;
