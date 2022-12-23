import { ITaskDetail } from "../interfaces/ITaskDetail";

export const menuItems = {
  Open: "Open",
  Pending: "Pending",
  Done: "Done",
};

export const tasktableHeaders = [
  "Serial No",
  "Task Details",
  "Start Date",
  "End Date",
  "Status",
  "Assignee",
];

export const mockTableData: ITaskDetail[] = [
  {
    serialNo: 1,
    taskDetails: "complete the task asap",
    startDate: "June 20,2022",
    endDate: "July 20,2022",
    status: "open",
    assignee: "Abhijith",
  },
  {
    serialNo: 2,
    taskDetails: "complete the task asap",
    startDate: "June 20,2022",
    endDate: "July 20,2022",
    status: "pending",
    assignee: "Abhijith",
  },
  {
    serialNo: 3,
    taskDetails: "complete the task asap",
    startDate: "June 20,2022",
    endDate: "July 20,2022",
    status: "done",
    assignee: "Mukesh",
  },
  {
    serialNo: 4,
    taskDetails: "complete the task asap",
    startDate: "June 20,2022",
    endDate: "July 20,2022",
    status: "done",
    assignee: "Santosh",
  },
];
