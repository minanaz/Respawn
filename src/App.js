import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {window.location.pathname == "/login" || "/register" ? "" : <Navbar />}
      <MainRoutes />
      {window.location.pathname == "/login" || "/register" ? "" : <Footer />}
    </div>
  );
}

export default App;
