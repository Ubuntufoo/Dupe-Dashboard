import React from "react";

function SubmitButton() {
  return (
    <div className="text-center my-2">
      <button
        type="submit"
        className="w-fit mx-auto text-center bg-blue-500 text-white py-2 px-4 rounded hover:ring-2 hover:ring-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition shadow-xl active:shadow-none"
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitButton;
