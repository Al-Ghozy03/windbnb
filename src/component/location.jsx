import React from "react";
import { useDispatch } from "react-redux";
import { helski, oulu, turku, vaasa } from "../redux/action/location";

export default function Location() {
  let dispatch = useDispatch()
  return (
    <React.Fragment>
      <div className="flex flex-col space-y-3">
        <div onClick={()=>{
          dispatch(helski())
        }} style={{width:"29rem"}} className="flex items-center space-x-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-500">Helski, Finland</p>
        </div>
        <div onClick={()=>{
          dispatch(turku())
        }} style={{width:"29rem"}} className="flex items-center space-x-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-500">Turku, Finland</p>
        </div>
        <div onClick={()=>{
          dispatch(oulu())
        }} style={{width:"29rem"}} className="flex items-center space-x-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-500">Oulu, Finland</p>
        </div>
        <div onClick={()=>{
          dispatch(vaasa())
        }} style={{width:"29rem"}} className="flex items-center space-x-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-500">Vaasa, Finland</p>
        </div>
      </div>
    </React.Fragment>
  );
}
