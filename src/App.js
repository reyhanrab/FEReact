import { ThemeProvider } from "@mui/material";
import Theme from "./Theme";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import { Provider } from "react-redux";
import Store from "./store/Store.js";
import Main from "./components/Main/Main";
import ProtectedRoute from "./ProtectedRoutes";
import Projects from "./components/Main/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";

function App() {
  return (
    <Provider store={Store}>
    <ThemeProvider theme={Theme}>
      <HashRouter>
      <ProtectedRoute Component = {Navbar} />
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<ProtectedRoute Component = {Main} />} />
          <Route path="/projects" element={<ProtectedRoute Component = {Projects} />} />
          <Route path="/profile" element={<ProtectedRoute Component = {Profile} />} />
          <Route path="/users" element={<ProtectedRoute Component = {Users} />} />
          <Route path="*" element={<h3>Not Found</h3>} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
