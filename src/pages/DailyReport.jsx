import React, { useEffect, useState } from "react";
import BASE_URL from "../utilities/apiUrl";
import axios from "axios";

const calculateTotalAmountAndLength = (transactions, transactionType) => {
  const filteredTransactions = transactions.filter(
    (item) => item.transactionType === transactionType
  );

  const totalAmount = filteredTransactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );
  const transactionLength = filteredTransactions.length;
  return { totalAmount, transactionLength };
};

const DailyReport = () => {
  const [transactions, setTransactions] = useState([]);
  const [todaysTransaction, setTodaysTransaction] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTransactions = () => {
      axios
        .get(`${BASE_URL}/transaction`)
        .then((resp) => {
          setTransactions(resp.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    };
    getTransactions();
  }, []);

  useEffect(() => {
    const getTodaysTransactions = () => {
      let dateToday = new Date().getDate();
      let monthToday = new Date().getMonth() + 1;
      let yearToday = new Date().getFullYear();
      let today = `${yearToday}-${monthToday}-${dateToday}`;
      const todayTrans = (transactions || []).filter(
        (item) => item.createdAt.slice(0, 10) == today
      );
      setTodaysTransaction(todayTrans);
      console.log(todaysTransaction);
    };
    getTodaysTransactions();
  }, [transactions]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { totalAmount: totalDeposits, transactionLength: depositLength } =
    calculateTotalAmountAndLength(todaysTransaction, "deposit");
  const { totalAmount: totalWithdrawals, transactionLength: withdrawalLength } =
    calculateTotalAmountAndLength(todaysTransaction, "withdrawal");

  return (
    <div>
      <h1 className="title cen">Daily Report</h1>
      <div className="flex">
        <div className="summaryBoxes">
          <div className="summaries">
            <h1 className="title2">Transaction Summary</h1>
            <h5>Number of Transactions: {todaysTransaction.length}</h5>
          </div>
          <div className="summaries">
            <h1 className="title2">Deposit Summary</h1>
            <h5>Number of deposits: {depositLength}</h5>
            <h5>Total deposits: {totalDeposits.toFixed(2)}</h5>
          </div>
          <div className="summaries">
            <h1 className="title2">Withdrawal Summary</h1>

            <h5>Number of withdrawals: {withdrawalLength}</h5>
            <h5>Total withdrawals: {totalWithdrawals.toFixed(2)}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyReport;
