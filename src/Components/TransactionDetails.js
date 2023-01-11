import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { currencyFormatter } from "./utils";
const API = process.env.REACT_APP_API_URL;

export default function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setTransaction(res.data))
      .catch((err) => navigate("/not-found"));
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
         
            <div className="me-2">DATE: {transaction.date}</div>
            <div className="me-2">ITEM: {transaction.item_name}</div>
            <div className="d-flex align-items-baseline">AMOUNT: {currencyFormatter.format(transaction.amount)}</div>
            <div>FROM: {transaction.from}</div>
            <div>CATEGORY: {transaction.category}</div>{" "}
            <Link to={`/transactions`}>
              <Button>Back</Button>
            </Link>{" "}
          
            <Link to={`/transactions/${index}/edit`}>
              <Button>Edit</Button>
            </Link>{" "}
            <Button onClick={handleDelete}>Delete</Button>
         
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
