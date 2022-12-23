import { CSSProperties } from "react";

export const DashboardContainer: CSSProperties = {
  width: "80%",
  height: "auto",
  padding: 10,
  display: "flex",
  gap: 20,
  flexDirection: "column",
  justifyContent: "space-around",
};

export const AddTaskForm: CSSProperties = {
  display: "flex",
  gap: 20,
  flexDirection: "column",
};

export const AddTaskModalButton: CSSProperties = {
  display: "flex",
  alignSelf: "center",
  width: "50%",
};

export const AddTaskButton: CSSProperties = {
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  gap: 20,
};
