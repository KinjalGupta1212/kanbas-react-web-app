import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex"  style={{minHeight: "100%"}}>
            <div className="d-none d-md-block">
            <KanbasNavigation />

      </div>


      <div style={{ flexGrow: 1 }}
      //style={{width:"100%"}}
      // style={{ flexGrow: 1 }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/*" element={<h1>Courses</h1>} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}

export default Kanbas;