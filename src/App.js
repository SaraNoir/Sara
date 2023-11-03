import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import {Blog} from "./components/blog/Blog";
import { About } from "./components/about/About";
import { Contacts } from "./components/contacts/Contacts";
import NotFound from "./components/not.found/NotFound";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";


function App() {
  return (
    <>
      <Header />
      <Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<NotFound />} />
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contacts' element={<Contacts />} />
				</Routes>
        <Footer />
    </>
  );
}

export default App;