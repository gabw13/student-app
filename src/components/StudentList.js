import React from "react";
import "./StudentList.css";
import Student from "./Student";

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
      <li key={index}>
        {/* Note that the official React documentation refers to using the index as a key of last resort. Ideally, we would be using something like a primary key value for our data. */}
        <Student name={student.nameData} email={student.emailData}></Student>
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

export default StudentList;
