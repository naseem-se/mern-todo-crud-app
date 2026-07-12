const TaskItem = ({
    task,
    toggleComplete,
    deleteTask,
    editTask,
}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">

            <div>

                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task)}
                    className="form-check-input me-3"
                />

                <span
                    style={{
                        textDecoration: task.completed
                            ? "line-through"
                            : "none",
                    }}
                >
                    {task.title}
                </span>

            </div>

            <div>

                <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editTask(task)}
                >
                    Edit
                </button>

                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTask(task._id)}
                >
                    Delete
                </button>

            </div>

        </li>
    );
};

export default TaskItem;