import React from "react";
import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaExternalLinkAlt, FaLink, FaPlus, FaPlusCircle, FaRegFileAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "../../Courses/index.css";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            {/* Buttons */}
            <div>
                <div className="float-left">
                    <input type="textbox"
                        className="form-control"
                        id="input1"
                        placeholder="Search For Assignment">
                    </input>
                </div>

                <div className="float-right">
                    <button type="button" className="btn modules-buttons-styles">
                        + Group
                    </button>

                    <button type="button" className="btn modules-module-button-style">
                        + Module
                    </button>

                    <button type="button" className="btn modules-publish-button-style">
                        <FaEllipsisV className="fa fa-ellipsis-v" />
                    </button>
                </div>


                <br />

                <hr className="courses-column-hr-style" />

                <ul className="list-group wd-modules">
                    <li className="list-group-item">
                        <div className="list-group-header-style">
                            <FaEllipsisV className="no-right-padding-margin" />
                            <FaEllipsisV className="no-left-padding-margin" />
                            <FaCaretDown className="no-left-padding-margin me-2" />

                            <span className="list-group-title-style">ASSIGNMENTS</span>
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaCaretDown className="left-padding-0" />
                                <FaPlus className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>

                        <ul className="list-group">
                            {assignmentList.map((assignment) => (
                                <li className="list-group-item top-bottom-padding-10">
                                    <FaEllipsisV className="no-right-padding-margin" />
                                    <FaEllipsisV className="no-left-padding-margin" />
                                    <FaRegFileAlt className="text-success fs-3" style={{ paddingLeft: "15px" }} />
                                    <Link className="assignment-item-style"
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}
                                    </Link>
                                    <span className="float-end">
                                        <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                                    <br />

                                    <span className="small-red-assignment-text">Multiple Modules</span>
                                    <span className="small-gray-assignment-text">|</span>
                                    <span className="small-gray-assignment-text bold-text ">Due</span>
                                    <span className="small-gray-assignment-text">{assignment.deadline}</span>
                                    <span className="small-gray-assignment-text">|</span>
                                    <span className="small-gray-assignment-text">{assignment.points}</span>
                                </li>))}
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Assignments;