import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { getCategoryDetails, updateCategory } from "../apis/categories";
import { useParams } from "react-router-dom";

const UpdateCategory = () => {
  const [input, setInput] = useState({});
  const { id } = useParams();
  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const fetchUpdateCategory = () => {
    let data = new FormData();
    _(input).forEach((val, key) => {
      data[key] = val;
    });
    updateCategory(data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchCategoryDetails = () => {
    getCategoryDetails()
      .then((result) => {
        setInput(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCategoryDetails(id);
  }, []);

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
          onClick={fetchUpdateCategory}
          colorScheme="teal"
          variant="outline"
        >
          Lưu
        </Button>
      </FormControl>
    </div>
  );
};

export default UpdateCategory;
