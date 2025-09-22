import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<Partial<UserData>>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
    address: { street: "", suite: "", city: "", zipcode: "", geo: { lat: "", lng: "" } },
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newUser: UserData = {
      id: Date.now(),
      name: formData.name || "",
      username: formData.username || "",
      email: formData.email || "",
      phone: formData.phone || "",
      website: formData.website || "",
      address: formData.address || {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" },
      },
      company: formData.company || { name: "", catchPhrase: "", bs: "" },
    };
    onSave(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-2"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-2"
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
