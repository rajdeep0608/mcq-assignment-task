import Question from "./components/question/Question";
import { useState } from "react";
import data from "./questions.json";

function App() {
  const [questionId, setQuestionId] = useState(0);
  // const [showButton, setShowButton] = useState(true);

  const handleNext = (questionId) => {
    setQuestionId(questionId + 1);
    // setShowButton(false);
  };

  return (
    <div className="App">
      <Question
        questionId={questionId}
        singleQuestion={data[questionId]}
        handleNext={handleNext}
        // showButton={showButton}
      />
    </div>
  );
}

export default App;
