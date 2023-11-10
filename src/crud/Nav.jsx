import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Dashboard", src: "navIcons/Chart_fill", to:"/", isActive:window.location.pathname == '/'},
      { title: "Add Guest", src: "navIcons/Chat", to:"/add"},
      { title: "Accounts", src: "navIcons/User", to:"/crud", gap: true },
      { title: "Schedule ", src: "navIcons/Calendar" },
      { title: "Search", src: "navIcons/Search" },
      { title: "Analytics", src: "navIcons/Chart" },
      { title: "Grocery ", src: "navIcons/Folder", to:"/grocery", gap: true },
      { title: "Setting", src: "navIcons/Setting" },
    ];

    function test(){
        console.log(Menus);
    };
    test();
    return (
        <>
  

                <div className={` ${ open ? "w-72" : "w-20 " } bg-neutral-900 h-screen p-5 pt-8 relative duration-300`}>
                    <img src="./src/assets/navIcons/control.png" className={`absolute cursor-pointer -right-3 top-9 w-7 border-neutral-900
                        border-2 rounded-full ${!open && "rotate-180" }`} onClick={()=> setOpen(!open)}
                    />
                    <div className="flex gap-x-4 items-center">
                        <img src="./src/assets/navIcons/logo.png" className={`cursor-pointer duration-500 ${ open && "rotate-[360deg]"
                            }`} />
                        <h1 className={`text-white origin-left font-medium text-xl duration-200 ${ !open && "scale-0" }`}>
                            Designer
                        </h1>
                    </div>
                    <ul className="pt-6">
                        {Menus.map((Menu, index) => (
                            <Link to={Menu.to}>
                                <li key={index} className={`flex rounded-md p-2 cursor-pointer hover:bg-neutral-600 hover:text-neutral-900 text-gray-300 text-sm
                                    items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2" } ${ Menu.isActive && "bg-neutral-700" } `}>
                                    <img src={`./src/assets/${Menu.src}.png`} />
                                    <span className={`${!open && "hidden" } origin-left duration-200`}>
                                        {Menu.title}
                                    </span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
        </>
    );
}