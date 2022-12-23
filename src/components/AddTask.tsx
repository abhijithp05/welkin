import React, { useState } from "react";
import moment from "moment";
import { Button } from "./ui/Button";
import { DatePicker } from "./ui/DatePicker";
import { Select } from "./ui/Select";
import { TextField } from "./ui/TextField";
import { ITaskDetail } from "../interfaces/ITaskDetail";
import { menuItems } from "../constants";
import { AddTaskButton, AddTaskForm } from "./ui/style";

interface IAddTask {
  onSubmitClick: (data: Omit<ITaskDetail, "serialNo">) => void;
}

export const AddTask: React.FC<IAddTask> = ({ onSubmitClick }): JSX.Element => {
  const [formData, setFormData] = useState<any>({});
  const [startDate, setStartDate] = useState<string>(
    moment().format("YYYY-DD-MM")
  );
  const [endDate, setEndDate] = useState<string>(moment().format("YYYY-DD-MM"));

  const handleSubmit = () => {
    onSubmitClick({ ...formData, startDate, endDate });
  };

  const changeHandler = (e: any) => {
    const { name, value } = e.target || {};
    setFormData((form: any) => ({
      ...form,
      [name]: value,
    }));
  };
  return (
    <form style={AddTaskForm}>
      <TextField
        name="taskDetails"
        label="Task Detail"
        variant="outlined"
        onChange={changeHandler}
      />
      <DatePicker
        name="startDate"
        label="Start Date"
        inputFormat="DD/MM/YYYY"
        value={startDate}
        onChange={(e: any) => {
          setStartDate(moment(e.$d).format("DD/MM/YYYY"));
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />
      <DatePicker
        label="Date desktop"
        name="endDate"
        inputFormat="MM/DD/YYYY"
        value={endDate}
        onChange={(e: any) => {
          setEndDate(moment(e.$d).format("DD/MM/YYYY"));
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />

      <Select
        name="status"
        selectLabel="Status"
        menuItems={menuItems}
        value={formData?.status}
        onSelectChange={changeHandler}
      />
      <TextField
        name="assignee"
        label="Assignee"
        variant="outlined"
        onChange={changeHandler}
      />
      <div style={AddTaskButton}>
        <Button variant="contained" onClick={handleSubmit}>
          Add Task Detail
        </Button>
      </div>
    </form>
  );
};
