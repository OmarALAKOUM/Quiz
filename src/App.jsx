import questions from "./API/Question.js";
import Quiz from "./Components/Quiz.jsx";
function App() {
  return <Quiz questions={questions} />;
}
export default App;
