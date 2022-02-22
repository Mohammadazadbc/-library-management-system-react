import "./app.css"
import Home from "./component/home/Home";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import SearchBook from "./component/searchBook/SearchBook";
import Login from "./component/Login/Login";
import Nav from "./component/nav/Nav";
import Register from "./component/register/Register";
import AllBooks from "./allBooks/AllBooks";
import Onebook from "./oneBook/Onebook";
import Favortie from "./component/favortieBook/Favortie";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/searchbook" element={<SearchBook/>} />
        <Route path="/login" element={<Login/> } />
        <Route path="/nav" element={<Nav/> } />
        <Route path="/register" element={<Register/> } />
        <Route path="/allbook" element={<AllBooks/>} />
        <Route path="/onebook" element={<Onebook />} />
        <Route path="/favorite" element={<Favortie />} />
 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
