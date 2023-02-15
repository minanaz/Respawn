import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
