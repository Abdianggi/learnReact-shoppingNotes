import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Header from "../components/layouts/header";

export default function Home() {
  const title='Guest Data';
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

  function deleteGuest(id) {
    axios.delete(`http://localhost:8000/api/guest/${id}`)
    .then(function(res){
      // this.addClass('animate-ping');
      if (res.data.status) {
        loadGuests();
        alert(res.data.message);
      }else{
        alert(res.data.message);
      }
    });
  }

  return (
    <div className="mx-5 my-5 p-5 bg-slate-200 rounded-md w-full shadow-md">
      <Header title={title}/>
      <div className="h-screen flex-1 p-7">
        <div className="justify-center items-center flex flex-col px-10 py-8 mt-8">
          <h1 className="text-3xl font-bold text-neutral-600">DATA TABLE</h1>
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
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {guests.map((item, index) => 
                        <tr id={item.id+''+index} key={item.id+''+index} className="bg-white border-b-2 border-black">
                          <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            {index+1}
                          </td>
                          <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            {item.name}
                          </td>
                          <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            {item.wa}
                          </td>
                          <td>
                            <Link
                              // onClick={()=>deleteGuest(item.id)}
                              onClick={() => deleteGuest(item.id)}
                              className={clsx(
                                "bg-red-600 text-white px-6 py-2 rounded-lg",
                              )}
                            >
                              Delete
                            </Link>
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
      </div>
    </div>
  );
}
