import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Button, Stack } from "react-bootstrap";

export default function Navbar() {
  return (
    <Container className="my-4">
      <Stack directon="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">
          <Link to="/">Budget App</Link>
        </h1>
      </Stack>
      <Link to={"/transactions"}>
        <Button variant="primary">All transactions</Button>
      </Link>{" "}
      <Link to="/transactions/new">
        <Button variant="primary">Create New Transaction</Button>
      </Link>
    </Container>
  );
}
