import { Routes, Route } from "react-router-dom";

// import Private from "./Private";
import Layout from "@/pages/layout.jsx";
import Home from "@/pages/Home";


function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default RoutesApp;
