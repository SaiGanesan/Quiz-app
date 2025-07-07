// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { QuizProvider } from "./context/QuizContext"; 
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <UserProvider>
      <QuizProvider> 
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/quiz/:topic" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </QuizProvider>
    </UserProvider>
  );
}

export default App;
