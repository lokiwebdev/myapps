import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Profile from "./components/pages/Profile";
import Projects from "./components/pages/Projects";
import Errorpage from "./components/pages/Errorpage";

import Calculator from "./components/projects/calculator/Calculator";
import Todo from "./components/projects/todo/TodoList";
import TodoPage from "./components/projects/todo2/TodoPage";
import ContactApp from "./components/projects/contactApp/ContactApp";
import Clock from "./components/projects/clock/Clock";
import Cart from "./components/projects/cart/Cart";



import "./components/stylesheets/layout.css";



function App() {



  return (
    <Router>
      <>
        <Navbar />
        <div className="main">
          <Routes>
            {/* <Route path="/login" exact element={<Login />} /> */}
            {/* <Route path="/register" exact element={<Register />} /> */}
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />

            <Route path="/projects" exact element={<Projects />} />
            <Route path="/calculator" exact element={<Calculator />} />
            <Route path="/todo" exact element={<Todo />} />
            <Route path="/todofb" exact element={<TodoPage />} />
            <Route path="/contactApp" exact element={<ContactApp />} />
            <Route path="/clock" exact element={<Clock />} />
            <Route path="/cart" exact element={<Cart />} />


            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;