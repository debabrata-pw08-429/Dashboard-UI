import MyAssessmentDetails from "../components/AssessmentDetails/MyAssessmentDetails";
import SideNavigation from "../components/Navigation/Navigation";
import "./dash.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideNavigation />
      <MyAssessmentDetails />
    </div>
  );
};

export default Dashboard;
