import Nav from "./Layout/Nvabar";
import {Routes,Route} from 'react-router-dom'
import Search from "./Food/Search/Searchfood";
import Home from "./Food/Home/Home";
import Just from "./Food/Justforyou/Just";
import Veg from "./Food/Veg/Veg";
import NonVeg from "./Food/Non-Veg/Non-Veg";
import Footer from "./Layout/Footer";
const App = () => {
  return ( 
   
  <div className="App">
<Nav/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Search' element={<Search/>}/>
<Route path='/Just_For_You' element={<Just/>}/>
<Route path='/Veg' element={<Veg/>}/>
<Route path='/Non_Veg' element={<NonVeg/>}/>
</Routes>
<Footer/>
  </div> 
   );
}
 
export default App;