import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { AppRouter } from "./router/AppRouter"


export const App = () => {
  

  return (
    <div className="app_container">
      <Home />
      <AppRouter />
    </div>
  )
}

