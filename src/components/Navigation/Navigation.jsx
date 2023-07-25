import { menuDetails } from "../../constants";
import admin_meds from "../../assets/admin_meds.svg";
import Vector_line from "../../assets/Vector_line.svg";
import "./nav.css";

const SideNavigation = () => {
  return (
    <div className="side_navigation">
      {menuDetails.map((ele, idx) => (
        <div key={idx} className="menu">
          <img src={ele.icon} />
          <p>{ele.title}</p>
        </div>
      ))}

      <div>
        <img src={Vector_line} />
      </div>

      <div className="user_admin">
        <div>Admin</div>
        <div>
          <img src={admin_meds} />
          <p>Round Status</p>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
