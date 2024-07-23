import React, { useState } from "react";
import SelectInput from "./SelectInput";
import CheckboxGroup from "./CheckboxGroup";
import RadioGroup from "./RadioGroup";
import DateRangePicker from "./DateRangePicker";
import SubmitButton from "./SubmitBtn";
import DuplicateTable from "./DuplicateTable";
import mockData from "../utils/mockData"; // Importing mock data

export default function Form() {
  const [formData, setFormData] = useState({
    selectOption: "",
    checkboxes: {
      option1: false,
      option2: false,
    },
    radioOption: "",
    startDate: "",
    endDate: "",
  });

  const [duplicates, setDuplicates] = useState(mockData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        checkboxes: {
          ...formData.checkboxes,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-3/4 mx-auto shadow-lg font-montserrat bg-gray-200 p-8 mt-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-3 underline-offset-8 underline font-roboto text-center">
        Duplicate Manager
      </h2>
      <form onSubmit={handleSubmit} className="text-lg divide-black flex flex-col gap-1">
        <SelectInput
          name="selectOption"
          value={formData.selectOption}
          onChange={handleChange}
        />
        <div className="flex justify-evenly">
          <RadioGroup
            name="radioOption"
            selectedValue={formData.radioOption}
            onChange={handleChange}
          />
          <CheckboxGroup
            checkboxes={formData.checkboxes}
            onChange={handleChange}
          />
        </div>
        <DateRangePicker
          startDate={formData.startDate}
          endDate={formData.endDate}
          onChange={handleChange}
        />
        <SubmitButton />
      </form>
      <hr className="my-4 bg-gray-500 h-0.5" />
      <DuplicateTable data={duplicates} />
    </div>
  );
}
