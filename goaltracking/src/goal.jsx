
import React, { useState } from "react";

export default function GoalApp() {
  const [goalInput, setGoalInput] = useState("");
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    if (goalInput.trim() !== "") {
      setGoals((prevGoals) => [
        ...prevGoals,
        { id: Date.now(), text: goalInput, completed: false },
      ]);
      setGoalInput("");
    }
  };

  const toggleComplete = (id) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const deleteGoal = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Goal Tracking App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={goalInput}
          onChange={(e) => setGoalInput(e.target.value)}
          placeholder="Enter your goal"
          className="flex-grow border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addGoal}
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      <ul>
        {goals.map((goal) => (
          <li
            key={goal.id}
            className="flex items-center justify-between bg-gray-100 p-3 rounded mb-2"
          >
            <span
              onClick={() => toggleComplete(goal.id)}
              className={`cursor-pointer flex-grow ${
                goal.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {goal.text}
            </span>
            <button
              onClick={() => deleteGoal(goal.id)}
              className="text-red-600 hover:text-red-800 ml-4"
              aria-label={`Delete goal ${goal.text}`}
            >
              &#10005;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
