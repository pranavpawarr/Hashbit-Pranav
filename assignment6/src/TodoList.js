import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    const updatedTasks = [...tasks, newTask.trim()].sort((a, b) =>
      a.localeCompare(b)
    );

    setTasks(updatedTasks);
    setNewTask("");
  };

  const deleteTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4">
      <div className="flex space-x-2">
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task"
          className="flex-grow"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks yet</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 bg-gray-100 rounded"
            >
              <span>{task}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTask(index)}
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
