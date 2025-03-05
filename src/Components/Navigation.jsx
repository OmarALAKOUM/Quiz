import React,{useEffect,useState} from "react";

const Navigation = ({ pageindex, handlepageindex, totalpage, children }) => {
  const [timeLeft, setTimeLeft] = useState(30); 
  const [timerActive, setTimerActive] = useState(false);

  const handleNext = () => {
    handlepageindex(pageindex + 1);
    console.log(pageindex);
  };

  const handlePrevious = () => {
    if (pageindex > 0) {
      handlepageindex(pageindex - 1);
    }
  };
  useEffect(() => {
    if (pageindex < totalpage) {
      setTimeLeft(30); 
      setTimerActive(true); 
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1; 
          } else {
            clearInterval(timer); 
            handleNext() 
            return prevTime;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [pageindex,totalpage]);

  return (
    <div className="navigation-container">
      <div className="navigation-header">
        Question {pageindex + 1} of {totalpage} <span className="timer">Timer: {timeLeft}</span>
      </div>
      {children}
      <div className="navigation-buttons">
        {pageindex > 0 && <button onClick={handlePrevious}>Previous</button>}
        <button onClick={handleNext}>
          {pageindex < totalpage - 1 ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Navigation;
