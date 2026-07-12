import TaskItem from "./TaskItem";

const TaskList = ({
    tasks,
    toggleComplete,
    deleteTask,
    editTask,
}) => {
    if (!tasks.length) {
        return (
            <p className="text-center">
                No tasks found.
            </p>
        );
    }

    return (
        <ul className="list-group">

            {tasks.map(task => (
                <TaskItem
                    key={task._id}
                    task={task}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
            ))}

        </ul>
    );
};

export default TaskList;