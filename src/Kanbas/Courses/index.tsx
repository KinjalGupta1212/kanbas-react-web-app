import { courses } from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";

import "./index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";

function Courses() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Grades", 
    "People", "Panopto Video", "Discussions", "Announcements", 
    "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", 
    "Progress Reports (EAB Navigate)", "Settings", "Assignments"];
    const { pathname } = useLocation();
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
<div className="container">
    <div className="row">
      <Link to={``}><HiMiniBars3 className="fs-3 breadcrumb-bar-style col-lg-2"/></Link>
      <nav aria-label="breadcrumb" className="breadcrumb-nav-style col-lg-10">
        <ol className="breadcrumb margin-top-20">
          <li className="breadcrumb-item" aria-current="page">
            <Link to={``} className="breadcrumb-course-link-style">{course?.course_addr}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to={``} className="breadcrumb-page-link-style"> Modules</Link>
          </li>
        </ol>
        <hr/>
      </nav>
    </div> 

    <div className="row">
        <div className="col-lg-4">
        <CourseNavigation />
        </div>

    <div className="col-lg-8">
        <div
          className="overflow-y-scroll overflow-x-hidden position-absolute bottom-0 end-0"
          style={{ left: "320px", top: "80px" }} > 
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Zoom" element={<h1>Zoom</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="Announcements" element={<h1>Announcements</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
            <Route path="Files" element={<h1>Files</h1>} />
            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
            <Route path="Progress Reports (EAB Navigate)" element={<h1>Progress Reports (EAB Navigate)</h1>} />
            <Route path="Settings" element={<h1>Settings</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>




</div>
    

  );
}
export default Courses;
