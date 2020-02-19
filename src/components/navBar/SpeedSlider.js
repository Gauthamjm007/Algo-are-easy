import React from "react";
import { useDispatch } from "react-redux";
import { Slider } from "@material-ui/core";
import { changeSpeed } from "../../redux/actions";

export const SpeedSlider = ({ speed, isSorting }) => {
  const dispatch = useDispatch();
  return (
    <div className="slider">
      <p className="label">
        <b>Speed</b>
      </p>
      <Slider
        disabled={isSorting ? true : false}
        id="speed_slider"
        value={speed}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        min={500}
        max={2000}
        onChange={(e, speed) => dispatch(changeSpeed(speed))}
      />
    </div>
  );
};
