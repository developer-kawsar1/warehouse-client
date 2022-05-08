import "./App.css";
import { Route, Routes } from "react-router-dom";



import Blog from "./components/Blog/Blog";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Homepage/Home";
import ProductDetail from "./components/Homepage/ProductDetail/ProductDetail";
import Login from "./components/Login/Login";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Registration from "./components/Registration/Registration";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import AddProduct from "./components/AddProduct/AddProduct";
import MyItem from "./components/MyItems/MyItem";
import About from "./components/About/About";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/about" element={<About/>}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/registration" element={<Registration />}></Route>

          <Route
            path="/inventory/:id"
            element={
              <RequireAuth>
                <ProductDetail />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/addproduct"
            element={
              <RequireAuth>
                <AddProduct />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/manage"
            element={
              <RequireAuth>
                <ManageInventory />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/myitems"
            element={
              <RequireAuth>
               <MyItem/>
              </RequireAuth>
            }
          ></Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
