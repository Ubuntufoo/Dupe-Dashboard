import React from "react";

function RadioGroup({ name, selectedValue, onChange }) {
  return (
    <div className="mb-4">
      <span className="block font-semibold text-center text-gray-700">Standard Dupe Criteria?</span>
      <div className="mt-2 space-x-8 text-center">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name={name}
            value="option1"
            checked={selectedValue === "option1"}
            onChange={onChange}
            className="form-radio"
          />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center ml-4">
          <input
            type="radio"
            name={name}
            value="option2"
            checked={selectedValue === "option2"}
            onChange={onChange}
            className="form-radio"
          />
          <span className="ml-2">No</span>
        </label>
      </div>
    </div>
  );
}

export default RadioGroup;
