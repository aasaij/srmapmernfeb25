// src/components/Quiz.js
import React, { useState, useEffect } from "react";
import "./Quiz.css"; // Optional: for styling

const questionsData = [
  {
    id: 1,
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Display Object Management",
      "Digital Ordinance Model",
      "Desktop Oriented Mode",
    ],
    correct: 0,
  },
  {
    id: 2,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "float", "string"],
    correct: 0,
  },
  {
    id: 3,
    question: "Which of the following is not a JavaScript data type?",
    options: ["Boolean", "Number", "Float", "Undefined"],
    correct: 2,
  },
];

function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(20);

  const current = questionsData[currentQ];
  let interval = null;
  useEffect(() => {
    clearInterval(interval);
    setTimer(20);
    interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          handleNext();
          return 20;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQ]);

  const handleOptionClick = (i) => {
    clearInterval(interval);
    setSelected(i);
    if (i === current.correct) {
      setScore((prev) => prev + 1);
    }
    // clearInterval(interval);
  };

  const handleNext = () => {
    setSelected(null);
    if (currentQ + 1 < questionsData.length) {
      setCurrentQ((prev) => prev + 1);
      setTimer(20);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setShowScore(false);
    setTimer(20);
  };

  return (
    <div className="quiz-box">
      {showScore ? (
        <div>
          <h2>
            Your Score: {score} / {questionsData.length}
          </h2>
          <button onClick={restartQuiz}>Restart</button>
        </div>
      ) : (
        <>
          <div className="question">
            <h3>
              Q{currentQ + 1}: {current.question}
            </h3>
            <div className="timer">⏱ Time Left {timer}s</div>
            <div className="options">
              {current.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(i)}
                  disabled={selected !== null}
                  className={`option-btn ${
                    selected !== null
                      ? i === current.correct
                        ? "correct"
                        : i === selected
                        ? "wrong"
                        : "disabled"
                      : ""
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button onClick={handleNext} disabled={selected === null}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
