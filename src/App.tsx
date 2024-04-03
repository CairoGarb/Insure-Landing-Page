import "./App.css"
import { Different } from "./components/Different"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

export function App() {
  return (
    <div className="AppContainer">
      <Header />
      <Different />
      <Footer />
    </div>
  )
}
