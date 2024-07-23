import React from "react";

function DuplicateTable({ data }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-4">Duplicate Registrant Data</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-500">
          <thead>
            <tr>
              <th className="py-2 px-3 border-b">Badge</th>
              <th className="py-2 px-3 border-b">OrderNumber</th>
              <th className="py-2 px-3 border-b">MethodId</th>
              <th className="py-2 px-3 border-b">RegClass</th>
              <th className="py-2 px-3 border-b">FirstName</th>
              <th className="py-2 px-3 border-b">LastName</th>
              <th className="py-2 px-3 border-b">RegTimeStamp</th>
              <th className="py-2 px-3 border-b">Verified</th>
              <th className="py-2 px-3 border-b">TotalAll</th>
              <th className="py-2 px-3 border-b">reg_notes</th>
              <th className="py-2 px-3 border-b">Company</th>
              <th className="py-2 px-3 border-b">Street</th>
              <th className="py-2 px-3 border-b">Street2</th>
              <th className="py-2 px-3 border-b">City</th>
              <th className="py-2 px-3 border-b">State</th>
              <th className="py-2 px-3 border-b">Zipcode</th>
              <th className="py-2 px-3 border-b">Country</th>
              <th className="py-2 px-3 border-b">Phone</th>
              <th className="py-2 px-3 border-b">email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((registrant, index) => (
              <tr key={index} className="text-sm">
                <td className="py-2 px-3 border-b">{registrant.Badge}</td>
                <td className="py-2 px-3 border-b">{registrant.OrderNumber}</td>
                <td className="py-2 px-3 border-b">{registrant.MethodId}</td>
                <td className="py-2 px-3 border-b">{registrant.RegClass}</td>
                <td className="py-2 px-3 border-b">{registrant.FirstName}</td>
                <td className="py-2 px-3 border-b">{registrant.LastName}</td>
                <td className="py-2 px-3 border-b">
                  {registrant.RegTimeStamp}
                </td>
                <td className="py-2 px-3 border-b">
                  {registrant.Verified}
                </td>
                <td className="py-2 px-3 border-b">
                  {registrant.TotalAll}
                </td>
                <td className="py-2 px-3 border-b">{registrant.reg_notes}</td>
                <td className="py-2 px-3 border-b">{registrant.Company}</td>
                <td className="py-2 px-3 border-b">{registrant.Street}</td>
                <td className="py-2 px-3 border-b">{registrant.Street2}</td>
                <td className="py-2 px-3 border-b">{registrant.City}</td>
                <td className="py-2 px-3 border-b">{registrant.State}</td>
                <td className="py-2 px-3 border-b">{registrant.Zipcode}</td>
                <td className="py-2 px-3 border-b">{registrant.Country}</td>
                <td className="py-2 px-3 border-b">{registrant.Phone}</td>
                <td className="py-2 px-3 border-b">{registrant.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DuplicateTable;
