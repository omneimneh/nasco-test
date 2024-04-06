import React from "react";
import EmployeeDetails from "./EmployeeDetails";

interface UserPageParams {
  params: {id: string};
}

export default function UserPage({params} : UserPageParams) {
  return <EmployeeDetails id={params.id}/>
}