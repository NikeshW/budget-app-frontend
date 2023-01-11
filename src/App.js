import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import ErrorPage from "./Pages/ErrorPage";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <Container className="my-4">
      <div className="App">
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/transactions" element={<Index />} />
              <Route path="/transactions/new" element={<New />} />
              <Route path="/transactions/:index" element={<Show />} />
              <Route path="/transactions/:index/edit" element={<Edit />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
        </Router>
      </div>
    </Container>
  );
}

export default App;
