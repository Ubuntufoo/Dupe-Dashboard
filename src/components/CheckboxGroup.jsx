import React from "react";

function CheckboxGroup({ checkboxes, onChange }) {
  return (
    <div className="mb-4">
      <span className="block font-semibold text-center text-gray-700">Options</span>
      <div className="mt-2 space-x-8">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="option1"
            checked={checkboxes.option1}
            onChange={onChange}
            className="form-checkbox"
          />
          <span className="ml-2">Informa Event</span>
        </label>
        <label className="inline-flex items-center ml-4">
          <input
            type="checkbox"
            name="option2"
            checked={checkboxes.option2}
            onChange={onChange}
            className="form-checkbox"
          />
          <span className="ml-2">Export</span>
        </label>
        <label className="inline-flex items-center ml-4">
          <input
            type="checkbox"
            name="option3"
            checked={checkboxes.option3}
            onChange={onChange}
            className="form-checkbox"
          />
          <span className="ml-2">Incl. Test Records</span>
        </label>
      </div>
    </div>
  );
}

export default CheckboxGroup;
