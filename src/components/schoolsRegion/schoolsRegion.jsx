import React, { useState } from 'react';
import './schoolsRegion.css';

function SchoolRegion() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [schoolList, setSchoolList] = useState([]);

  const handleRegionChange = async (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    try {
      const response = await fetch(`/api/schools?region=${region}`);
      if (!response.ok) {
        throw new Error('Failed to fetch schools');
      }
      const data = await response.json();
      setSchoolList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchClick = () => {
    // Perform the action to retrieve the school here
    // Replace this console.log statement with your logic
    console.log('Retrieve school for region: ', selectedRegion);
  };

  return (
    <div className="school-region">
      <h3>Find the best school for your child</h3><br/>
      <div className="region-search-container">
        <div className="select-container">
          <select
            className="region-select"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value="">Select a School by your Region</option>
            <option value="region1">Ahafo</option>
            <option value="region2">Ashanti</option>
            <option value="region3">Bono</option>
            <option value="region4">Bono-East</option>
            <option value="region5">Central</option>
            <option value="region6">Eastern</option>
            <option value="region7">Greater-Accra</option>
            <option value="region8">Northern</option>
            <option value="region9">North-East</option>
            <option value="region10">Oti</option>
            <option value="region11">Savannah</option>
            <option value="region12">Upper East</option>
            <option value="region13">Upper West</option>
            <option value="region14">Volta</option>
            <option value="region15">Western</option>
            <option value="region16">Western-North</option>
          </select>
        </div>
        <span className="search-icon" onClick={handleSearchClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M22.707 21.293l-5.8-5.8a8.75 8.75 0 1 0-1.414 1.414l5.8 5.8a1 1 0 0 0 1.414-1.414zM4.5 10.75a6.25 6.25 0 1 1 6.25 6.25A6.258 6.258 0 0 1 4.5 10.75z"
            />
          </svg>
        </span>
      </div>

      <ul className="school-list">
        {schoolList.map((school) => (
          <li key={school.id}>{school.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SchoolRegion;