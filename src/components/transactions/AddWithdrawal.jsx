import React, { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import {
  Link,
  useNavigation,
  redirect,
  Form,
  useNavigate,
} from "react-router-dom";
import BASE_URL from "../../utilities/apiUrl.jsx";
import axios from "axios";

const AddWithdrawal = () => {
  const [withdrawalData, setWithdrawalData] = useState({});
  const navigate = useNavigate();

  const handleWithdrawal = () => {
    console.log(withdrawalData);

    axios
      .post(`${BASE_URL}/account/withdraw`, withdrawalData)
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
        <h1 className="title">Add Withdrawal</h1>
        <Form onSubmit={handleWithdrawal}>
          <FormControl className="flex between">
            <FormLabel>Name</FormLabel>
            <Input
              className="addInput"
              type="text"
              name="name"
              id="name"
              onChange={(e) =>
                setWithdrawalData({ ...withdrawalData, name: e.target.value })
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
                setWithdrawalData({
                  ...withdrawalData,
                  contact: e.target.value,
                })
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
                setWithdrawalData({ ...withdrawalData, branch: e.target.value })
              }
            />
          </FormControl>

          <FormControl className="flex between">
            <FormLabel>Account Type</FormLabel>
            <Input
              className="addInput"
              type="text"
              name="accountType
            id="
              accountType
              onChange={(e) =>
                setWithdrawalData({
                  ...withdrawalData,
                  accountType: e.target.value,
                })
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
                setWithdrawalData({
                  ...withdrawalData,
                  accNumber: e.target.value,
                })
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
                setWithdrawalData({ ...withdrawalData, amount: e.target.value })
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
                setWithdrawalData({ ...withdrawalData, idType: e.target.value })
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
                setWithdrawalData({
                  ...withdrawalData,
                  idNumber: e.target.value,
                })
              }
            />
          </FormControl>

          <button className="userButtons">Add Entry</button>
        </Form>
      </div>
    </div>
  );
};

export default AddWithdrawal;
