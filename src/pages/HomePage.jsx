import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import StudentCard from "../components/StudentCard";

import studentsData from "../assets/students.json";

function HomePage() {
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="border-2 border-rose-500 m-2">
      <h1>Home Page</h1>
      <div className="flex justify-between items-center p-2 font-bold border-b w-full">
        <span
          className="flex items-center justify-center"
          style={{ flexBasis: "20%" }}
        >
          Image
        </span>
        <span style={{ flexBasis: "20%" }}>Name</span>
        <span style={{ flexBasis: "20%" }}>Program</span>
        <span style={{ flexBasis: "20%" }}>Email</span>
        <span style={{ flexBasis: "20%" }}>Phone</span>
      </div>

      {/* Loop through the students and wrap each student card in a Link */}
      {students &&
        students.map((student) => {
          return (
            // Create a link to /students/:studentId for each student
            <Link
              to={`/students/${student._id}`}
              key={student._id}
              className="block"
            >
              <StudentCard {...student} />
            </Link>
          );
        })}
    </div>
  );
}

export default HomePage;
