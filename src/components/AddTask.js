import { useState } from 'react'
// Each input has its own component level state

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Please add text.')
            return
        }

        onAdd({ text, day, reminder })
        //Clear selections
        setText('')
        setDay('')
        setReminder(false)

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            {/*// Typing in the input will fire onChange*/}
            <input type="text" placeholder='Add Task' value={text}
                   onChange={ (e) => setText(e.target.value)}/>
        </div>

        <div className='form-control'>

            <label>Day & Time</label>
            <input type="text" placeholder='Add Day & Time' value={day}
                   onChange={ (e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type="checkbox" value={reminder}
                   onChange={ (e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input
            type="submit"
            checked={reminder}
            value='Save Task'
            className='btn btn-block'/>
            
        </form>
    )
}

export default AddTask