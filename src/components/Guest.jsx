import { useState, useEffect } from "react";
import axios from "axios";

export default function Guest() {
  function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
      // Mendefinisikan URL endpoint API yang ingin diakses
      const apiUrl = "http://localhost:8000/api/guest";

      // Menggunakan Axios untuk melakukan permintaan GET ke API
      axios
        .get(apiUrl)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error saat mengambil data:", error);
        });
    }, []);
  }
  return (
    <>
      <div>
        {/* Tampilkan data yang diambil dari API */}
        {data.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
}
