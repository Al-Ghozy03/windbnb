import React, { useState } from "react";
import Guest from "./guest";
import Location from "./location";
import { useSelector } from "react-redux";
export default function Search(props) {
  let state = useSelector((state) => state);
  let adult = useSelector((state) => state.adult.num);
  let child = useSelector((state) => state.child.num);
  const [location, setLocation] = useState(true);
  return (
    <React.Fragment>
      <div className="fixed">
        <div
          className="bg-white cursor-pointer px-8 py-9 lg:px-28 lg:py-20 w-screen"
          style={{ height: "60vh" }}
        >
          <div className="flex lg:hidden mb-6 justify-between">
            <p className="font-medium">Edit your search</p>
            <button onClick={()=>{props.setSearch(false)}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="lg:flex items-center lg:space-x-3">
            <div
              onClick={() => {
                setLocation(true);
              }}
              className="bg-white cursor-pointer shadow-md py-2 rounded-lg px-4 lg:w-29-rem"
            >
              <p className="font-medium">Location</p>
              <h1 className="capitalize text-lg">
                {state.where.location}, Finland
              </h1>
            </div>
            <div
              onClick={() => {
                setLocation(false);
              }}
              className="bg-white shadow-md py-2 rounded-lg px-4 lg:w-29-rem"
            >
              <p className="font-medium">Guest</p>
              <h1
                className={`capitalize ${
                  adult === 0 && child === 0 ? "text-gray-400" : ""
                } text-lg`}
              >
                {adult === 0 && child === 0 ? "Add" : adult + child} Guest
              </h1>
            </div>
            <div className="bg-white shadow-md py-3 lg:flex hidden justify-center rounded-lg px-4 lg:w-29-rem">
              <button
                onClick={() => {
                  props.setSearch(false);
                }}
                className="bg-red-600 flex py-2 rounded-lg px-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
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
                <p className="text-white">Search</p>
              </button>
            </div>
          </div>
          <div className=" mt-9">
            {location ? (
              <React.Fragment>
                <Location></Location>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="lg:ml-46%">
                  <Guest></Guest>
                </div>
              </React.Fragment>
            )}
          </div>
          <div className=" flex py-3 lg:hidden mt-20 justify-center rounded-lg px-4 ">
            <button
              onClick={() => {
                props.setSearch(false);
              }}
              className="bg-red-600 flex py-2 rounded-lg px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
              <p className="text-white">Search</p>
            </button>
          </div>
        </div>
        <div
          onClick={() => {
            props.setSearch(false);
          }}
          className="bg-black w-screen h-screen bg-opacity-50"
        ></div>
      </div>
    </React.Fragment>
  );
}
