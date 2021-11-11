import React from "react";
import logo from "../windbnb-master/logo.png";

export default function Header() {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between">
        <img src={logo} alt="" />
        <div className="flex space-x-4 border rounded-md bg-white shadow-sm">
          <p className="border px-3 text-center py-2 border-t-0 border-b-0 border-l-0">Helski, Finland</p>
          <p className="border px-3 text-center py-2 border-t-0 border-b-0 border-l-0">Add guest</p>
          <div className="border border-t-0 py-2 pr-3 border-b-0 border-l-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-600"
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
