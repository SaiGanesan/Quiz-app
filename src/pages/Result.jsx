import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useQuiz } from "../context/QuizContext"; // ✅ Import useQuiz
import "../styles/Result.css";

function Result() {
  const { name, setName } = useContext(UserContext);
  const { score, analysis, resetQuiz } = useQuiz(); // ✅ Get from context
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    calculateFeedback(score);
  }, [score]);

  const calculateFeedback = (score) => {
    if (score <= 5)
      setFeedback("🟥 You failed this mission. Better luck next time, Slayer.");
    else if (score <= 7)
      setFeedback("⚠️ Needs more effort. Your journey has just begun.");
    else if (score <= 11)
      setFeedback("💪 Not bad! You're growing stronger, keep learning!");
    else if (score <= 13)
      setFeedback("👏 Very good! You're on the right path.");
    else setFeedback("🌟 Excellent! You're Hashira-level smart!");
  };

  const handleRetry = () => {
    resetQuiz(); // ✅ Clears score and analysis from context
    navigate("/topics");
  };

  const handleGoHome = () => {
    resetQuiz();
    setName("");
    navigate("/");
  };

  return (
    <div className="result-container">
      <div className="result-glass">
        <h1 className="result-title">Did You Succeed, {name || "Slayer"}?</h1>
        <p className="score-text">
          You scored <strong>{score}</strong> point{score === 1 ? "" : "s"}!
        </p>
        <p className="feedback-text">{feedback}</p>

        <div className="result-buttons">
          <button className="home-btn" onClick={handleGoHome}>
            ⬅️ Go to Home
          </button>
          <button className="result-btn" onClick={handleRetry}>
            Try Another Quiz ➡️
          </button>
        </div>
      </div>

      {analysis.length > 0 && (
        <div className="analysis-section">
          <h2 className="analysis-title">📊 Quiz Review</h2>
          {analysis.map((item, index) => (
            <div
              key={index}
              className={`analysis-card ${
                item.selected === item.correct ? "correct" : "wrong"
              }`}
            >
              <p>
                <strong>Q{index + 1}:</strong> {item.question}
              </p>
              <p>
                <span className="label">Your answer:</span>{" "}
                <span
                  className={
                    item.selected === item.correct
                      ? "correct-text"
                      : "wrong-text"
                  }
                >
                  {item.selected || "No answer"}
                </span>
              </p>
              {item.selected !== item.correct && (
                <p>
                  <span className="label">Correct answer:</span>{" "}
                  <span className="correct-text">{item.correct}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Result;
