// src/context/QuizContext.jsx
import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [score, setScore] = useState(0);
  const [analysis, setAnalysis] = useState([]);

  // ✅ Add this function
  const resetQuiz = () => {
    setScore(0);
    setAnalysis([]);
  };

  return (
    <QuizContext.Provider value={{ score, setScore, analysis, setAnalysis, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}
