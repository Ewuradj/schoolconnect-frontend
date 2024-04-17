import React, { useState } from 'react';
import './adminDashboard.css'
import Navbar from '../../components/navbar/navbar';
export default function AdminDashboard() {
  const [newSchool, setNewSchool] = useState({
    name: '',
    level: '',
    studentCount: '',
    type: '',
    tuitionFees: '',
    location: '',
    contact: '',
    reviews: '',
    image: '',
    website: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewSchool((prevSchool) => ({ ...prevSchool, [name]: value }));
  };

  const handleCreateSchool = (event) => {
    event.preventDefault();
    // Perform action to create a new school with the newSchool object
    console.log('Creating school:', newSchool);

  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setNewSchool((prevSchool) => ({ ...prevSchool, image: file }));
  };

  const handleUpdateSchool = () => {
    // Perform action to update the selected school
    console.log('Updating school...');
  };

  const handleDeleteSchool = () => {
    // Perform action to delete the selected school
    console.log('Deleting school...');
  };

  return (
    <>
    <Navbar/>
    <div className="bg-white dark:bg-zinc-800 min-h-screen">
      <header className="bg-blue-500 dark:bg-zinc-900 text-white py-4 px-6">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </header>
      <main className="p-4">
        <h2 className="text-lg font-semibold mb-4">School Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">ADD A NEW SCHOOL</h3>
            <form onSubmit={handleCreateSchool}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-1">
                  Name of School:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newSchool.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md py-2 px-3 w-full"
                />
              </div><br/>
              <div className="mb-4">
                <label htmlFor="level" className="block font-medium mb-1">
                  Level(Primary/SHS):
                </label>
                <input
                  type="text"
                  id="level"
                  name="level"
                  value={newSchool.level}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md py-2 px-3 w-full"
                />
              </div><br/>
              <div className="mb-4">
                <label htmlFor="studentCount" className="block font-medium mb-1">
                  Student Count:
                </label>
                <input
                  type="text"
                  id="studentCount"
                  name="studentCount"
                  value={newSchool.studentCount}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md py-2 px-3 w-full"
                />
              </div><br/>
              <div className="mb-4">
                <label htmlFor="type" className="block font-medium mb-1">
                  Type (Private/Public):
                </label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  value={newSchool.type}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md py-2 px-3 w-full"
                />
              </div><br/>
              <div className="mb-4">
                <label htmlFor="tuitionFees" className="block font-medium mb-1">
                  Average Tuition Fees:
                </label>
                <input
                  type="text"
                  id="tuitionFees"
                  name="tuitionFees"
                  value={newSchool.tuitionFees}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md py-2 px-3 w-full"
                />
              </div><br/>
              <div className="mb-4">
                <label htmlFor="location" className="block font-medium mb-1">
                  Location:
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={newSchool.location}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md py-2 px-3 w-full"
                />
              </div><br/>
              <div className="mb-4">
                <label htmlFor="contact" className="block font-medium mb-1">
                  Contact:
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={newSchool.contact}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md py-2 px-3 w-full"
                />
              </div><br/>
             
              <div className="mb-4">
              <label htmlFor="image" className="block font-medium mb-1">
                  Image Upload
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageUpload}
                  className="border border-gray-300 rounded-md py-2 px-3 w-full"
                />
              </div><br/>
              <div className="mb-4">
                <label htmlFor="website" className="block font-medium mb-1">
                  Website URL
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={newSchool.website}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md py-2 px-3 w-full"
                />
              </div><br/>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md py-2 px-4"
              >
                Create
              </button><br/>
            </form>
          </div><br/><br/>
          <div className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">UPDATE SCHOOL DETAILS</h3>
            <button
              onClick={handleUpdateSchool}
              className="bg-blue-500 text-white rounded-md py-2 px-4 mb-2"
            >
              Update
            </button>
            <p>Select a school to update</p>
          </div><br/><br/>
          <div className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">DELETE SCHOOL</h3>
            <button
              onClick={handleDeleteSchool}
              className="bg-red-500 text-white rounded-md py-2 px-4 mb-2"
            >
              Delete
            </button>
            <p>Select a school to delete</p>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}