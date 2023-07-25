import "./addnew.css";

const AddNew = () => {
  return (
    <div className="assessment-container">
      <div className="assessment-header">
        <div className="add-button">
          <img
            className="add-icon"
            alt="Add"
            src="https://generation-sessions.s3.amazonaws.com/eac5d4202e1a1c0f455a6100a440b756/img/add.svg"
          />
        </div>
        <div className="assessment-title">New Assessment</div>
      </div>
      <p className="description">
        From here you can add questions of multiple types like MCQs, subjective
        (text or paragraph)!
      </p>
    </div>
  );
};

export default AddNew;
