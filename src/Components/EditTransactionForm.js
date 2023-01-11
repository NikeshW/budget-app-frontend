import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function EditTransactionForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    id: "",
    date: "",
    item_name: "",
    amount: 0,
    from: "",
    category: "",
  });

  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setTransaction(res.data))
      .catch((err) => console.log(err));
  }, [index]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((res) => {
        setTransaction(res.data);
        navigate(`/transactions/${index}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
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
          type="submit"
        />
      </form>
    </div>
  );
}
