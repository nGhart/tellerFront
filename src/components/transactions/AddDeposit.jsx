import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {
  Link,
  useNavigation,
  redirect,
  Form,
  useNavigate,
} from "react-router-dom";
import BASE_URL from "../../utilities/apiUrl.jsx";
import axios from "axios";

const AddDeposit = () => {
  const [depositData, setDepositData] = useState({});
  const navigate = useNavigate();

  const handleDeposit = () => {
    console.log(depositData);

    axios
      .post(`${BASE_URL}/account/deposit`, depositData)
      .then((resp) => {
        console.log(resp);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        return error;
      });
  };
  return (
    <div className="addSection">
      <div className="transactionForm">
        <h1 className="title">Add Deposit</h1>
        <Form onSubmit={handleDeposit}>
          <FormControl className="flex between">
            <FormLabel>Name</FormLabel>
            <Input
              className="addInput"
              type="text"
              name="name"
              id="name"
              onChange={(e) =>
                setDepositData({ ...depositData, name: e.target.value })
              }
            />
          </FormControl>
          <FormControl className="flex between">
            <FormLabel>Contact</FormLabel>
            <Input
              className="addInput"
              type="text"
              name="contact"
              id="contact"
              onChange={(e) =>
                setDepositData({ ...depositData, contact: e.target.value })
              }
            />
          </FormControl>
          <FormControl className="flex between">
            <FormLabel>Branch</FormLabel>
            <Input
              className="addInput"
              type="text"
              name="branch"
              id="branch"
              onChange={(e) =>
                setDepositData({ ...depositData, branch: e.target.value })
              }
            />
          </FormControl>
          <FormControl className="flex between">
            <FormLabel>Account Type</FormLabel>
            <Input
              className="addInput"
              type="text"
              name="accountType"
              id="accountType"
              onChange={(e) =>
                setDepositData({ ...depositData, accountType: e.target.value })
              }
            />
          </FormControl>
          <FormControl className="flex between">
            <FormLabel>Account Number</FormLabel>
            <Input
              className="addInput"
              type="text"
              name="accNumber"
              id="accNumber"
              onChange={(e) =>
                setDepositData({ ...depositData, accNumber: e.target.value })
              }
            />
          </FormControl>
          <FormControl className="flex between">
            <FormLabel>Amount</FormLabel>
            <Input
              className="addInput"
              type="number"
              name="amount"
              id="amount"
              onChange={(e) =>
                setDepositData({ ...depositData, amount: e.target.value })
              }
            />
          </FormControl>

          <FormControl className="flex between">
            <FormLabel>ID</FormLabel>
            <Input
              className="addInput"
              type="text"
              name="idType"
              id="idType"
              onChange={(e) =>
                setDepositData({ ...depositData, idType: e.target.value })
              }
            />
          </FormControl>
          <FormControl className="flex between">
            <FormLabel>ID Number</FormLabel>
            <Input
              className="addInput"
              type="text"
              name="idNumber"
              id="idNumber"
              onChange={(e) =>
                setDepositData({ ...depositData, idNumber: e.target.value })
              }
            />
          </FormControl>

          <button className="userButtons">Add Entry</button>
        </Form>
      </div>
    </div>
  );
};

export default AddDeposit;
