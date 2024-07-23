import React from "react";

function DateRangePicker({ startDate, endDate, onChange }) {
  return (
    <div className="mt-4 mb-8 mx-auto">
      <label className="block font-semibold text-gray-700">
        Date Range Picker
      </label>
      <div className="flex space-x-4">
        <div>
          <label className="block text-gray-700">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={onChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">End Date</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={onChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default DateRangePicker;
