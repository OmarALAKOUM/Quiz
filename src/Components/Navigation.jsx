import React from "react";

const Navigation = ({ pageindex, handlepageindex, totalpage }) => {
  const handleNext = () => {
    if (pageindex < totalpage - 1) {
      handlepageindex(pageindex + 1);
      console.log(pageindex);
    }
  };

  const handlePrevious = () => {
    if (pageindex > 0) {
      handlepageindex(pageindex - 1);
    }
  };

  return (
    <div>
      <p>
        Question {pageindex + 1} of {totalpage}
      </p>

      {pageindex > 0 && <button onClick={handlePrevious}>Previous</button>}

      {pageindex < totalpage - 1 ? (
        <button onClick={handleNext}>Next</button>
      ) : (
        <button onClick={handleNext}>Submit</button>
      )}
    </div>
  );
};

export default Navigation;
