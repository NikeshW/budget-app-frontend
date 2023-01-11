import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { currencyFormatter } from "./utils";

export default function Transaction({ transaction, index }) {
  return (
    <div className="Transaction">
      <h4>DATE: {transaction.date}</h4>
      <h4>ITEM: {transaction.item_name.toUpperCase()}</h4>
      <h4>AMOUNT: {currencyFormatter.format(transaction.amount)}</h4>
      <h4>CATEGORY: {transaction.category.toUpperCase()}</h4>
      <Link to={`/transactions/${index}`}>
        <Button>Delete or Edit Transaction</Button>
      </Link>{" "}
    </div>
  );
}
