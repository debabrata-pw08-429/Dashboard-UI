import AddAssessment from "../AddAssessment/AddAssessment";
import HeadingNav from "../Heading/HeadingNav";
import Metrics from "../Metrics/Metrics";

import "./assessment.css";

const MyAssessmentDetails = () => {
  return (
    <div className="my_assessment_details">
      <HeadingNav />
      <Metrics />
      <div className="text-wrapper-001">My Assessment</div>
      <AddAssessment />
    </div>
  );
};

export default MyAssessmentDetails;
