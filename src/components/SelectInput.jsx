import React from "react";

function SelectInput({ name, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block font-semibold text-gray-700">Choose an Event</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Select an option</option>
        <option value="option1">Event 1</option>
        <option value="option2">Event 2</option>
        <option value="option2">Event 3</option>
        <option value="option2">Event 4</option>
      </select>
    </div>
  );
}

export default SelectInput;
