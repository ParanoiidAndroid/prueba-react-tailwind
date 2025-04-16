import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"; 
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Faq from "./pages/Faq";
import Profile from "./pages/Profile";
import Transactions from "./pages/Transactions";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/prueba-react-tailwind/">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Rutas públicas */}
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<Faq />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />

            {/* Rutas protegidas */}
            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="transactions"
              element={
                <PrivateRoute>
                  <Transactions />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
