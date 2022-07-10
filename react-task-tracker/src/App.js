import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';
function App() {

   //name state, function name, and default value
   const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Doctors Appointment 2',
        day: 'Feb 6th at 2:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Doctors Appointment 3',
        day: 'Feb 7th at 2:30pm',
        reminder: false,
    },
    {
        id: 4,
        text: 'Doctors Appointment 4',
        day: 'Feb 8th at 2:30pm',
        reminder: true,
    }

])

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder:
        !task.reminder} : task
      )
    )
  }

  return (
    <div className="container">
      <Header/>
      <AddTask/>
      {tasks.length >0 ? 
      (<Tasks tasks ={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>): 
      ('No tasks to show :(')}
    </div>
  );
}

export default App

