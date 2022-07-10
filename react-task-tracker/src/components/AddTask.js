import { useState } from "react"

const AddTask = () => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input type="text" placeholder="Add task"/>
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input type="text" placeholder="Add day & time"/>
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set reminder</label>
        <input type="checkbox" placeholder="Set reminder"/>
      </div>
      <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>
  )
}

export default AddTask
