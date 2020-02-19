import React from "react";
import { useSelector } from "react-redux";
import { SizeSlider } from "./SizeSlider";
import { SpeedSlider } from "./SpeedSlider";
import { AlgoSelector } from "./AlgoSelector";
import { ReverseButton, ShuffleButton } from "./ArrayModifier";
import { SortButton } from "./SortButton";
import { algorithms } from "../../algorithms";

export const Appbar = () => {
  const algo = useSelector((state) => state.algo);
  const arr = useSelector((state) => state.arr);
  const arrSize = useSelector((state) => state.arrSize);
  const speed = useSelector((state) => state.speed);
  const isSorting = useSelector((state) => state.isSorting);

  return (
    <div className="toolbar">
      <ReverseButton arr={arr} isSorting={isSorting} />
      <ShuffleButton arr={arr} isSorting={isSorting} />
      <SortButton algorithms={algorithms} isSorting={isSorting} />
      <AlgoSelector algorithms={algorithms} algo={algo} isSorting={isSorting} />
      <SizeSlider arrSize={arrSize} isSorting={isSorting} />
      <SpeedSlider speed={speed} isSorting={isSorting} />
    </div>
  );
};
