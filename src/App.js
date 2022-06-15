import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";

function App() {
  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo></ClassInfo>
      Here's the second rendered student list:
      <StudentList></StudentList>
    </main>
  );
}

export default App;
