import React from "react";
import { useNavigate } from "react-router-dom";
import { consultants } from "../assets/Consultants";
import DepartmentFilter from "../Components/DepartmentFilter";

const ConsultantList = () => {
  console.log(consultants);
  const navigation = useNavigate();

  return (
    <div className="mx-32 my-20">
      <DepartmentFilter consultants={consultants} />;
      
    </div>
  );
};

export default ConsultantList;
