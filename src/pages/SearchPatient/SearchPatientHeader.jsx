import React from 'react';

const SearchPatientHeader = ({ onSearch, resultsCount, onPrintAll }) => {
  return (
    <div className="search-patient-header px-6 mt-2">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Patient"
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="results-info">
        Results: {resultsCount} | Showing: {resultsCount} | <button onClick={onPrintAll}>Print All</button>
      </div>
    </div>
  );
};

export default SearchPatientHeader;
