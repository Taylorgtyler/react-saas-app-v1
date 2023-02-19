const [tasks, setTasks] = useState([]);

function TaskForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
  
    function handleSubmit(e) {
      e.preventDefault();
      onSubmit({ name, description });
      setName('');
      setDescription('');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }
  