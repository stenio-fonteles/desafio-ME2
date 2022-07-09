import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createServer, Model } from "miragejs"

//            ROTAS
import Cadastro from "./pages/cadastro/index";
import Login from "./pages/login";
import Home from "./pages/Home";
import { AuthProvider } from "./contexts/AuthContext";



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
      this.post("/auth", (schema, request) => {
        const {email, password} = JSON.parse(request.requestBody)

        const {models: [users]} = schema.all("users").filter((user: any) => {
          return user.attrs.email === email && user.attrs.password === password
        });

        if(!users) return new Response(JSON.stringify({error: "not authorized"}), {
          status: 401
        })

        const user = users.attrs       
        return user
      })
    },
    seeds(server) {
      server.db.loadData({
        users: [
          { name: "admin", password: "admin", "id": 1, email:'admin' },

        ],
      })
    },
    
  })
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
