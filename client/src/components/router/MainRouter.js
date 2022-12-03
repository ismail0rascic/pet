import { Route, Routes } from "react-router-dom";

import Login from "../Login";
import Signup from "../Signup";
import Home from "../home/Home";
import Cover from "../cover/CoverPage";
import AddItem from "../item/AddItem";
import ItemPage from "../item/ItemPage";
import EditItem from "../item/EditItem";
import Contact from "../contact/Contact";
import About from "../about/About";
import Pro from "../pro/Pro";
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Cover />} />
      <Route path="/catalog" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add" element={<AddItem />} />
      <Route path="/pro" element={<Pro />} />

      <Route path="/item:id" element={<ItemPage />} />
      <Route path="/edit:id" element={<EditItem />} />
    </Routes>
  );
};
export default MainRouter;
