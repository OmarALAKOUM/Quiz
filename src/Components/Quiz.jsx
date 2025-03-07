import React, { useState,useCallback} from "react";
import Questions from "./Questions";
import Navigation from "./Navigation";
import FinalPage from "./FinalPage";
import config from '../API/config'
const Quiz = ({ questions }) => {
  const [answers, setAnswers] = useState([]);
  const [pageindex, setPageIndex] = useState(0);


  const handleAnswer = (selectedAnswer) => {
    const userAnswers = [...answers];
    userAnswers[pageindex] = selectedAnswer;
    setAnswers(userAnswers);
  };

  // const calculateScore = () => {
  //   let score = 0;
  //   answers.forEach((answer, index) => {
  //     if (Array.isArray(answer) && Array.isArray(questions[index].answer)) {
  //       if (
  //         answer.length === questions[index].answer.length &&
  //         answer.every((value) => questions[index].answer.includes(value))/*  &&
  //         questions[index].answer.every((value) => answer.includes(value)) */
  //       ) {
  //         score += 1;
  //       }
  //     }
  //   });
  //   return score;
  // };

   const handlePageIndex = useCallback((newIndex) => {
    setPageIndex(newIndex);
  }, []);

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      const correctAnswers = questions[index].answer;
      const totalScore = questions[index].score;
      if (Array.isArray(answer) && Array.isArray(correctAnswers)) {
        const correctCount = answer.filter((value) => correctAnswers.includes(value)).length;
        console.log(correctCount);
        if (correctCount === answer.length && correctCount === correctAnswers.length) {
          score += totalScore;
        } else {
          const pointsPerCorrectAnswer = totalScore / correctAnswers.length;
          score += pointsPerCorrectAnswer * correctCount;
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
            handlepageindex={handlePageIndex}
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
            score={calculateScore() * config.scoreMultiplier}
            totalquestion={questions.length * config.scoreMultiplier}
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
