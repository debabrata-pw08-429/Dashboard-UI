import "./AssessmentCard.css";

const AssessmentCard = () => {
  return (
    <>
      <div className="ac-frame-7">
        <div className="ac-frame-8">
          <div className="ac-frame-9">
            <img
              className="ac-img"
              alt="Frame"
              src="https://generation-sessions.s3.amazonaws.com/eac5d4202e1a1c0f455a6100a440b756/img/frame-1000008703-6.svg"
            />
            <div className="ac-frame-10">
              <div className="ac-txt-wrapper-3">Math Assessment</div>
              <div className="ac-frame-11">
                <div className="ac-txt-wrapper-4">Job</div>
                <img
                  className="ac-vector"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/eac5d4202e1a1c0f455a6100a440b756/img/vector-333-6.svg"
                />
                <div className="ac-div-wrapper">
                  <div className="ac-frame-12">
                    <img
                      className="ac-schedule"
                      alt="Schedule"
                      src="https://generation-sessions.s3.amazonaws.com/267843dd1af3b8e667f648648a5cf2fc/img/calendar-today-2.svg"
                    />
                    <div className="ac-txt-wrapper-5">20 Apr 23</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ac-elem-dot-wrapper">
            <img
              className="ac-elem-dot ac-three-dot"
              alt="Element dot"
              src="https://generation-sessions.s3.amazonaws.com/eac5d4202e1a1c0f455a6100a440b756/img/3-dot.svg"
            />
          </div>
        </div>
        <img
          className="ac-vector-2"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/eac5d4202e1a1c0f455a6100a440b756/img/vector-332-6.svg"
        />
        <div className="ac-frame-13">
          <div className="ac-frame-14">
            <div className="ac-frame-15">
              <div className="ac-txt-wrapper-6">00</div>
              <div className="ac-txt-wrapper-7">Duration</div>
            </div>
            <div className="ac-frame-15">
              <div className="ac-txt-wrapper-6">00</div>
              <div className="ac-txt-wrapper-7">Questions</div>
            </div>
          </div>
          <div className="ac-frame-17">
            <div className="ac-frame-16">
              <img
                className="ac-link"
                alt="Link"
                src="https://generation-sessions.s3.amazonaws.com/eac5d4202e1a1c0f455a6100a440b756/img/link-5.svg"
              />
              <div className="ac-txt-wrapper-8">Share</div>
            </div>
            <div className="ac-frame-17">
              <div className="ac-frame-19">
                <div className="ac-frame-20">
                  <div className="ac-txt-wrapper-10">LP</div>
                </div>
                <div className="ac-frame-21">
                  <div className="ac-txt-wrapper-10">LP</div>
                </div>
                <div className="ac-frame-22">
                  <div className="ac-txt-wrapper-10">LP</div>
                </div>
              </div>
              {/* <div className="ac-txt-wrapper-11">+324</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentCard;
