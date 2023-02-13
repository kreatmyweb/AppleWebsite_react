import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import MainPage from "./Components/MainPage/MainPage";
import Mac from "./Components/Pages/Mac/Mac";
import Ipad from './Components/Pages/Ipad/Ipad';
import Iphone from './Components/Pages/Iphone/Iphone';
import Music from './Components/Pages/Music/Music';
import Search from './Components/Pages/Search/Search';
import Cart from './Components/Pages/Cart/Cart';
import Watch from './Components/Pages/Watch/Watch';
import Tv from './Components/Pages/TV/Tv';
import Support from './Components/Pages/Support/Support'


function App() {
  return (
    <div>
      <NavBar />

      <Routes>
       <Route index element={<MainPage />} />
      <Route path="/mac" element={<Mac />} />
      <Route path="/Ipad" element={<Ipad />} />
      <Route path="/Iphone" element={<Iphone />} />
      <Route path="/Music" element={<Music />} />
      <Route path="/search" element={<Search />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Watch" element={<Watch />} />
      <Route path="/Tv" element={<Tv />} />
      <Route path="/Support" element={<Support />} />
     </Routes>
      <Footer />
    </div>
  );
}

export default App;
