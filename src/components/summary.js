import React from "react";

function summary() {
  return (
    <div>
      <div className="all">
        <div className="container">
          <h1 className="result-text">Your Result</h1>

          <div className="per">
            <h1 className="num">76</h1>
            <h2 className="of">of 100</h2>
          </div>
          <p className="text-2">Great</p>

          <section>
            <p>
              You scored higher than 65% of <br />
              the people who have taken <br />
              these tests.
            </p>
          </section>
        </div>

        <h1 className="sum-title">Summary</h1>
        <div className="sum-cont">
        <div className="light">
          <p className="react">
            <span className="material-symbols-outlined">bolt</span>Reaction
          </p>
          <p>
            <span className="space"> 80 </span>/ 90{" "}
          </p>
        </div>
        <div className="memory">

          <span class="material-symbols-outlined">neurology</span> memory
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default summary;
