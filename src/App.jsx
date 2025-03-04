import questions from "./API/Question.js";
import Quiz from "./Components/Quiz.jsx";

function App() {
  return (
    <div className="container">
      <Quiz questions={questions} />
    </div>
  );
}
export default App;
