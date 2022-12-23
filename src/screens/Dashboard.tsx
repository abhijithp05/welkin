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
  const [selectedTask, setSelectedTask] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSelectedTask = (e: any) => {
    const { checked, name } = e?.target || {};
    const id = Number(name);

    setSelectedTask((prevSelect) => {
      if (checked) return [...prevSelect, id];
      else return prevSelect.filter((item) => item !== id);
    });
  };

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

  const handleDeleteTask = () => {
    setTableData((prevTable) =>
      prevTable.filter(
        (item: ITaskDetail) => !selectedTask.includes(item.serialNo)
      )
    );
  };

  return (
    <div style={DashboardContainer}>
      <Table
        tableList={tableData}
        tableHeaders={tasktableHeaders}
        selectedTask={selectedTask}
        onCheckChecbox={handleSelectedTask}
        showCheckbox
      />
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
      {selectedTask?.length > 0 && (
        <Button
          style={AddTaskModalButton}
          variant="contained"
          onClick={handleDeleteTask}
        >
          Delete Selected Task
        </Button>
      )}
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
