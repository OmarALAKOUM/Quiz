import React from "react";

const FinalPage = ({ score, totalquestion, restartQuiz }) => {
  return (
    <div className="final-page-container">
      <div className="final-score">
        <h3>Your Score: </h3>
        <p>
          {score} / {totalquestion}
        </p>
      </div>
      <div className="restart-button">
        <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
      </div>
    </div>
  );
};

export default FinalPage;
