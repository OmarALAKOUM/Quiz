import React from "react";

const Navigation = ({ pageindex, handlepageindex, totalpage, children }) => {
  const handleNext = () => {
    handlepageindex(pageindex + 1);
    console.log(pageindex);
  };

  const handlePrevious = () => {
    if (pageindex > 0) {
      handlepageindex(pageindex - 1);
    }
  };

  return (
    <div className="navigation-container">
      <div className="navigation-header">
        Question {pageindex + 1} of {totalpage}
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
