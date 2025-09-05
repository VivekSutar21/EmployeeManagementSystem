import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(storedLogin);
  }, []);

  return (
    <Router>
      {isLoggedIn && <HeaderComponent setIsLoggedIn={setIsLoggedIn} />}

      <div className="container mt-1">
        <Routes>
          <Route
            path="/"
            element={<HomeComponent setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/employees"
            element={
              isLoggedIn ? (
                <ListEmployeeComponent />
              ) : (
                <HomeComponent setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          {/* Add / Update Employee Routes */}
          <Route
            path="/add-employee/:id"
            element={
              isLoggedIn ? (
                <CreateEmployeeComponent />
              ) : (
                <HomeComponent setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          <Route
            path="/update-employee/:id"
            element={
              isLoggedIn ? (
                <CreateEmployeeComponent />
              ) : (
                <HomeComponent setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
        </Routes>
      </div>

      <FooterComponent />
    </Router>
  );
}

export default App;
