import { createContext, useEffect, useState, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TaskContext = createContext({
  task: [],
  setValue: (tasks) => {},
});

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { data, setValue } = useLocalStorage("tasks", []);

  useEffect(() => {
    setTasks(data);
  }, [data]);

  return (
    // the vulue param means js code which is not compilsory to pass 2 curly braces

    <TaskContext.Provider value={{ tasks, setValue }}>
      {children}
    </TaskContext.Provider>
  );
};
export const useTaskContext = () => useContext(TaskContext);
