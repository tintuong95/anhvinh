import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getDeviceDetails, updateDevice } from "../apis/devices";
import _ from "lodash";
import { useParams } from "react-router-dom";

const UpdateDevice = () => {
  const [input, setInput] = useState({});
  const { id } = useParams();
  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const fetchUpdateDevice = () => {
    let data = new FormData();
    _(input).forEach((val, key) => {
      data[key] = val;
    });
    updateDevice(data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDeviceDetails=()=>{
    getDeviceDetails().then(result=>{
      setInput(result.data);
    }).catch(err => {console.log(err)})
  }

  useEffect(() => {
    fetchDeviceDetails(id);
  }, []);

  return (
    <div className="w-1/3 p-5">
      <FormControl>
        <FormLabel>Tên thiết bị</FormLabel>
        <Input
          name="name"
          type="text"
          value={input.name}
          onChange={handleInput}
        />
        <div className="my-3" />
        <FormLabel>Ngày nhập</FormLabel>

        <Input
          name="dateIn"
          type="text"
          value={input.dateIn}
          onChange={handleInput}
        />
        <div className="my-3" />
        <FormLabel>Ngày sản xuất</FormLabel>

        <Input
          name="date"
          type="text"
          value={input.date}
          onChange={handleInput}
        />
        <div className="my-3" />
        <FormLabel>Loại thiết bị</FormLabel>

        <Input
          name="type"
          type="text"
          value={input.type}
          onChange={handleInput}
        />
        <div className="my-3" />
        <FormLabel>Giá sản phẩm</FormLabel>

        <Input
          name="price"
          type="text"
          value={input.price}
          onChange={handleInput}
        />
        <div className="my-3" />
        <FormLabel>Số lượng </FormLabel>

        <Input
          name="quantity"
          type="text"
          value={input.quantity}
          onChange={handleInput}
        />
        <div className="my-5" />
        <Button
          onClick={fetchUpdateDevice}
          colorScheme="teal"
          variant="outline"
        >
          Lưu
        </Button>
      </FormControl>
    </div>
  );
};

export default UpdateDevice;
