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
import { deleteCategory, getAllCategory } from "../apis/categories";
import { useNavigate } from "react-router-dom";
import BaseAlert from "../component/BaseAlert";
const Category = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      id: 1,
      name: "Name",
      description: "description",
      status: 1,
      createdAt: "10/11/2015",
    },
    {
      id: 2,
      name: "Name",
      description: "description",
      status: 1,
      createdAt: "10/11/2015",
    },
    {
      id: 3,
      name: "Name",
      description: "description",
      status: 0,
      createdAt: "10/11/2015",
    },
  ]);

  const renderTable = () => {
    return data.map(({ id, name, description, status, createdAt }) => (
      <Tr key={id}>
        <Td>{id}</Td>
        <Td>{name}</Td>
        <Td>{description}</Td>
        <Td>{status}</Td>
        <Td>{createdAt}</Td>
        <Td className="flex gap-3">
          <Button>
            <EditIcon
              onClick={() => {
                navigate("/cap-nhat-danh-muc/" + id);
              }}
            />
          </Button>
          <BaseAlert id={id} func={()=>{fetchRemoveCategory(id)}}>
            <DeleteIcon />
          </BaseAlert>
        </Td>
      </Tr>
    ));
  };

  const fetchListCategory = () => {
    getAllCategory().then((result) => {
      setData(result.data);
    });
  };

  const fetchRemoveCategory = (id) => {
    deleteCategory(id)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchListCategory();
  }, []);
  return (
    <div>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>STT</Th>
              <Th>TÊN DANH MỤC </Th>
              <Th>MÔ TẢ</Th>
              <Th>TRẠNG THÁI</Th>
              <Th>NGÀY TẠO</Th>
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

export default Category;
