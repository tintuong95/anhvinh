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
      <p>Footer 2 main 2</p>
      <small>Footer 2 main 2</small>
      <small>Footer 2 main 1</small>
      <h1>Hello main</h1>
      <small>Footer 2 main 2</small>
      <a>Footer 2 main 2
        <small>hello</small>
      </a>
    </div>
 
  );
};

export default BaseLayout;
