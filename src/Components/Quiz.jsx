import React, { useState} from "react";
import Questions from "./Questions";
import Navigation from "./Navigation";
import FinalPage from "./FinalPage";
const Quiz = ({ questions }) => {
  const [answers, setAnswers] = useState([]);
  const [pageindex, setPageIndex] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    const userAnswers = [...answers];
    userAnswers[pageindex] = selectedAnswer;
    console.log(userAnswers);
    setAnswers(userAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (Array.isArray(answer) && Array.isArray(questions[index].answer)) {
        if (
          answer.length === questions[index].answer.length &&
          answer.every((value) => questions[index].answer.includes(value)) &&
          questions[index].answer.every((value) => answer.includes(value))
        ) {
          score += 1;
        }
      }
    });
    return score;
  };
  
  const restartQuiz = () => {
    setAnswers([]);
    setPageIndex(0);
  };

  return (
    <div className="quiz-container">
      {pageindex !== questions.length ? (
        <>
          <Navigation
            pageindex={pageindex}
            handlepageindex={setPageIndex}
            totalpage={questions.length}
          >
            <Questions
              question={questions[pageindex]}
              onAnswer={handleAnswer}
              answers={answers}
              pageindex={pageindex}
            />
          </Navigation>
        </>
      ) : (
        <div className="final-page-container">
          <FinalPage
            score={calculateScore() * 4}
            totalquestion={questions.length * 4}
            restartQuiz={restartQuiz}
            answers={answers}
            questions={questions}
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;
