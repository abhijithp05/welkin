import React, { useState } from "react";
import { AddTask } from "../components/AddTask";
import { Button } from "../components/ui/Button";
import { Modal } from "../components/ui/Modal";
import { AddTaskModalButton, DashboardContainer } from "../components/ui/style";
import { Table } from "../components/ui/Table";
import { mockTableData, tasktableHeaders } from "../constants";
import { ITaskDetail } from "../interfaces/ITaskDetail";

export const Dashboard: React.FC = (): JSX.Element => {
  const [tableData, setTableData] = useState<ITaskDetail[]>(mockTableData);
  const [selectedTask, setSelectedTask] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function tableToCSV() {
    // Variable to store the final csv data
    var csv_data: any = [];

    // Get each row data
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
      // Get each column data
      var cols = rows[i].querySelectorAll("td,th");

      // Stores each csv row data
      var csvrow = [];
      for (var j = 0; j < cols.length; j++) {
        // Get the text data of each cell
        // of a row and push it to csvrow
        csvrow.push(cols[j].innerHTML);
      }

      // Combine each column value with comma
      csv_data.push(csvrow.join(","));
    }

    // Combine each row data with new line character
    csv_data = csv_data.join("\n");

    // Call this function to download csv file
    downloadCSVFile(csv_data);
  }

  function downloadCSVFile(csv_data: any) {
    // Create CSV file object and feed
    // our csv_data into it
    let CSVFile = new Blob([csv_data], {
      type: "text/csv",
    });

    // Create to temporary link to initiate
    // download process
    var temp_link = document.createElement("a");

    // Download csv file
    temp_link.download = "GfG.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to
    // trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
  }

  const handleSelectedTask = (e: any) => {
    const { checked, name } = e?.target || {};
    const id = Number(name);

    setSelectedTask((prevSelect) => {
      if (name === "all")
        return checked
          ? tableData?.reduce(
              (curr: number[], item) => [...curr, item.serialNo],
              []
            )
          : [];
      else if (checked) return [...prevSelect, id];
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
      <div style={AddTaskModalButton}>
        {selectedTask?.length > 0 && (
          <Button
            style={{ width: "30%" }}
            variant="contained"
            onClick={handleDeleteTask}
          >
            Delete Selected Task
          </Button>
        )}
        <Button
          style={{ width: "30%" }}
          variant="contained"
          onClick={handleModalOpen}
        >
          Add Task
        </Button>
        <Button
          style={{ width: "30%" }}
          variant="contained"
          onClick={tableToCSV}
        >
          Download as CSV
        </Button>
      </div>
    </div>
  );
};
