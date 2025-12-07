import React, { useState } from "react";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    room: "",
    roommates: "",
    name: "",
    phone: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your application has been submitted!");

    setFormData({
      room: "",
      roommates: "",
      name: "",
      phone: "",
      contact: "",
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center  p-4"
      id="apply"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl px-10 py-8 w-full max-w-lg sm:max-w-md md:max-w-lg transition-all"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Apply for a Room{" "}
        </h2>

        <label className="block mb-2 font-medium text-gray-700">Room</label>
        <input
          type="text"
          name="room"
          value={formData.room}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Room you want to apply for"
          required
        />
        <label className="block mb-2 font-medium text-gray-700">
          Roommates / Contacts
        </label>
        <input
          type="text"
          name="roommates"
          value={formData.roommates}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your roommates or contacts"
        />
        <label className="block mb-2 font-medium text-gray-700">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your full name"
          required
        />
        <label className="block mb-2 font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your phone number"
          required
        />
        <label className="block mb-2 font-medium text-gray-700">
          Contact Number
        </label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Emergency / alternate contact number"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
