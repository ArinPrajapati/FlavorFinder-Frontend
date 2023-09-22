import React from "react";
import "./App.css";
import AllResturants from "./components/AllResturants";
import { CreateRestuarantAccount } from "./api/Apiconnet";
import CreateRestuarants from "./components/CreateRestuarants";
import Login from "./components/Login";
const App = () => {
  return (
    <div className="text-3xl">
      <Login />
    </div>
  );
};

export default App;
