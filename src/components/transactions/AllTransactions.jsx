import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

import BASE_URL from "../../utilities/apiUrl";
import axios from "axios";

const AllTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  useEffect(() => {
    const getTransactions = () => {
      axios.get(`${BASE_URL}/transaction`).then((resp) => {
        setTransactions(resp.data);
        //console.log(resp.data);
      });
    };
    getTransactions();
  }, [filterOptions]);

  const handleFilter = () => {
    console.log(filterOptions);
    axios
      .post(`${BASE_URL}/transaction/getAccount`, filterOptions)
      .then((resp) => {
        setTransactions(resp.data);
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = transactions.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(transactions.length / itemsPerPage);
  const numbers = [...Array(noPages).keys()].map((item) => item + 1);

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== noPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  return (
    <div>
      <div>
        <Form className="filterContainer" onSubmit={handleFilter}>
          <FormControl className="filterAccount">
            <FormLabel>Account Number</FormLabel>
            <Input
              className="filterInput"
              type="text"
              placeholder="Account Number"
              name="accountNumber"
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  accountNumber: e.target.value,
                })
              }
            />
          </FormControl>
          <FormControl className="inputRadio" as="fieldset">
            <FormLabel className="labelRadio" as="legend">
              Transaction Type
            </FormLabel>

            <RadioGroup>
              <HStack spacing="24px">
                <Radio
                  value=""
                  name="transactionType"
                  onChange={(e) =>
                    setFilterOptions({
                      ...filterOptions,
                      transactionType: e.target.value,
                    })
                  }
                >
                  All
                </Radio>
                <Radio
                  value="deposit"
                  name="transactionType"
                  onChange={(e) =>
                    setFilterOptions({
                      ...filterOptions,
                      transactionType: e.target.value,
                    })
                  }
                >
                  Deposit
                </Radio>
                <Radio
                  value="withdrawal"
                  name="transactionType"
                  onChange={(e) =>
                    setFilterOptions({
                      ...filterOptions,
                      transactionType: e.target.value,
                    })
                  }
                >
                  Withdrawal
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <div className="filterButtonContainer">
            <button className="filterBtn">Filter</button>
          </div>
        </Form>
      </div>
      <div style={{ padding: "5px" }}>
        <TableContainer className="tableSection">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Date</Th>
                <Th>Account Branch</Th>
                <Th>Account Number</Th>
                <Th>Account Type</Th>
                <Th>Transaction</Th>
                <Th>Amount</Th>
                <Th>User</Th>
                <Th>Contact</Th>
                <Th>ID Type</Th>
                <Th>ID Number</Th>
              </Tr>
            </Thead>
            <Tbody>
              {itemsShown.map((item, index) => {
                const newIndex = firstIndex + index;
                return (
                  <Tr key={index}>
                    <Td>{newIndex + 1}</Td>
                    <Td>{item.createdAt.slice(0, 10)}</Td>
                    <Td>{item.branch}</Td>
                    <Td>{item.accountNumber}</Td>
                    <Td>{item.accountType}</Td>
                    <Td>{item.transactionType}</Td>
                    <Td>{item.amount.toFixed(2)}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.contact}</Td>
                    <Td>{item.idType}</Td>
                    <Td>{item.idNumber}</Td>
                  </Tr>
                );
              })}
            </Tbody>
            <TableCaption>
              <div className="page">
                <div className="pageContainer">
                  <div className="prev">
                    <i onClick={prevPage}>Prev</i>
                  </div>
                  {numbers.map((item) => (
                    <div
                      key={item}
                      className={`${
                        currentPage === item ? "activePage" : "pages"
                      }`}
                    >
                      <i onClick={() => changePage(item)}>{item}</i>
                    </div>
                  ))}
                  <div className="next">
                    <i onClick={nextPage}>Next</i>
                  </div>
                </div>
              </div>
            </TableCaption>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AllTransactions;
