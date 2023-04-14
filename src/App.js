import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import RequireAuthentication from "./components/RequireAuth";
import EditUser from "./components/EditUser";
import UpdatePassword from "./components/UpdatePassword";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={RequireAuthentication(Dashboard)} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" Component={RequireAuthentication(Profile)} />
        <Route
          path="/updateUserInfo"
          Component={RequireAuthentication(EditUser)}
        />
        <Route
          path="/updatePassword"
          // action={matchPassword}
          Component={RequireAuthentication(UpdatePassword)}
        />
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
