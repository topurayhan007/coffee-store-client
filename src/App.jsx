import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex justify-center flex-col ">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
