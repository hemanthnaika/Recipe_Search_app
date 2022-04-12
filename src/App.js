import Nav from "./Layout/Nvabar";
import {Routes,Route} from 'react-router-dom'
import AllFood from "./Food/AllFood/Allfood";
import Search from "./Food/Search/Searchfood";
const App = () => {
  return ( 
   
  <div className="App">
<Nav/>
<Routes>
<Route path='/' element={<AllFood/>}/>
<Route path='/Search' element={<Search/>}/>
</Routes>
  </div>
      
   
   );
}
 
export default App;