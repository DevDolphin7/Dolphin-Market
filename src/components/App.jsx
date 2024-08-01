import { Routes, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav.jsx";
import Browse from "../routes/Browse.jsx";
import AddItem from "../routes/SellAddItem.jsx";
import ViewItems from "../routes/SellViewItems.jsx";
import Basket from "../routes/Basket.jsx";
import OrderHistory from "../routes/AccountOrderHistory.jsx";
import Kudos from "../routes/AccountKudos.jsx";
import Create from "../routes/AccountCreate.jsx";

export default function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Browse />} />
      <Route path="/Sell/ViewItems" element={<ViewItems />} />
      <Route path="/Sell/AddItem" element={<AddItem />} />
      <Route path="/Basket" element={<Basket />} />
      <Route path="/Account/OrderHistory" element={<OrderHistory />} />
      <Route path="/Account/Kudos" element={<Kudos />} />
      <Route path="/Account/Create" element={<Create />} />
    </Routes>
    
    </>
  );
}
