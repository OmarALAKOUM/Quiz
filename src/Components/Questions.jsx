import React, { useEffect, useState } from "react";

const Questions = ({ question, onAnswer, answers, pageindex }) => {
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    if (answers[pageindex]) {
      setSelectedOption(answers[pageindex]);
    } else {
      setSelectedOption("");
    }
  }, [answers, pageindex]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue); 
    onAnswer(selectedValue);
  };

  return (
    <div>
      <h2>{question.question}</h2>
      <div>
        {question.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Questions;
