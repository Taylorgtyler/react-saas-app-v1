function TasksPage() {
    const [tasks, setTasks] = useState([]);
  
    function handleAddTask(newTask) {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  
    return (
      <div>
        <h1>Tasks</h1>
        <TaskForm onSubmit={handleAddTask} />
        {/* Render the list of tasks here */}
      </div>
    );
  }