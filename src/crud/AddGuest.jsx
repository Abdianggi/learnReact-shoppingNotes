import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddGuest(){
    const [name, setName] = useState('');
    const [wa, setWa] = useState('');

    const navigate = useNavigate();
    const data = {
        guest_name: name,
        guest_wa: wa,
    };

    function submitForm(e) {
        console.log(data);
        e.preventDefault();
        axios.post("http://localhost:8000/guest", { data }).
        then(function (res) {
            console.log(res);
            console.log(res.data);
        })
        .then(navigate("/add"));
    }
    return (
        <>
            <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
                <h2 className="text-2xl font-bold">Add Guest</h2>
                <form className="w-[50%] h-full flex flex-col mt-2">
                    <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="text"
                    placeholder="Enter your name"
                    />
                    <input
                    value={wa}
                    onChange={(e) => setWa(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="text"
                    placeholder="Enter your email"
                    />
                    <button
                    className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
                    type="submit"
                    onClick={submitForm}
                    >
                    Add +
                    </button>
                </form>
            </div>
        </>
    );
}