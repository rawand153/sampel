import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "./pages/Navbar"
import Cards from "./pages/Cards"
import Footer from "./pages/Footer"
import Paragraph from "./pages/Paragraph"
import Support from './pages/Support'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Featuers from './pages/Featuers'
import Enterprice from './pages/Enterprice'
function App() {

  return (
    
      
        
      
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Paragraph/>}/>
          <Route path="Pricing" element={<Paragraph/>}/>
          <Route path='Featuers' element={<Featuers/>}/>
          <Route path='Enterprice' element={<Enterprice/>}/>
          <Route path='Support' element={<Support/>}/>
        </Routes>
        <Cards/>

        <Footer/>
      </Router>
    
  )
}

export default App
