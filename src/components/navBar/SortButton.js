import React from "react";
import { store } from "../../redux/store";
import Button from "@material-ui/core/Button";
import { changeSortingStatus, changeFrames } from "../../redux/actions";

const handleOnSortClick = (algorithms) => {
  const { arr, arrSorted, algo, isSorting } = store.getState();
  if (!isSorting && JSON.stringify(arr) !== JSON.stringify(arrSorted)) {
    const frames = algorithms[algo].method(arr.map((elem) => elem.num));
    store.dispatch(changeFrames(frames));
    store.dispatch(changeSortingStatus(true));
  } else {
    store.dispatch(changeSortingStatus(false));
  }
};

export const SortButton = ({ algorithms, isSorting }) => {
  return (
    <div>
      <Button
        variant="contained"
        style={{
          background: isSorting ? "black" : "green",
          color: isSorting ? "white" : "white",
          borderRadius: 20
        }}
        onClick={() => handleOnSortClick(algorithms)}
      >
        {isSorting ? "Stop" : "Sort it!"}
      </Button>
    </div>
  );
};
