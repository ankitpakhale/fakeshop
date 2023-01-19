import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} exact component={ProductListing} />
          <Route
            path={"/product/:productId"}
            exact
            component={ProductDetails}
          />
          <Route>404 Not Found!!!</Route>

          {/* till 23:51 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
