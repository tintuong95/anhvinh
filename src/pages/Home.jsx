import {
    Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import BaseAlert from "../component/BaseAlert";
import { deleteDevice, getAllDevices } from "../apis/devices";
const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      id: 1,
      name: "Name",
      dateIn: "10/11/2015",
      date: "10/11/2015",
      dateExpired: "10/11/2015",
      type: "Type",
      price: 100,
      quantity: 100,
      sold: 50,
    },
    {
      id: 2,
      name: "Name",
      dateIn: "10/11/2015",
      date: "10/11/2015",
      dateExpired: "10/11/2015",
      type: "Type",
      price: 100,
      quantity: 100,
      sold: 50,
    },
    {
      id: 3,
      name: "Name",
      dateIn: "10/11/2015",
      date: "10/11/2015",
      dateExpired: "10/11/2015",
      type: "Type",
      price: 100,
      quantity: 100,
      sold: 50,
    },
  ]);

  const renderTable = () => {
    return data.map(
      ({
        id,
        name,
        dateIn,
        date,
        dateExpired,
        type,
        quantity,
        sold,
        price,
      }) => (
        <Tr key={id}>
          <Td>{id}</Td>
          <Td>{name}</Td>
          <Td>{dateIn}</Td>
          <Td>{date}</Td>
          <Td>{dateExpired}</Td>
          <Td>{type}</Td>
          <Td>{price}</Td>
          <Td>{quantity}</Td>
          <Td>{sold}</Td>
          <Td className="flex gap-3">
            <Button>
              <EditIcon
                onClick={() => {
                  navigate("/cap-nhat-thiet-bi/" + id);
                }}
              />
            </Button>
            <BaseAlert
              id={id}
              func={() => {
                fetchRemoveDevice(id);
              }}
            >
              <DeleteIcon />
            </BaseAlert>
          </Td>
        </Tr>
      )
    );
  };
  const fetchListDevice = () => {
    getAllDevices().then((result) => {
      setData(result.data);
    });
  };

  const fetchRemoveDevice = (id) => {
    deleteDevice(id)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchListDevice();
  }, []);
  return (
    <div>
      <TableContainer>
        <Table size="sm">
          <Thead className="py-2">
            <Tr>
              <Th>STT</Th>
              <Th>TÊN THIẾT BỊ</Th>
              <Th>NGÀY NHẬP</Th>
              <Th>NĂM SẢN XUẤT</Th>
              <Th>HẠN SỬ DỤNG</Th>
              <Th>LOẠI</Th>
              <Th>GIÁ BÁN</Th>
              <Th>SỐ LƯỢNG</Th>
              <Th>ĐÃ BÁN</Th>
              <Th>THAO TÁC</Th>
            </Tr>
          </Thead>
          <Tbody>{renderTable()}</Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
