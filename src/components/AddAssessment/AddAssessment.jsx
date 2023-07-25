import "./AddAssessment.css";
import "../NewAssessmentForm/NewAssessmentForm.css";
import React, { useState } from "react";
import AddNew from "../AddNew/AddNew";
import AssessmentCard from "../AssessmentCard/AssessmentCard";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  // Button,
  // FormControl,
  // FormLabel,
  // Input,
} from "@chakra-ui/react";

const AddAssessment = () => {
  const [click, setClick] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [assessmentName, setAssessmentName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [duration, setDuration] = useState("");

  const handleChange = () => {
    setClick(true);
    onOpen();
    console.log("clicked", click);
  };

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
    onClose();
  };

  const resetForm = () => {
    setAssessmentName("");
    setPurpose("");
    setDescription("");
    setSkills("");
    setDuration("");
  };

  return (
    <div className="card_container">
      <div className="text-wrapper">My Assessment</div>
      <div className="new_plus_card">
        <div onClick={handleChange}>
          <AddNew />
        </div>

        <AssessmentCard />
        <AssessmentCard />
        <AssessmentCard />
      </div>
      <div>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="header">
              <div className="header-text">Create new assessment</div>
              <ModalCloseButton />
            </ModalHeader>

            <ModalBody pb={6}>
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
            </ModalBody>
            <ModalFooter className="buttons-wrapper">
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default AddAssessment;
