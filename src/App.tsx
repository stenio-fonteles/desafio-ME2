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
import Descricao from "./pages/Descricao";




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

      this.get("/motorcycles", () => {
        return [
          {url:"https://www.papeldeparede.etc.br/fotos/wp-content/uploads/moto-ktm-race_3799_1024x768.jpg",nome:'CB 650R', valor: 48.440, potencia:88.4, id: 1,sobre:"Chegou paramovimentar a cidade."},
          {url:"https://p4.wallpaperbetter.com/wallpaper/909/149/238/vehicles-motorcycle-motogp-hd-wallpaper-preview.jpg",nome:'CB 650R', valor: 48.440, potencia:88.4, id: 2,sobre:"Chegou paramovimentar a cidade."},
          {url:"https://i0.wp.com/www.asphaltandrubber.com/wp-content/uploads/2020/05/Kardesign-Honda-CB1000RR-R-streetfighter-01.jpg?fit=1600%2C984&ssl=1",nome:'CB 650R', valor: 48.440, potencia:88.4, id: 3,sobre:"Chegou paramovimentar a cidade."},
          {url:"https://www.automaistv.com.br/wp-content/uploads/2020/04/Honda-CBR-1000RR-R-Fireblade-1.jpeg",nome:'CB 650R', valor: 48.440, potencia:88.4, id: 4,sobre:"Chegou paramovimentar a cidade."},{url:"https://www.papeldeparede.etc.br/fotos/wp-content/uploads/moto-ktm-race_3799_1024x768.jpg",nome:'CB 650R', valor: 48.440, potencia:88.4, id: 1,sobre:"Chegou paramovimentar a cidade."},
          {url:"https://p4.wallpaperbetter.com/wallpaper/909/149/238/vehicles-motorcycle-motogp-hd-wallpaper-preview.jpg",nome:'CB 650R', valor: 48.440, potencia:88.4, id: 2,sobre:"Chegou paramovimentar a cidade."},
          {url:"https://i0.wp.com/www.asphaltandrubber.com/wp-content/uploads/2020/05/Kardesign-Honda-CB1000RR-R-streetfighter-01.jpg?fit=1600%2C984&ssl=1",nome:'CB 650R', valor: 48.440, potencia:88.4, id: 3,sobre:"Chegou paramovimentar a cidade."},
          {url:"https://www.automaistv.com.br/wp-content/uploads/2020/04/Honda-CBR-1000RR-R-Fireblade-1.jpeg",nome:'CB 650R', valor: 48.440, potencia:88.4, id: 4,sobre:"Chegou paramovimentar a cidade."},
        
        ]
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
        <Route path="/descricao/:id" element={<Descricao />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
