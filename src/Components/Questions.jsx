import React, { useEffect, useState } from "react";

const Questions = ({ question, onAnswer, answers, pageindex }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (answers[pageindex] !== undefined) {
      setSelectedOptions(answers[pageindex]);
    } else {
      setSelectedOptions([]);
    }
  }, [answers, pageindex]);

  const handleChange = (event) => {
    const selectedValue = Number(event.target.value);

    if (selectedOptions.includes(selectedValue)) {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== selectedValue)
      );
      onAnswer(selectedOptions.filter((option) => option !== selectedValue));
    } else {
      const newSelectedOptions = [...selectedOptions, selectedValue];
      setSelectedOptions(newSelectedOptions);
      onAnswer(newSelectedOptions);
    }
  };

  return (
    <div className="question-container">
      <h2 className="question-title">{question.question}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <label key={index} className="option-label">
            <input
              type="checkbox"
              value={index}
              checked={selectedOptions.includes(index)}
              onChange={handleChange}
              className="checkbox-input"
              aria-label={option}
            />
            <span className="option-text">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Questions;
