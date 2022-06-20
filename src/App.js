import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";
// import Post from "./components/Post";
import "./App.css";
import { useState } from "react";

// const studentData = [
//   {
//     nameData: "Ada",
//     emailData: "ada@dev.org",
//   },
//   {
//     nameData: "Soo-ah",
//     emailData: "sooah@dev.org",
//   },
//   {
//     nameData: "Chrissy",
//     emailData: "chrissy@dev.org",
//   },
// ];

function App() {
  // const studentData = [
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      nameData: "Ada",
      emailData: "ada@dev.org",
      isPresentData: false,
    },
    {
      id: 2,
      nameData: "Soo-ah",
      emailData: "sooah@dev.org",
      isPresentData: false,
    },
    {
      id: 3,
      nameData: "Chrissy",
      emailData: "chrissy@dev.org",
      isPresentData: true,
    },
  ]);

  const updateStudentData = (updatedStudent) => {
    const students = studentData.map((student) => {
      if (student.id === updatedStudent.id) {
        return updatedStudent;
      } else {
        return student;
      }
    });

    setStudentData(students);
  };

  const deleteStudent = (id) => {
    const newStudents = [];
    for (const student of studentData) {
      if (student.id !== id) {
        newStudents.push(student);
      }
      setStudentData(newStudents);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada's Class</h1>
        <ClassInfo classSize={studentData.length}></ClassInfo>
      </header>
      <main>
        {/* ClassInfo and StudentList components are siblings to each other. */}

        <StudentList
          students={studentData}
          onUpdateStudent={updateStudentData}
          deleteCallback={deleteStudent}
        ></StudentList>
        {/* <Post></Post>
        <Post></Post>
        <Post></Post> */}
      </main>
    </div>
  );
}

export default App;
