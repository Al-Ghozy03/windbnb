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
          className="bg-white px-28 py-20 w-screen"
          style={{ height: "60vh" }}
        >
          <div className="flex border rounded-xl justify-center">
            <div
              onClick={() => {
                setLocation(true);
              }}
              className="cursor-pointer pr-96"
            >
              <p>Location</p>
              <p className="capitalize">{state.where.location}, Finland</p>
            </div>
            <div
              onClick={() => {
                setLocation(false);
              }}
              className="cursor-pointer pr-96 border border-t-0 border-b-0 pl-4"
            >
              <p>Guest</p>
              <p>{adult === 0 && child === 0 ? "Add" : adult + child} Guest</p>
            </div>
            <div className=" cursor-pointer bg-red-500 w-36 flex space-x-3 items-center justify-center py-2 rounded-xl ml-9">
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
              <p className="text-white capitalize">search</p>
            </div>
          </div>
          <div className=" mt-9">
            {location ? (
              <React.Fragment>
                <Location></Location>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div style={{ marginLeft: "46%" }}>
                  <Guest></Guest>
                </div>
              </React.Fragment>
            )}
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
