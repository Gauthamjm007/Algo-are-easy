import React from "react";
import { Appbar } from "./navBar/Appbar";
import { Main } from "./Main";
//Adding comment
export const Sort = () => {
  return (
    <>
      <div className="sort">
        <Appbar />
        <Main />
      </div>
    </>
  );
};
