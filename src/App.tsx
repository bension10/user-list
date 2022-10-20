import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "src/pages/UserList";
import UserDetails from "src/pages/UserDetails";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/" element={<UserList />} />
          <Route path="/users/:userId" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
