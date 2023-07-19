import React from "react";
import { isPropertySignature } from "typescript";
import "./css/SchoolCard.css";

function SchoolCard(props) {
  return (
    <div className="col-4">
      <div className="card">
        <h5 className="card-header">{props.school.ENTITY_NAME}</h5>
        <div className="card-body">
          <h5 className="card-title">
            <span className="badge">2017-18</span>
            <span className="badge">2016-17</span>
            <span className="badge">Archive</span>
          </h5>
          <span className="badge badge-header">Student Data</span>
          <ul className="list-group">
            <li className="list-group-item">Enrollment Data</li>
            <li className="list-group-item">3-8 ELA Assessment Data</li>
            <li className="list-group-item">3-8 Math Assessment Data</li>
          </ul>
          <span className="badge badge-header">School Data</span>
          <ul className="list-group">
            <li className="list-group-item">School Report Card</li>
            <li className="list-group-item">Student and Educator Report</li>
          </ul>
          <span className="badge badge-header">Dempgraphics</span>
          <ul className="list-group">
            <li className="list-group-item">School Report Card</li>
            <li className="list-group-item">
              Females: {props.school.NUM_FEMALE}
            </li>
            <li className="list-group-item">Males: {props.school.NUM_MALE}</li>
            <li className="list-group-item">
              Whites: {props.school.NUM_WHITE}
            </li>
            <li className="list-group-item">
              Blacks: {props.school.NUM_BLACK}
            </li>
            <li className="list-group-item">
              Asians: {props.school.NUM_ASIAN}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchoolCard;
