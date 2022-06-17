import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";
import "./App.css";

const studentData = [
  {
    nameData: "Ada",
    emailData: "ada@dev.org",
  },
  {
    nameData: "Soo-ah",
    emailData: "sooah@dev.org",
  },
  {
    nameData: "Chrissy",
    emailData: "chrissy@dev.org",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada's Class</h1>
        <ClassInfo classSize={studentData.length}></ClassInfo>
      </header>
      <main>
        {/* ClassInfo and StudentList components are siblings to each other. */}

        <StudentList students={studentData}></StudentList>
      </main>
    </div>
  );
}

export default App;
