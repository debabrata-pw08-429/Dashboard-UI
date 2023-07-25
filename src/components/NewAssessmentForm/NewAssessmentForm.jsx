import { useState } from "react";
import "./NewAssessmentForm.css";

const NewAssessmentForm = () => {
  const [assessmentName, setAssessmentName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [duration, setDuration] = useState("");

  const handleSave = () => {
    // Your save logic here
    console.log("Form data saved:", {
      assessmentName,
      purpose,
      description,
      skills,
      duration,
    });

    resetForm();
  };

  const resetForm = () => {
    setAssessmentName("");
    setPurpose("");
    setDescription("");
    setSkills("");
    setDuration("");
  };

  return (
    <div className="assessment-form-frame">
      <div className="header">
        <div className="header-text">Create new assessment</div>
        <img
          className="header-image"
          src="https://generation-sessions.s3.amazonaws.com/0540b265d11caa2be8a2115a6c938490/img/cut-1.svg"
          alt="Cut"
        />
      </div>
      <div>
        <form>
          <div className="input-group">
            <div className="label">
              <div className="label-text">Name of assessment</div>
            </div>

            <input
              type="text"
              value={assessmentName}
              onChange={(e) => setAssessmentName(e.target.value)}
              placeholder="Type Here"
            />
          </div>
          <div className="input-group">
            <div className="label">
              <p className="label-text">Purpose of the test is</p>
            </div>

            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option value="Job">Job</option>
              <option value="Practice">Practice</option>
              <option value="Assignment">Assignment</option>
            </select>
          </div>
          <div className="input-group">
            <div className="label">
              <div className="label-text">Description</div>
            </div>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Type Here"
            />
          </div>
          <div className="input-group">
            <div className="label">
              <div className="label-text">Skills</div>
            </div>
            <div className="input-text-area">
              {/* Assuming skills is a comma-separated string */}
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Type Here"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="label">
              <div className="label-text">Duration of assessment</div>
            </div>

            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="HH:MM:SS"
            />
          </div>
        </form>
      </div>
      <div className="buttons-wrapper">
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewAssessmentForm;
