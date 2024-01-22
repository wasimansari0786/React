import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./counter/login";
import MyForm from "./counter/MyForm";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/myform" element={<MyForm />} />
      </Routes>
    </Router>
  );
}

export default App;
