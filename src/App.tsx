import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createServer, Model } from "miragejs"

//            ROTAS
import Cadastro from "./pages/cadastro/index";
import Login from "./pages/login";



function App() {
  createServer({
    models: {
      users: Model
    },
    routes() {
      this.namespace = "api"
      
      this.get("/users", (schema) => {
        const users = schema.all('users')
        return users
      })
  
      this.post("/users", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.id = Math.floor(Math.random() * 100);
  
        schema.create('users', attrs)
        return {
          user: attrs
        }
      })
    },
  })
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
