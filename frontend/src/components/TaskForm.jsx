import { useState } from "react";

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (!title.trim()) return;

        addTask(title);

        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="input-group">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter task..."
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <button
                    className="btn btn-primary"
                    type="submit"
                >
                    Add
                </button>

            </div>
        </form>
    );
};

export default TaskForm;