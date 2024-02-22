import { courses } from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";

import "./index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";

function Courses() {
  const { pathname } = useLocation();
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (

    <>
      <HiMiniBars3 className="fs-3 breadcrumb-bar-style d-none d-md-block"/>
      
      <nav className="breadcrumb-nav-style d-none d-md-block">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={``} className="breadcrumb-course-link-style">{course?.course_addr}</Link>
          </li>
          <li className="breadcrumb-item active breadcrumb-page-link-style" aria-current="page">Library</li>
        </ol>
      </nav>  

      <hr className="d-none d-md-block" style={{marginTop:"45px"}}/>

      <CourseNavigation />


    </>
  );
}
export default Courses;
