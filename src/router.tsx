import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./routes/Root";
import ProductsView from "./routes/productos/ProductsView";
import CreateProductView from "./routes/productos/CreateProductView";
import DeletedProductsView from "./routes/productos/DeletedProductView";
import UsersView from "./routes/usuarios/UserView";
import CreateUserView from "./routes/usuarios/CreateUserView";
import DeletedUsersView from "./routes/usuarios/DeletedUserView";
import Login from "./routes/login";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route element={<Root />}>
                <Route path="/home" element={<ProductsView/>}/>
                <Route path="/createProduct" element={<CreateProductView/>}/>
                <Route path="/deletedProducts" element={<DeletedProductsView/>}/>

                <Route path="/users" element={<UsersView/>}/>
                <Route path="/createUser" element={<CreateUserView/>}/>
                <Route path="/deletedUsers" element={<DeletedUsersView/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}