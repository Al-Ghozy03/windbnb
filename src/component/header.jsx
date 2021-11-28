import React from "react";
import { useSelector } from "react-redux";
import logo from "../windbnb-master/logo.png";

export default function Header(props) {
  let location = useSelector((state)=>state.where.location)
  let adult = useSelector((state) => state.adult.num);
  let child = useSelector((state) => state.child.num);
  return (
    <React.Fragment>
      <div className="lg:flex items-center justify-between">
        <img src={logo} alt="" className="mb-9"/>
        <div onClick={()=>{
          props.setSearch(true)
        }} className="flex space-x-4 cursor-pointer border rounded-md bg-white shadow-sm">
          <p className="border px-3 text-center py-2 border-t-0 border-b-0 border-l-0 capitalize">{location}, Finland</p>
          <p className="border px-3 text-center py-2 border-t-0 border-b-0 border-l-0">{adult === 0 && child === 0 ? "Add" : adult + child} Guest</p>
          <div className="py-2 pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-11 lg:ml-1 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
