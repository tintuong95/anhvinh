import { Button } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const BaseLayout = (props) => {
  return (
    <div className="grid grid-cols-8">
    <div>Hello world</div>
      <div className="col-span-7">
        <Outlet />
      </div>
      <div>Footer 1 main 1</div>
    </div>
 
  );
};

export default BaseLayout;
