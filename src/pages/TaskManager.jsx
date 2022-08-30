import React, { useState, useEffect } from "react";
// import TaskItems from "./TaskItems";
// import { TrashIcon } from "@heroicons/react/outline"
import TaskItem from "../components/TaskItem";
import { v4 as uuid } from "uuid";
import { useTaskContext } from "../context/taskContext";

function TaskManager() {
  // const [tasks, setTasks] = useState(() =>{
  //   const tasks = localStorage.getItem('tasks');
  //   if (!tasks) return[];
  //   return JSON.parse(tasks);
  // });

  const { tasks, setValue } = useTaskContext();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;

    const newTask = {
      id: uuid(),
      text: input,
      completed: false,
    };

    setValue([newTask, ...tasks]);
    setInput("");
  };
  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setValue(newTasks);
  };

  const handleCompleted = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ... task,
          completed: !task.completed,
        }
      }
      return task;
    });
    setValue([newTasks])
  }

const handleEdit = (id) => {
  const newTasks = tasks.filter((task) =>{
    if (task.id === id){
      setInput(task.text);
      return false;
    }
    setValue(newTasks)
  })
};

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="bg-blue-600 h-screen flex justify-center items-center">
      <div className="max-w-xl max-h-96 bg-white rounded-xl px-5 py-10">
        <form
          onSubmit={handleSubmit}
          className="space-x-6 flex w-[30rem] mb-10"
        >
          <input
            type="text"
            className="border-2 border-gray-400 p-2 rounded-md outline-none w-10/12"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white text-lg py-2 px-5 rounded-md"
          >
            Add
          </button>
        </form>
        <div className="space-y-2 overflow-y-auto h-56">
          {tasks.map((task) => {
            return (
              <TaskItem key={task.id} task={task} handleDelete={handleDelete} 
              handleCompleted ={handleCompleted}
              handleEdit ={handleEdit}
              />
            );
          })}
          {/* <TaskItems/>
                    <TaskItems/>
                    <TaskItems/>
                    <TaskItems/>
                    <TaskItems/> */}
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
