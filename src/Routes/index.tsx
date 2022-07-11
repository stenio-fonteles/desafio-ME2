import { BrowserRouter, Route, Routes as RoutesGroup } from "react-router-dom"
import { useAuth } from "../hooks/useAth"
import Cadastro from "../pages/cadastro";
import Compra from "../pages/Compra";
import Descricao from "../pages/Descricao";
import Home from "../pages/Home";
import Login from "../pages/login";

export const Routes = () => {
    const { isAuthenticated } = useAuth();

    return (
        <BrowserRouter>
            <RoutesGroup>
                {!isAuthenticated && (
                    <>
                        <Route path="/Cadastro" element={<Cadastro />} />
                        <Route path="/login" element={<Login />} />
                    </>
                )}

                {isAuthenticated && (
                    <>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/descricao/:id" element={<Descricao />} />
                        <Route path="/compra" element={<Compra />} />
                    </>
                )}

                <Route path="*" element={isAuthenticated ? <Home /> : <Login />}/>
            </RoutesGroup>
        </BrowserRouter>
    )
}