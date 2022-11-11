import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserDetails } from "./pages/UserDetails";
import "./App.css";

function App() {
  const navigate = useNavigate();

  function goToHomepage() {
    navigate("/");
  }

  return (
    <div>
      <header className="header">
        <button onClick={goToHomepage}>
          <i className="fa-solid fa-house"></i>
        </button>
        <hr></hr>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-details/:userId" element={<UserDetails />} />
        </Routes>
      </main>

      <footer className="footer">Made in SEDC course</footer>
    </div>
  );
}

export { App };
