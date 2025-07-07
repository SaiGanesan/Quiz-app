import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { quizData } from "../data/Questions";
import { useQuiz } from "../context/QuizContext";
import "../styles/Quiz.css";

function Quiz() {
  const { topic } = useParams();
  const navigate = useNavigate();
  const questions = quizData[topic] || [];
  const totalQuestions = questions.length;

  const { setScore, setAnalysis } = useQuiz();

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [localScore, setLocalScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionStates, setQuestionStates] = useState(
    new Array(totalQuestions).fill("unvisited")
  );
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes
  const [localAnalysis, setLocalAnalysis] = useState([]);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Anti-cheating logic
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        alert("You switched tabs or minimized! Submitting your quiz.");
        handleSubmitQuiz();
      }
    };

    const handleWindowBlur = () => {
      alert("Window focus lost! Submitting your quiz.");
      handleSubmitQuiz();
    };

    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const updateState = (index, state) => {
    const newStates = [...questionStates];
    newStates[index] = state;
    setQuestionStates(newStates);
  };

  const recordAnswer = () => {
    const question = questions[currentQIndex];
    const isCorrect = selectedOption === question.answer;

    if (selectedOption) {
      if (isCorrect) {
        setLocalScore((prev) => prev + 1);
      }
      updateState(currentQIndex, "answered");

      setLocalAnalysis((prev) => [
        ...prev,
        {
          question: question.question,
          selected: selectedOption,
          correct: question.answer,
        },
      ]);
    } else {
      updateState(currentQIndex, "skipped");
      setLocalAnalysis((prev) => [
        ...prev,
        {
          question: question.question,
          selected: null,
          correct: question.answer,
        },
      ]);
    }
  };

  const handleNext = () => {
    recordAnswer();
    if (currentQIndex + 1 < totalQuestions) {
      setCurrentQIndex(currentQIndex + 1);
      setSelectedOption(null);
    } else {
      finishQuiz();
    }
  };

  const handleMarkForReview = () => {
    updateState(currentQIndex, "review");
    if (currentQIndex + 1 < totalQuestions) {
      setCurrentQIndex(currentQIndex + 1);
      setSelectedOption(null);
    }
  };

  const jumpToQuestion = (index) => {
    setCurrentQIndex(index);
    setSelectedOption(null);
  };

  const handleSubmitQuiz = () => {
    recordAnswer(); // record current question
    finishQuiz();
  };

  const finishQuiz = () => {
    setScore(
      localScore + (selectedOption === questions[currentQIndex].answer ? 1 : 0)
    );
    setAnalysis([
      ...localAnalysis,
      {
        question: questions[currentQIndex].question,
        selected: selectedOption,
        correct: questions[currentQIndex].answer,
      },
    ]);
    navigate("/result");
  };

  if (!questions.length) return null;

  const currentQ = questions[currentQIndex];

  return (
    <>
      <div className="quiz-wrapper">
        {/* LEFT SIDEBAR */}
        <div className="quiz-sidebar">
          <h3>Question Status</h3>
          <div className="tracker-grid">
            {questionStates.map((state, idx) => (
              <div
                key={idx}
                className={`tracker-box ${state}`}
                onClick={() => jumpToQuestion(idx)}
                title={`Q${idx + 1}`}
              >
                {idx + 1}
              </div>
            ))}
          </div>
        </div>

        {/* MAIN QUIZ AREA */}
        <div className="quiz-main">
          {/* Timer */}
          <div className="timer-box">
            <span>⏳ Time Left: </span>
            <strong>{formatTime(timeLeft)}</strong>
          </div>

          {/* Top-right submit button */}
          <div className="top-submit">
            <button className="submit-btn-top" onClick={handleSubmitQuiz}>
              Submit Quiz
            </button>
          </div>

          <h2 className="quiz-title">{topic.toUpperCase()}</h2>
          <div className="question-box">
            <p className="question">
              {currentQIndex + 1}. {currentQ.question}
            </p>
            <div className="options">
              {currentQ.options.map((option, idx) => (
                <button
                  key={idx}
                  className={`option-btn ${
                    selectedOption === option ? "selected" : ""
                  }`}
                  onClick={() => setSelectedOption(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="quiz-actions">
              <button className="next-btn" onClick={handleNext}>
                Next
              </button>
              <button className="review-btn" onClick={handleMarkForReview}>
                Mark for Review
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Time-based image display */}
      <div className="bottom-image-box">
        {timeLeft > 600 ? (
          <img src="\z1.png" alt="Stage 1" className="img-stage img-one" />
        ) : timeLeft > 300 ? (
          <img src="\z2.png" alt="Stage 2" className="img-stage img-two" />
        ) : (
          <img src="\z3.png" alt="Stage 3" className="img-stage img-three" />
        )}
      </div>
    </>
  );
}

export default Quiz;
