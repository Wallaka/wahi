import { useState } from "react";

import type { Task } from "../types";
import { Grid } from "@mui/material";
import Card from "../components/Card/Card";

const initialTasks = [
  {
    name: "Task_one",
    checked: false,
  },
  {
    name: "Task_two",
    checked: true,
  },
];

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (task: Task) => {
    const currentTasks = tasks;
    const newTasks = currentTasks.push(task);
    setTasks(newTasks);
  };

  return (
    <Grid
      style={{
        marginTop: "32px",
        padding: "8px",
      }}
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {tasks?.map((task) => (
        <Grid item xs={4} sm={4} md={4} key={task.name}>
          <Card {...task} />
        </Grid>
      ))}
    </Grid>
  );
}
