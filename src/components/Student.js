import React from "react";
import PropTypes from "prop-types";
import "./Student.css";
// import { useState } from "react";

// The Student component is a presentational component, responsible for displaying student data (name and email)

const Student = (props) => {
  // const [isPresent, setIsPresent] = useState(false);
  // const togglePresence = () => {
  //   setIsPresent(!isPresent);
  // };

  const onAttendanceButtonClick = () => {
    const updatedStudent = {
      id: props.id,
      nameData: props.name,
      emailData: props.email,
      isPresentData: !props.isPresent,
    };

    // Invoke the function passed in through the prop named "onUpdate"
    // This function is referenced by the name "updateStudentData" in App
    props.onUpdate(updatedStudent);
  };

  // ... other rendering logic

  const deleteMe = () => {
    props.deleteCallback(props.id);
  };

  const nameColor = props.isPresent ? "green" : "red";
  return (
    <div>
      <ul>
        <li className={nameColor}>Nickname: {props.name}</li>
        <li>Email: {props.email}</li>
      </ul>
      {/* <button onClick={togglePresence}>
        Toggle if {props.name} is present
      </button> */}
      <button onClick={onAttendanceButtonClick}>
        Toggle if {props.name} is present
      </button>
      <button onClick={deleteMe}>Delete Student</button>
    </div>
  );
};

Student.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresent: PropTypes.bool,
};

export default Student;
