import React, { useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [task, setTaks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTasks(newTask);
    console.log(task);
    setNewTask("");
  };

  const addTasks = (name: string): void => {
    const newTasks = [...task, { name, done: false }];
    setTaks(newTasks);
  };

  const toggleDoneTask = (i: number) => {
    const newTask: ITask[] = [...task];
    newTask[i].done = !newTask[i].done;
    setTaks(newTask);
  };

  const removeTask = (i: number) => {
    const newTasks: ITask[] = [...task];
    newTasks.splice(i, 1);
    setTaks(newTasks);
  };
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
            <h5 className="card-title text-center">To do list</h5>
              <form className="d-grid gap-2" onSubmit={handleSubmit}>
                <input
                  className="form-control "
                  type="text"
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                  required
                  autoFocus
                />
                <button className="btn btn-success " type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
          {task.map((t: ITask, i: number) => (
            <div className="card card-body mt-2" key={i}>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={t.done ? true : false}
                  onClick={() => toggleDoneTask(i)}
                />

                <label style={{ textDecoration: t.done ? "line-through" : "" }}>
                  {t.name}
                </label>

                <i
                  className="bi bi-trash3"
                  style={{ float: "right" }}
                  onClick={() => removeTask(i)}
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
