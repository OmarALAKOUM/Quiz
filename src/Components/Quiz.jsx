import React, { useState , useEffect} from "react";
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
  
  useEffect(() => {
    console.log(answers); 
  }, [answers]);

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        score += 1;
      }
    });

    return score;
  };
  
  return (
    !(pageindex==questions.length-1) ? (
      <div>
        <Questions
          question={questions[pageindex]}
          onAnswer={handleAnswer}
          answers={answers}
          pageindex={pageindex}
        />
        <Navigation 
          pageindex={pageindex}
          handlepageindex={setPageIndex} 
          totalpage={questions.length}
        />
      </div>
    ) : (
     <div>
        <FinalPage 
            score = {calculateScore()*4}
            totalquestion={questions.length *4}
        />
      </div>
    )
  );
  
};

export default Quiz;
