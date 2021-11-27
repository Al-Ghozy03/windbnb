import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrementAdult, incrementAdult } from "../redux/action/adult";
import { decrementChild, incrementChild } from "../redux/action/child";

export default function Guest() {
  let adult = useSelector((state) => state.adult.num);
  let child = useSelector((state) => state.child.num);
  let dispatch = useDispatch();
  return (
    <React.Fragment>
      <p className="font-medium">Adults</p>
      <p className="text-gray-500">Ages 13 or above</p>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => {
            if (adult === 0) {
              return;
            } else {
              dispatch(decrementAdult());
            }
          }}
          className="border px-4 border-black rounded-lg py-1"
        >
          -
        </button>
        <p>{adult}</p>
        <button
          onClick={() => {
            dispatch(incrementAdult());
          }}
          className="border px-4 border-black rounded-lg py-1"
        >
          +
        </button>
      </div>

      <p className="font-medium mt-9">Children</p>
      <p className="text-gray-500">Ages 2-12</p>
      <div className="flex items-center space-x-4">
      <button
          onClick={() => {
            if (child === 0) {
              return;
            } else {
              dispatch(decrementChild());
            }
          }}
          className="border px-4 border-black rounded-lg py-1"
        >
          -
        </button>
        <p>{child}</p>
        <button
          onClick={() => {
            dispatch(incrementChild());
          }}
          className="border px-4 border-black rounded-lg py-1"
        >
          +
        </button>
      </div>
    </React.Fragment>
  );
}
