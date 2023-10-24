import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import {Blog} from "./components/blog/Blog";
import { About } from "./components/about/About";
import { Contacts } from "./components/contacts/Contacts";
import NotFound from "./components/not.found/NotFound";


function App() {
  return (
    <div className="App">
      <Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<NotFound />} />
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contacts' element={<Contacts />} />
				</Routes>
    </div>
  );
}

export default App;