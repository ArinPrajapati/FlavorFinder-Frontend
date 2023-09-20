import React from "react";
import "./App.css";
import AllResturants from "./components/AllResturants";
import { CreateRestuarantAccount } from "./api/Apiconnet";
import CreateRestuarants from "./components/CreateRestuarants";
const App = () => {
  return (
    <div className="text-3xl">
      {/* <AllResturants /> */}
      <CreateRestuarants />
    </div>
  );
};

export default App;
