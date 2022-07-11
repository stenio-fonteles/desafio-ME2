import { createServer, Model } from "miragejs"

import { GlobalStyle } from "./styled";
import { Routes } from "./Routes";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <GlobalStyle/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  )
}

export default App
