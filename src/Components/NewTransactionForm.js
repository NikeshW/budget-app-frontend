import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function NewTransactionForm() {
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    id: "",
    date: "",
    item_name: "",
    amount: "",
    from: "",
    category: "",
  });

  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    transaction.amount = Number(transaction.amount);

    axios
      .post(`${API}/transactions`, transaction)
      .then(() => navigate("/transactions"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder="mm-dd-yyyy"
          required
        />
        <label htmlFor="item_name">Name:</label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Item name"
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          onChange={handleTextChange}
          placeholder=""
          required
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="From"
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          value={transaction.category}
          type="text"
          onChange={handleTextChange}
          placeholder="category"
          required
        />
        <br />

        <input
          className="submit-button"
          style={{ color: "white" }}
          type="Submit"
        />
      </form>
    </div>
  );
}

export default NewTransactionForm;
