import Login from "./views/Login";
import Home from "./views/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ProtectedRoute,
  ProtectedRouteLogin,
} from "./components/ProtectedRoute";
import Register from "./views/Register";
import CategoryList from "./views/CategoryList";
import FormAddProduct from "./views/FormAddProduct";
import FormEditProduct from "./views/FormEditProduct";
import FormAddCategory from "./views/FormAddCategory";
import ShowImages from "./views/ShowImages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <ProtectedRouteLogin>
                <Login />
              </ProtectedRouteLogin>
            }
          ></Route>
          <Route
            path="/categories"
            element={
              <ProtectedRoute>
                <CategoryList />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/add-product"
            element={
              <ProtectedRoute>
                <FormAddProduct />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/:productId/edit-product"
            element={<FormEditProduct />}
          ></Route>
          <Route
            path="/add-category"
            element={
              <ProtectedRoute>
                <FormAddCategory />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/:productId/show-images"
            element={
              <ProtectedRoute>
                <ShowImages />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
