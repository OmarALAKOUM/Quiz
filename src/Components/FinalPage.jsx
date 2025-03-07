import { useRef } from "react";
const FinalPage = ({
  score,
  restartQuiz,
  answers,
  questions,
}) => {
  const answersFeedbackRef = useRef(null);
  const getAnswerText = (questionIndex) => {
    const userAnswer = answers[questionIndex];
    const correctAnswer = questions[questionIndex].answer;
    if (Array.isArray(userAnswer) && Array.isArray(correctAnswer)) {
      const sortedUserAnswer = userAnswer.slice().sort();
      const sortedCorrectAnswer = correctAnswer.slice().sort();

      if (
        sortedUserAnswer.length === sortedCorrectAnswer.length &&
        sortedUserAnswer.every(
          (value, index) => value === sortedCorrectAnswer[index]
        )
      ) {
        return "Correct";
      } else {
        const correctOptions = correctAnswer
          .map((index) => questions[questionIndex].options[index])
          .join(", ");
        return `Incorrect.  Correct answer: ${correctOptions}`;
      }
    }

    if (userAnswer === correctAnswer) {
      return "Correct";
    } else {
      return `Incorrect. Correct answer: ${questions[questionIndex].options[correctAnswer]}`;
    }
  };
/*
  const downloadAsPDfF = () => {
    const table = document.getElementById("feedback-table");
    const printWindow = window.open("", "", "height=600,width=800");
    printWindow.document.write("<html><head><title>Quiz Review</title>");
    printWindow.document.write(
      "<style>table {width: 100%; border-collapse: collapse;} th, td {padding: 12px; text-align: left; border: 1px solid #ddd;} th {background-color: #f4f4f4; font-weight: bold;} tr:nth-child(even) {background-color: #f9f9f9;} tr:hover {background-color: #f1f1f1;}</style>"
    );
    printWindow.document.write("</head><body>");
    printWindow.document.write(table.outerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };
  */
  const downloadAsPDF = ()=>{
    const printWindow = window.open()
     printWindow.document.write('<html>')
     printWindow.document.write('<style>table {width: 100%; border-collapse: collapse;} th, td {padding: 12px; text-align: left; border: 1px solid #ddd;} th {background-color: #f4f4f4; font-weight: bold;} tr:nth-child(even) {background-color: #f9f9f9;} tr:hover {background-color: #f1f1f1;}</style>');
     printWindow.document.write('<body>');
     printWindow.document.write(answersFeedbackRef.current.innerHTML); 
     printWindow.document.write('</body></html>');
     printWindow.document.close();
     printWindow.focus();
     printWindow.print(); 
  }

  return (
    <div className="final-page-container">
      <div className="final-score">
        <h3>Your Score: </h3>
        <p>
          {score} 
        </p>
      </div>
        {/* {score}  / {totalquestion} */}
      <div className="answers-feedback" ref={answersFeedbackRef}>
        <h3>Quiz Review</h3>
        <table id="feedback-table" className="feedback-table">
          <thead>
            <tr>
              <th>Question Number</th>
              <th>Status</th>
              <th>Correct Options</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => {
              const userAnswer = answers[index];
              const correctAnswer = question.answer;
              const selectedOptions =
                userAnswer
                  ?.map((answerIndex) => question.options[answerIndex])
                  .join(", ") || "No answer selected";
              const correctOptions = correctAnswer
                .map((answerIndex) => question.options[answerIndex])
                .join(", ");

              const status =
                getAnswerText(index) === "Correct" ? "Correct" : "Incorrect";

              return (
                <tr key={index}>
                  <td>
                    Q{index + 1}: {question.question}
                  </td>
                  <td>{status}</td>
                  <td>{correctOptions}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="restart-button">
        <button className="restart-button" onClick={restartQuiz}>
          Restart Quiz
        </button>
      </div>
      <div className="download-pdf">
        <button className="download-pdf" onClick={downloadAsPDF}>Download as PDF</button>
      </div>
    </div>
  );
};

export default FinalPage;
