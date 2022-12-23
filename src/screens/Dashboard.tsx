import React, { useState } from "react";
import { AddTask } from "../components/AddTask";
import { Button } from "../components/ui/Button";
import { Modal } from "../components/ui/Modal";
import { AddTaskModalButton, DashboardContainer } from "../components/ui/style";
import { Table } from "../components/ui/Table";
import { mockTableData, tasktableHeaders } from "../constants";
import { ITaskDetail } from "../interfaces/ITaskDetail";

export const Dashboard = () => {
  const [tableData, setTableData] = useState(mockTableData);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const addTask = (data: Omit<ITaskDetail, "serialNo">): void => {
    setTableData((prevTable) => [
      ...prevTable,
      { serialNo: prevTable.length + 1, ...data },
    ]);
    setIsModalOpen(() => false);
  };

  return (
    <div style={DashboardContainer}>
      <Table tableList={tableData} tableHeaders={tasktableHeaders} />
      <Modal
        open={isModalOpen}
        handleClose={handleModalClose}
        buttonTitle="Add task"
        modalHeading="Add Task"
      >
        <>
          <AddTask onSubmitClick={addTask} />
        </>
      </Modal>
      <Button
        style={AddTaskModalButton}
        variant="contained"
        onClick={handleModalOpen}
      >
        Add Task
      </Button>
    </div>
  );
};
