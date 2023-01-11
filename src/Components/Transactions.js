import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { currencyFormatter } from "./utils";
import { ProgressBar } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)

      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err));
  }, []);

  let totalPrice = transactions.reduce(
    (price, item) => price + Number(item.amount),
    0
  );


  function getProgressBarVariant(amount) {
    
    if (amount >= 10000) return "primary";
    else if (amount < 10000) return "warning";
    return "danger";
  }

  return (
    <Container className="my-4">
      <div className="Transactions">
        <h2>Account Balance: {currencyFormatter.format(totalPrice)}</h2>
        <ProgressBar
          className="rounded-pill"
          variant={getProgressBarVariant(totalPrice)}
          min={0}
          now={totalPrice}
        />
        <hr></hr>
        {transactions.map((transaction, index) => {
          return (
            <Transaction
              key={index}
              transaction={transaction}
              index={index}
              totalPrice={totalPrice}
            />
          );
        })}
      </div>
    </Container>
  );
}
