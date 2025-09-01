
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import NotFound from "./pages/NotFound"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  
  return (
    <div>
      < NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}


export default App
