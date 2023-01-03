import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { createCategory } from "../apis/categories";
import _, { result } from "lodash";

const CreateCategory = () => {
  const [input, setInput] = useState({});
  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const fetchCreateCategory = () => {
    let data = new FormData();
    _(input).forEach((val, key) => {
      data[key] = val;
    });
    createCategory(data).then(result=>{
      console.log(result)
    }).catch(err=>{
      console.log(err)
    });
  };
  return (
    <div className="w-1/3 p-5">
      <FormControl>
        <FormLabel>Tên danh mục</FormLabel>
        <Input
          name="name"
          type="text"
          value={input.name}
          onChange={handleInput}
        />
        <div className="my-3" />
        <FormLabel>Mô tả</FormLabel>

        <Input
          name="dateIn"
          type="text"
          value={input.dateIn}
          onChange={handleInput}
        />
        <div className="my-3" />
        <FormLabel>Trạng thái</FormLabel>

        <Input
          name="date"
          type="text"
          value={input.date}
          onChange={handleInput}
        />

        <div className="my-5" />
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={fetchCreateCategory}
        >
          Lưu
        </Button>
      </FormControl>
    </div>
  );
};

export default CreateCategory;
