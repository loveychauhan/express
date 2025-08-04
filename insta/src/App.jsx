import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Login from "./component/Login";
import Register from "./component/Register";
import Layout from "./component/layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
