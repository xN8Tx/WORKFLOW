import React from "react";
import { useSelector } from "react-redux";
import { companyTasksSelector } from "../../store/tasks/tasks";
import BigHeading from "../../ui/heading/big-heading/BigHeading";
import CompanyItem from "../company-item/CompanyItem";

export default function TaskList() {
  const data = useSelector(state => companyTasksSelector(state, localStorage.getItem("user")));
  return (
    <div className="tasks-company">
      <BigHeading>Задачи команды</BigHeading>
      <div className="tasks-company__list">
        {data.map(i => (
          <CompanyItem
            key={i.id}
            task={i.task}
            name={i.name}
            status={i.status}
          />
        ))}
      </div>
    </div>
  )
}