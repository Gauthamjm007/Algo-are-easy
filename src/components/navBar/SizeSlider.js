import React from "react";
import { Slider } from "@material-ui/core";
import { store } from "../../redux/store";
import { changeArrSize, changeArr, changeArrSorted } from "../../redux/actions";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "blue"
      },
      track: {
        color: "blue"
      },
      rail: {
        color: "blue"
      }
    }
  }
});

const handleOnSizeChange = (event, arrSize) => {
  const arr = [...Array(arrSize).keys()]
    .map((elem) => elem + 1)
    .map((num) => ({ num, color: null }));
  const arrSorted = [...arr].map((num) => ({ num, color: null }));
  store.dispatch(changeArrSize(arrSize));
  store.dispatch(changeArr(arr));
  store.dispatch(changeArrSorted(arrSorted));
};

export const SizeSlider = ({ arrSize, isSorting }) => {
  return (
    <div className="slider">
      <p className="label">
        <b>Size</b>
      </p>
      <ThemeProvider theme={muiTheme}>
        <Slider
          disabled={isSorting ? true : false}
          id="array_slider"
          value={arrSize}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          color="default"
          step={3}
          min={5}
          max={100}
          onChange={handleOnSizeChange}
        />
      </ThemeProvider>
    </div>
  );
};
