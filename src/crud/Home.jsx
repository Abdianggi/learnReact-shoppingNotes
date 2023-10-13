import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

export default function Home() {
  const [guests, setGuests] = useState([]);

  function loadGuests() {
    axios.get("http://localhost:8000/api/guest").then(function (res) {
        // handle success
        console.log(res.data.data);
        setGuests(res.data.data);
      });
  }

  useEffect(() => {
    loadGuests();
  }, []);

  return (
    <>
      <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        <h1 className="text-3xl font-bold">DATA TABLE</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">#</th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">Name</th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Whatapps
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests.map((item, index) => 
                      <tr id={item.id+''+index} key={item.id+item.created_at} className="bg-white border-b-2 border-black">
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {index+1}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {item.wa}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
