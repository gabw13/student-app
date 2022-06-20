import React from "react";
import "./StudentList.css";
import Student from "./Student";
import PropTypes from "prop-types";

// The StudentList component is a container component, responsible for using presentational components

// The Student component is a presentational component, responsible for displaying student data (name and email)

const StudentList = (props) => {
  // const studentComponents = [
  //   <li>
  //     <Student name="Ada" email="ada@dev.org"></Student>
  //   </li>,
  //   <li>
  //     <Student name="Soo-ah" email="sooah@dev.org"></Student>
  //   </li>,
  //   <li>
  //     <Student name="Chrissy" email="chrissy@dev.org"></Student>
  //   </li>,
  // ];

  // const studentComponents = studentData.map((student) => {
  //   return (
  //     <li>
  //       <Student name={student.nameData} email={student.emailData}></Student>
  //     </li>
  //   );
  // });

  const studentComponents = props.students.map((student, index) => {
    return (
      <li key={student.id}>
        {/* Note that the official React documentation refers to using the index as a key of last resort. Ideally, we would be using something like a primary key value for our data. */}
        <Student
          id={student.id}
          name={student.nameData}
          email={student.emailData}
          isPresent={student.isPresentData}
          onUpdate={props.onUpdateStudent}
          deleteCallback={props.deleteCallback}
        ></Student>
      </li>
    );
  });

  return (
    <section>
      <h2 className="student-list__heading">Student List</h2>
      <ul className="student-list">
        {/* <li>
          <Student name="Ada" email="ada@dev.org"></Student>
        </li>
        <li>
          <Student name="Soo-ah" email="sooah@dev.org"></Student>
        </li>
        <li>
          <Student name="Chrissy" email="chrissy@dev.org"></Student>
        </li> */}
        {studentComponents}
      </ul>
    </section>
  );
};

StudentList.propTypes = {
  studentData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameData: PropTypes.string.isRequired,
      emailData: PropTypes.string.isRequired,
      isPresentData: PropTypes.bool,
    })
  ),
  onUpdateStudent: PropTypes.func.isRequired,
};

export default StudentList;
