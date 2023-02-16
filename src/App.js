import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer";

function App() {
  console.log(window.location.pathname);
  return (
    <div className="App">
      {/* {window.location.pathname == "/login" ||
      window.location.pathname == "/register" ? (
        ""
      ) : (
        <Navbar />
      )} */}
      <MainRoutes />
      {/* {window.location.pathname == "/login" ||
      window.location.pathname == "/register" ? (
        ""
      ) : (
        <Footer />
      )} */}
    </div>
  );
}

export default App;
