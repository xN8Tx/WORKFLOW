import React from "react";
import BigHeading from "../../ui/heading/big-heading/BigHeading";
import CompanyItem from "../company-item/CompanyItem";

export default function TaskList() {
  return (
    <div className="tasks-company">
      <BigHeading>Задачи команды</BigHeading>
      <div className="tasks-company__list">
        <CompanyItem />
        <CompanyItem />
      </div>
    </div>
  )
}