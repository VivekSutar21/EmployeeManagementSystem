import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomeComponent({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
        navigate("/employees");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Error logging in", err);
    }
  };

  return (
    <div
      style={{
        margin: "0",
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "linear-gradient(to right, #6a11cb, #2575fc)", // gradient background
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        className="card shadow"
        style={{
          width: "600px",
          padding: "30px",
          borderRadius: "20px",
          backgroundColor: "",
          boxShadow: "0 20px 45px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2
          className="text-center mb-3"
          style={{ color: "#000000ff", fontWeight: "700" }}
        >
          Admin Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              style={{ padding: "12px", borderRadius: "8px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              style={{ padding: "12px", borderRadius: "8px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#2575fc",
              color: "white",
              padding: "12px",
              borderRadius: "8px",
              fontWeight: "600",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#000000ff")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#021433ff")
            }
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomeComponent;
