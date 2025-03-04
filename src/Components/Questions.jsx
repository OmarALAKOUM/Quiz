import React, { useEffect, useState } from "react";

const Questions = ({ question, onAnswer, answers, pageindex }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (answers[pageindex] !== undefined) {
      setSelectedOption(answers[pageindex]);
    } else {
      setSelectedOption(null);
    }
  }, [answers, pageindex]);

  const handleChange = (event) => {
    const selectedValue = Number(event.target.value);
    setSelectedOption(selectedValue); 
    onAnswer(selectedValue);
  };

  return (
    <div className="question-container">
      <h2 className="question-title">{question.question}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <label key={index} className="option-label">
            <input
              type="radio"
              value={index}
              checked={selectedOption === index}
              onChange={handleChange}
              className="radio-input"
              aria-label={option} // For better accessibility
            />
            <span className="option-text">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Questions;
