export interface ITaskDetail {
  serialNo: number;
  taskDetails: string;
  startDate: string;
  endDate: string;
  status: "open" | "pending" | "done";
  assignee: string;
}
