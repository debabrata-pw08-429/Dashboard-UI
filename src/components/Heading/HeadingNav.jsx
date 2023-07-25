import "./heading.css";

const HeadingNav = () => {
  return (
    <>
      <div className="HeadingNav-box">
        <div className="HeadingNav-frame-wrapper">
          <div className="HeadingNav-frame">
            <div className="HeadingNav-div">
              <div className="HeadingNav-frame-2">
                <div className="HeadingNav-text-wrapper">Assessment</div>
                <img
                  className="HeadingNav-vector"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/8cd001659d6f4de933e73b8d2ab70ccb/img/vector-298.svg"
                />
                <div className="HeadingNav-div-wrapper">
                  <div className="HeadingNav-frame-3">
                    <div className="HeadingNav-text-wrapper-2">
                      My Assessments
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadingNav;
