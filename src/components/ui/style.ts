import { CSSProperties } from "react";

export const DashboardContainer: CSSProperties = {
  width: "90%",
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
  flexDirection: "row",
  justifyContent: "space-around",
  gap: 20,
  width: "80%",
};

export const AddTaskButton: CSSProperties = {
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  gap: 20,
};
