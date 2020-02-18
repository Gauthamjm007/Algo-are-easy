import React from "react";
import { useDispatch } from "react-redux";
import { store } from "../../redux/store";
import { changeArr } from "../../redux/actions";
import Button from "@material-ui/core/Button";

const handleOnShuffleClick = (arr) => {
  let tmp = [...arr];
  let arrSize = tmp.length;
  while (arrSize > 0) {
    let index = Math.floor(Math.random() * arrSize);
    arrSize--;
    tmp[index] = tmp.splice(arrSize, 1, tmp[index])[0];
  }
  store.dispatch(changeArr(tmp));
};

export const ShuffleButton = ({ arr, isSorting }) => {
  return (
    <Button
      disabled={isSorting ? true : false}
      color="primary"
      variant="contained"
      onClick={() => handleOnShuffleClick(arr)}
    >
      Shuffle
    </Button>
  );
};

export const ReverseButton = ({ arr, isSorting }) => {
  const dispatch = useDispatch();
  return (
    <Button
      disabled={isSorting ? true : false}
      color="primary"
      variant="contained"
      onClick={() => dispatch(changeArr([...[...arr].reverse()]))}
    >
      Reverse
    </Button>
  );
};
