import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./Components/Routes/Routes";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
