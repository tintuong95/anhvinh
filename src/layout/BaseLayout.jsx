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
      <p>Footer 2 main 2</p>
      <p>Footer 2 main 2</p>
      <p>Footer 2 main 2</p>
      <div>Footer 2 main 2</div>
      <div>Footer 2 main 2</div>
      <div>Footer 2 main 2</div>
      <a>Footer 2 main 2
        <div>hello</div>
      </a>
    </div>
 
  );
};

export default BaseLayout;
