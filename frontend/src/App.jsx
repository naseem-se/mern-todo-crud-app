import { useEffect, useState } from "react";

import api from "./api/taskApi";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {

    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const { data } = await api.get("/tasks");

            setTasks(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async title => {
        try {

            await api.post("/tasks", {
                title,
            });

            fetchTasks();

        } catch (error) {
            console.log(error);
        }
    };

    const deleteTask = async id => {
        try {

            await api.delete(`/tasks/${id}`);

            fetchTasks();

        } catch (error) {
            console.log(error);
        }
    };

    const toggleComplete = async task => {
        try {

            await api.put(`/tasks/${task._id}`, {
                completed: !task.completed,
            });

            fetchTasks();

        } catch (error) {
            console.log(error);
        }
    };

    const editTask = async task => {

        const title = prompt(
            "Update Task",
            task.title
        );

        if (!title) return;

        try {

            await api.put(`/tasks/${task._id}`, {
                title,
            });

            fetchTasks();

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="container mt-5">

            <div className="col-md-8 mx-auto">

                <h1 className="text-center mb-4">
                    MERN Todo App
                </h1>

                <TaskForm
                    addTask={addTask}
                />

                <TaskList
                    tasks={tasks}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />

            </div>

        </div>

    );
};

export default App;