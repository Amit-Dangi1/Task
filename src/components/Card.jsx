import React, { useState } from 'react';
import data1 from "../data";

const Card = () => {
  let [data, setdata] = useState(data1);
  let [search, setserach] = useState('');

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.assignee.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="card shadow rounded-4 border-0">
          <div className="card-header text-white rounded-top-4">
            <h4 className="mb-0 text-center text-dark p-3">Deals</h4>
            <p>
              <input
                onChange={(event) => setserach(event.target.value)}
                type="search"
                placeholder="Search by name or assignee"
                className="w-25 p-2 border rounded"
              />
            </p>
          </div>

          <div className="card-body">
            <table className="table table-hover table-bordered align-middle text-center">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Deal Name</th>
                  <th>Budget</th>
                  <th>Assignee</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.deal}</td>
                    <td>${item.budget}</td>
                    <td>{item.assignee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Card;
