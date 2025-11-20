import { Route, Routes } from "react-router";
import UserDetail from "./page/userDetail";
import Home from "./page/home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </>
  );
};

export default App;
