import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import * as db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState({
        _id: new Date().getTime().toString(),
        name: "New Course",
        number: "0000",
        course_addr: "0000.202430",
        short_desc: "Course Description",
        startDate: "2024-01-10",
        endDate: "2024-05-15",
        image: "new_Course.jpg",
        course_title_color: "rgb(87, 82, 82)"
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
    <div className="d-flex" style={{ minHeight: "100%" }}>
      <div className="d-none d-md-block">
        <KanbasNavigation />
      </div>

      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" />
          <Route path="Dashboard" element={
                        <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}/>
          } />
          <Route path="Courses/*" />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}

export default Kanbas;