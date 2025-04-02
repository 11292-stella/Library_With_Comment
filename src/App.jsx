import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import AllTheBooks from "./components/AllTheBooks"
import "bootstrap/dist/css/bootstrap.min.css"
import Welcome from "./components/Welcome"

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav />
      <main className="flex-grow-1 container mt-4">
        <Welcome />

        <h1 className=" text-center fw-bold">Libri Horror</h1>
        <div className="mb-4"></div>

        <AllTheBooks />
      </main>
      <MyFooter />
    </div>
  )
}

export default App
