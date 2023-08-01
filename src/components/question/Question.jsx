import React, { useState } from "react";
import "./question.css";

const Question = ({ questionId, singleQuestion, handleNext }) => {
  // console.log(singleQuestion);

  const [showError, setShowError] = useState();
  // const [showButton, setShowButton] = useState(true);

  // useEffect(() => {
  //   setShowButton(true);
  // }, [setShowButton]);

  // Create Answers Array
  const answers = [
    singleQuestion.correct_answer,
    ...singleQuestion.incorrect_answers,
  ];
  // console.log(answers);

  // Shuffle the Answer
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const shuffledAnswer = shuffle(answers);
  // console.log(shuffledAnswer);

  //Clear ActionMessage
  const actionMessage = () => {
    setTimeout(() => {
      setShowError();
    }, 5000);
  };

  // Check Answer
  const checkAnswer = ({ item }) => {
    if (item === singleQuestion.correct_answer) {
      console.log("corr");
      setShowError("correct answer!");
      actionMessage();
    } else {
      console.log("wro");
      setShowError("Incorrect answer!");
      actionMessage();
    }
  };

  return (
    <div className="container">
      <div className="content_wrapper">
        {/* <div>
          <progress min="0" max="100" value="63" />
        </div> */}
        <div class="bar"></div>
        <div className="top">
          <p>Question {questionId + 1} of 20</p>
          <span>
            {decodeURI(singleQuestion.category)
              .replaceAll("%3A", ":")
              .replaceAll("%26", "&")}
          </span>
          <h5>{decodeURI(singleQuestion.difficulty).toUpperCase()}</h5>
        </div>
        <h3>
          {decodeURI(singleQuestion.question)
            .replaceAll("%2C", ",")
            .replaceAll("%3F", "?")}
        </h3>
        <div>
          {shuffledAnswer.map((item, key) => {
            return (
              <button
                key={key}
                onClick={(e) => {
                  checkAnswer({ item });
                }}
              >
                {decodeURI(item)}
              </button>
            );
          })}
        </div>
        <p>{showError}</p>
        <button onClick={() => handleNext(questionId)}>Next</button>
      </div>
    </div>
  );
};

export default Question;
