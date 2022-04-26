import './App.css';
import Header from '../Header/Header';
import Tasks from '../Tasks/Tasks';
import {useState} from 'react';
import AddTask from '../AddTask/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false); 
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Your tasks will appear in this format.',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Click the "Add" button to create a new task and the "X" to remove them.',
            day: 'Feb 6th at 4:48pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'The green bar on the left side indicates weather you set a reminder for the task.',
            day: 'Feb 15th at 2:24pm',
            reminder: true,
        },
    ]
  )

  const addTask = (task) => {
    const id = Math.floor(Math.random()* 10000) + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  const deleteTask =(id) => {
    setTasks(tasks.filter( (task)=> task.id !== id ))
    
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask) } showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks
      tasks={tasks}
      onDelete={deleteTask}
      onToggle={toggleReminder}/> : ('There are no tasks to show.')}
      
    </div>
  );
}

export default App;
